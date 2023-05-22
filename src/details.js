import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const FetchOne = () => {
  var [fetch, setFetch] = useState([]);
  useEffect(() => {
    axios({
      url: "http://localhost:4000/details",
      method: "get",
    }).then((response) => {
      console.log(response.data);
      setFetch(response.data);
    });
  }, [fetch]);
  const history = useNavigate();

  function removeDetails(emailId){
    axios.post("http://localhost:4000/delete",{
      emailId
    })
        .then((response)=>{
        if(response.data=="Employee details deleted successfully"){
          alert("Employee details deleted")
          history("/")
  
        }
    },(error)=>{
        console.log(error)
    })
  }
  return (
    <>
      <h1 className="text-center mt-3">Candidate details</h1>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {fetch.map((item, index) => {
            return (
              <>
              <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
        <div className="card p-0 overflow-hidden h-100 shadow">
          <div className="card-body">
            <h5 className="card-title">Name: {item.candidateOrEmployeeName}</h5>                    
            <p className="card-text">Email: {item.emailId}</p>
            <p className="card-text"><b>Role:{item.role}</b></p>
            <p className="card-text">Skill set: {item.skillSet}</p>
            <p className="card-text">Status: {item.status}</p>
            <p className="card-text">Interviewed By:{item.interviewedBy}</p>
            <p className="card-text">Type: {item.AccOrOutside}</p>
            <Link to={"/update/"+item.emailId}><button type="button" class="btn btn-primary m-2" id="button1">Update</button></Link>
          <Link><button type="button" onClick={()=>removeDetails(item.emailId)} class="btn btn-primary m-2"id="button2">Delete</button></Link>
          </div>
        </div>
      </div>
              </>
              
            );
          })}
        </div>
      </section>
    </>
  );
};
export default FetchOne;
