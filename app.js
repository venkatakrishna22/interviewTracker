const cors = require("cors");
const express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const mongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017";
const dbName = "interviewtracker";
var db;
mongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected to db");
    db = client.db(dbName);
    return db;
  }
});

app.get("/", (req, res) => {
  res.send("connected");
});
app.post("/add", (req, res) => {
    let AccOrOutside = req.body.AccOrOutside;
    let candidateOrEmployeeName= req.body.candidateOrEmployeeName;
    let cidOrEid= req.body.cidOrEid;
    let emailId=req.body.emailId
    let role=req.body.role
    let skillSet = req.body.skillSet
    let status= req.body.status
    let date=req.body.date
    let interviewedBy = req.body.interviewedBy
    let shiftb=req.body.shiftb
    let backToOffice=req.body.backToOffice
    let comments=req.body.comments

  db.collection("details").findOne(
    { emailId: emailId },
    (err, result) => {
      if (result) {
        res.status(400).json("Employee details already exists");
      } else if (err) {
        res.send(err);
      } else {
        db.collection("details").insertOne(
          {
            AccOrOutside :AccOrOutside,
            candidateOrEmployeeName:candidateOrEmployeeName,
            cidOrEid:cidOrEid,
            emailId:emailId,
            role:role,
            skillSet:skillSet,
            status: status,
            date:date,
            interviewedBy:interviewedBy,
            shiftb:shiftb,
            backToOffice:backToOffice,
            comments:comments
        
          },
          (err) => {
            if (err) {
              console.log(err);
            } else {
              res.status(200).json("Employee details added");
            }
          }
        );
      }
    }
  );
});

app.post("/delete",(req,res)=>{
    let emailId=req.body.emailId;
    db.collection("details").remove({emailId:emailId},(err)=>{
        if(err){
            res.send(err)
        }
        else{
            res.status(200).json("Employee details deleted successfully");
        }
    }
    )
})
app.put("/update/:emailId",(req,res)=>{
  let AccOrOutside = req.body.AccOrOutside;
    let candidateOrEmployeeName= req.body.candidateOrEmployeeName;
    let cidOrEid= req.body.cidOrEid;
    let emailId=req.params.emailId
    let role=req.body.role
    let skillSet = req.body.skillSet
    let status= req.body.status
    let date=req.body.date
    let interviewedBy = req.body.interviewedBy
    let shiftb=req.body.shiftb
    let backToOffice=req.body.backToOffice
    let comments=req.body.comments
  db.collection("details").findOneAndUpdate({emailId:emailId},{$set:{
    AccOrOutside :AccOrOutside,
    candidateOrEmployeeName:candidateOrEmployeeName,
    cidOrEid:cidOrEid,
    role:role,
    skillSet:skillSet,
    status: status,
    date:date,
    interviewedBy:interviewedBy,
    shiftb:shiftb,
    backToOffice:backToOffice,
    comments:comments
   }},(err)=>{
    if(err){
      res.send(err)
    }
    else{
      res.status(200).json("Employee details updated successfully");
    }
  })

})
app.get('/details/:emailId',(req,res)=>{
  emailId=req.params.emailId
  collection = db.collection('details')
  collection.find({emailId}).toArray((err,result)=>{
      if(err){
          console.log(err)
      }else{
          res.json(result)
      }
  })
})
app.get('/details',(req,res)=>{
  collection = db.collection('details')
  collection.find({}).toArray((err,result)=>{
      if(err){
          console.log(err)
      }else{
          res.send(result)
      }
  })
})


module.exports = app;
