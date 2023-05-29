import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Update = () => {

  const {emailId} = useParams()
  const [candidateOrEmployeeName, setCandidateOrEmployeeName] = useState("");
  const [cidOrEid, setCidOrEid] = useState("");
  const [role, setRole] = useState("");
  const [skillSet, setSkillSet] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const [interviewedBy, setInterviewedBy] = useState("");
  const [AccOrOutside, setAccOrOutside] = useState("");
  const [comments, setComments] = useState("");
  const [shiftb, setShiftb] = useState("");
  const [backToOffice, setBackToOffice] = useState("");
  useEffect(()=>{
    getDetails()
  },[])
  const getDetails=async()=>{
    let result= await fetch('http://localhost:4000/details/'+emailId);
    result=await result.json();
    console.log(result)
   setCandidateOrEmployeeName(result[0].candidateOrEmployeeName)
   setCidOrEid(result[0].cidOrEid)
   setRole(result[0].role)
   setSkillSet(result[0].skillSet)
   setStatus(result[0].status)
   setDate(result[0].date)
   setInterviewedBy(result[0].interviewedBy)
   setAccOrOutside(result[0].AccOrOutside)
   setShiftb(result[0].shiftb)
   setBackToOffice(result[0].backToOffice)
   setComments(result[0].comments)
  }
  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios.put("http://localhost:4000/update/"+emailId, {
          candidateOrEmployeeName,
          cidOrEid,
          role,
          skillSet,
          status,
          date,
          interviewedBy,
          AccOrOutside,
          shiftb,
          backToOffice,
          comments,
        })
        .then((res) => {
          if (res.data == "Employee details updated successfully") {
            alert("Employee details updated");
            history("/");
          }
        });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
  <div className="col-11 col-md-6 col-lg-5  mb-4 text-center" id="card">
        <div className="card p-0 overflow-hidden h-100 shadow text-center">
          <div className="card-body">
            <h1 className="text-center mt-3">Update Candidate</h1>
            <form onSubmit={handleSubmit} >
              <div class="form-group">
              <label for="exampleFormControlInput1">Employee Name:</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Name"
                  required
                  value={candidateOrEmployeeName}
                  onChange={(e) => setCandidateOrEmployeeName(e.target.value)}
                />
                <label for="exampleFormControlInput1">Employee Id or Candidate Id:</label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Id"
                  required
                  value={cidOrEid}
                  onChange={(e) => setCidOrEid(e.target.value)}
                />
                <label for="exampleFormControlInput1">Email address:</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Email"
                  required
                  disabled
                  value={emailId}
                />
                 <label for="exampleFormControlInput1">Role:</label>
                <input
                  type="Text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Role"
                  required
                  value={role}
            onChange={(e) => setRole(e.target.value)}
                />
                <label for="exampleFormControlInput1">Skill:</label>
                <input
                  type="Text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Role"
                  required
                  value={skillSet}
                  onChange={(e) => setSkillSet(e.target.value)}
                />
                <label for="exampleFormControlSelect1">Status:</label>
                <select required value={status}  onChange={(e) => setStatus(e.target.value)}  class="form-control" id="exampleFormControlSelect1">
                <option value="" disabled selected>Select status</option>
                  <option>Yet to be Interviewed</option>
                  <option>Interview In Progress</option>
                  <option>Interviewed</option>
                  <option>Selected</option>
                  <option>Rejected</option>
                </select>
                <label for="exampleFormControlInput1">Date:</label>
                <input
                  type="date"
                  class="form-control"
                  id="exampleFormControlInput1"
                  required
                  value={date}
            onChange={(e) => setDate(e.target.value)}
                />
               <label for="exampleFormControlSelect1">Interviewed By:</label>
                <select required value={interviewedBy}  onChange={(e) => setInterviewedBy(e.target.value)}  class="form-control" id="exampleFormControlSelect1">
                <option value="" disabled selected>Select Interviewer</option>
                  <option>Anandam, Ananth</option>
                  <option>Shah, Kruti</option>
                  <option>Srikakolapu, Sirisha</option>
                  <option>Siripuram, Saikumar</option>
                  <option>Gatta, Sireesha</option>
                  <option>Tanikella, Prasanna</option>
                  <option>Bisoyi, Rajkiran</option>
                  <option>Karnala, Keerthi</option>
                  <option>Gabu, Siva Ganesh</option>
                  <option>Chowdhury, Indranil</option>
                  <option>Yenugu, Vani</option>
                  <option>Rajamanickam, Tamilselvan</option>
                  <option>Gunupaneni, Ramesh</option>
                  <option>Bose, Ronita</option>
                  <option>Ghori, Tahauddin</option>
                  <option>Joshi, Rohan</option>
                  <option>KUMAR, SANJEEV</option>
                  <option>Koiloth Ramath, Sarath</option>
                  <option>Kolli Venkata, Rajasekhar Reddy</option>
                  <option>Mandal, Soumi</option>
                  <option>Maddala, Ram</option>
                  <option>Kadapa, Leelavathi</option>
                  <option>Kumar Mathur, Rahul</option>
                  <option>Jha, Amber</option>
                  <option>Vadada, Mahesh</option>
                  <option>Peddiraju, Sai Krishnam Raju</option>
                  <option>Ganesana, Chaitanya</option>
                  <option>Anna Vijayakumar, Monisha</option>
                  <option>Sharma, Rahul</option>
                  <option>Battula, Mallikharjuna Rao</option>
                  
                </select>
                <label for="exampleFormControlSelect1">Candidate Type:</label>
                <select required  value={AccOrOutside} onChange={(e) => setAccOrOutside(e.target.value)} class="form-control" id="exampleFormControlSelect1">
                <option value="" disabled selected>Select Type</option>
                  <option>Accenture Employee</option>
                  <option>Recruiting Candidate</option>
                </select>
                <label for="exampleFormControlSelect1">Shift B:</label>
                <select required  value={shiftb} onChange={(e) => setShiftb(e.target.value)} class="form-control" id="exampleFormControlSelect1">
                <option value="" disabled selected>Select Type</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
                <label for="exampleFormControlSelect1">Back to office:</label>
                <select required  value={backToOffice} onChange={(e) => setBackToOffice(e.target.value)} class="form-control" id="exampleFormControlSelect1">
                <option value="" disabled selected>Select Type</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
                <label for="exampleFormControlTextarea1">
                  Comments:
                </label>
                <textarea 
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value={comments}
                  placeholder="Enter Comments"
                  onChange={(e) => setComments(e.target.value)}
                ></textarea>
              </div><br/>
              <div className="button1">
          <button type="submit" className=" btn btn-primary">
            Update
          </button>
        </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Update;
