const supertest = require("supertest");
const app = require("../app");

const dbName = "interviewtracker";


beforeAll(async()=>{
     await details.deleteOne({email:'test@accenture.com'});
})
    afterAll(async()=>{
    await details.deleteOne({email:'test@accenture.com'});
    })

describe("add",()=>{
    test('should return status as 200 on successful adding', async () => {
        const response = await supertest(app).post("/add").send({
            
            AccOrOutside :"Accenture",
            candidateOrEmployeeName:"test",
            cidOrEid:"1234",
            emailId:"test@accenture.com",
            role:"custom software engineer",
            skillSet:"React",
            status: "rejected",
            date:"22/03/2022",
            interviewedBy:"test",
            comments:"test test test"

        })
        expect(response.statusCode).toBe(200);
     })
     test('should not return status other than 200 on successful adding', async () => {
        const response = await supertest(app).post("/add").send({
            
            AccOrOutside :"Accenture",
            candidateOrEmployeeName:"test",
            cidOrEid:"1234",
            emailId:"test1@accenture.com",
            role:"custom software engineer",
            skillSet:"React",
            status: "rejected",
            date:"22/03/2022",
            interviewedBy:"test",
            comments:"test test test"

        })
        expect(response.statusCode).not.toBe(400);
     })
     test('should return status as 400 on unsuccessful adding', async () => {
        const response = await supertest(app).post("/add").send({
            
            AccOrOutside :"Accenture",
            candidateOrEmployeeName:"test",
            cidOrEid:"1234",
            emailId:"test13@accenture.com",
            role:"custom software engineer",
            skillSet:"React",
            status: "rejected",
            date:"22/03/2022",
            interviewedBy:"test",
            comments:"test test test"

        })
        expect(response.statusCode).toBe(400);
     })
     test('should not return status as 400 on successful deletion', async () => {
        const response = await supertest(app).post("/delete").send({
            emailId:"test1@accenture.com",

        })
        expect(response.statusCode).not.toBe(400);
     })
})