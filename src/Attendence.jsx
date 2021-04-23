import React from "react";
import {BrowserRouter,Route,Link} from "react-router-dom";


const Attendence=(props)=>{
    const{students}=props;

    

    return(
        <>
             <table class="table">
  <thead>
    <tr>
      <th scope="col">Roll-No</th>
      <th scope="col">Name</th>
      <th scope="col">Action</th>
     
    </tr>
  </thead>
  <tbody>
   
   {students.map(student=>
         <tr>
         <th scope="row">{student.roll}</th>
         <td>{student.name}</td>
         <td>
             <Link to={`/present/${student.roll}`}><button>give the attendence</button></Link>
            
         </td>
        
       </tr>
    )}
  </tbody>
</table>
        </>
    )
}
export default Attendence;