import React from "react";
import {BroserRouter,Route,Link} from "react-router-dom";

const Students=(props)=>{
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
             <Link to={`/student/${student.roll}`}><button>view</button></Link>&nbsp;&nbsp;&nbsp;
             <Link to={`/delete/${student.roll}`}><button>delete</button></Link>&nbsp;&nbsp;&nbsp;
             <Link to={`/edit/${student.roll}`}><button>edit</button></Link>
         </td>
        
       </tr>
    )}
  </tbody>
</table>
        </>
    )
}
export default Students;