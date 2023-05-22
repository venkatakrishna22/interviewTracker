import { BrowserRouter,Route,Routes } from "react-router-dom";
import FetchOne from "./details";
import Candidate from "./addcandidate";
import Update from "./update";
 function MyRouter() {

    
   return (
       <div>
            <BrowserRouter>
            
                 <Routes>
                    <Route path="/" element={<FetchOne />} />
                   <Route path="/add" element={<Candidate/>} />
                   <Route path="/update/:emailId" element={<Update/>} />
               </Routes>

            </BrowserRouter>

        </div>
    )
}
 export default MyRouter;