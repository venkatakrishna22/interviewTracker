import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import *as xlsx from 'xlsx'
const Candidate = () => {
  const [emailId, setEmailId] = useState("");
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
  const [excelData,setExcelData]=useState("")

  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:4000/add", {
          candidateOrEmployeeName,
          cidOrEid,
          emailId,
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
          if (res.data == "Employee details added") {
            alert("Candidate added Successfully");
            history("/");
          } else {
            alert("details already exists");
            history("/");
          }
        });
    } catch (e) {
      console.log(e);
    }
  };
  const readExcel = async(e)=>{
    const file= e.target.files[0];
    const data= await file.arrayBuffer(file);
    const excelfile = xlsx.read (data);
    const excelsheet=excelfile.Sheets[excelfile.SheetNames[0]];
    const exceljson= xlsx.utils.sheet_to_json (excelsheet);
    setExcelData(exceljson);
  }
  console.log(excelData)
  const addFromExcel=()=>{
    {
      for(let i=0;i<=excelData.length-1;i++){
        setCandidateOrEmployeeName(excelData[i].candidateOrEmployeeName)
        setCidOrEid(excelData[i].cidOrEid)
        setEmailId(excelData[i].emailId)
        setRole(excelData[i].role)
        setSkillSet(excelData[i].skillSet)
        setStatus(excelData[i].status)
        setInterviewedBy(excelData[i].interviewedBy)
        setAccOrOutside(excelData[i].AccOrOutside)
        setShiftb(excelData[i].shiftb)
        setBackToOffice(excelData[i].backToOffice)
        try {
          axios
            .post("http://localhost:4000/add", {
              candidateOrEmployeeName,
              cidOrEid,
              emailId,
              role,
              skillSet,
              status,
              interviewedBy,
              AccOrOutside,
              shiftb,
              backToOffice,
              comments,
            })
            .then((res) => {
              if (res.data == "Employee details added") {
                alert("Candidate added Successfully");
                history("/");
              } else if(res.data=="Employee details already exists") {
                alert("details already exists");
                history("/");
              }
              else{
                alert("something went wrong")
              }
            });
        } catch (e) {
          console.log(e);
        }
      }
      
    }
    

  }
  


  return (
    <>
      <div className="col-11 col-md-6 col-lg-5  mb-4 text-center" id="card">
        <div className="card p-0 overflow-hidden h-100 shadow text-center">
          <div className="card-body">
            <h1 className="text-center mt-3">Add Candidate</h1><br/>
            <form action="POST" onSubmit={handleSubmit}>
              <div class="form-group">
              <input type="file" className="form-control" onChange={(e)=>readExcel(e)}/>
              <p>*supports only excel files</p>
              <button className="btn btn-primary" onClick={()=>addFromExcel()}>Add from Excel</button><br/>
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
                  value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
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
                  <option>Yet to be interviewed</option>
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
            Add Details
          </button>
        </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Candidate;
