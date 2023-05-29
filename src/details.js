import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const FetchOne = () => {
  var [fetch, setFetch] = useState([]);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [searchStatus, setSearchStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState();
  console.log(startDate)
// const filtered=fetch.filter((item)=>{
//       return(
//         item.date>=startDate&&
//         item.date<=endDate
//       )
//     })
//     console.log(filtered)

  



  useEffect(() => {
    axios({
      url: "http://localhost:4000/details",
      method: "get",
    }).then((response) => {
      // console.log(response.data);
      setFetch(response.data);
    });
  }, [fetch]);
  const history = useNavigate();


  function removeDetails(emailId) {
    axios
      .post("http://localhost:4000/delete", {
        emailId,
      })
      .then(
        (response) => {
          if (response.data == "Employee details deleted successfully") {
            alert("Employee details deleted");
            history("/");
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }
  return (
    <>
    
      <h1 className="text-center mt-3">Candidate details</h1>
      {
        <input type="text"  class="form-control-md" id="name" placeholder="Enter Name" value={search} onChange={(e) => setSearch(e.target.value)}/>
      }
     
      {
        <select required value={query}  onChange={(e) => setQuery(e.target.value)}  class="form-control-md" id="exampleFormControlSelect1">
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
        
      }
      {
       <select required value={searchStatus}  onChange={(e) => setSearchStatus(e.target.value)}  class="form-control-md" id="exampleFormControlSelect1">
       <option value="" disabled selected>Select status</option>
         <option>Yet to be interviewed</option>
         <option>Interview In Progress</option>
         <option>Interviewed</option>
         <option>Selected</option>
         <option>Rejected</option>
       </select>
        
      }
      <label for="exampleFormControlInput1" id="startdate">Start date:</label>
      <input
                  type="date"
                  class="form-control-md"
                  id="exampleFormControlInput1"
                  required
                  value={startDate}
                  placeholder="Start date"
            onChange={(e) => setStartDate(e.target.value)}
                />
                <label for="exampleFormControlInput1" id="startdate">End date:</label>
      <input
                  type="date"
                  class="form-control-md"
                  id="exampleFormControlInput1"
                  required
                  value={endDate}
                  placeholder="Start date"
            onChange={(e) => setEndDate(e.target.value)}
                />

              <div>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Interviewer</th>
                      <th>Status</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      fetch
                      .filter(
                        (item) =>
                          item.candidateOrEmployeeName.toLowerCase().includes(search)&&
                          item.interviewedBy.includes(query)&&
                          item.status.includes(searchStatus)&&((startDate!==""&&endDate!=="")?item.date>=startDate&&item.date<=endDate:true)
                      )
                      
                      .map((item)=>{
                        return(
                          <tr>
                            <td>{item.candidateOrEmployeeName}</td>
                            <td>{item.emailId}</td>
                            <td>{item.role}</td>
                            <td>{item.interviewedBy}</td>
                            <td>{item.status}</td>
                            <td><Link to={"/update/"+item.emailId}><button className="btn btn-primary">Update</button></Link></td>
                            <td><button className="btn btn-danger" onClick={()=>removeDetails(item.emailId)}>Delete</button></td>
                          </tr>
                        )
                      })
                    }
                  </tbody>

                </table>
              </div>
    </>
  );
};
export default FetchOne;
