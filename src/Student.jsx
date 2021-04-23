import React from "react";
import Koala from "./Koala.jpg";

const Student=(props)=>{
    const{student}=props;
    console.log(Koala);

    return(
        <>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Roll-No</th>
      <th scope="col">Name</th>
      
     
    </tr>
  </thead>
  <tbody>
   
  
         <tr>
         <th scope="row">{student.roll}</th>
         <td>{student.name}</td>
        
        
       </tr>
   
  </tbody>
</table>
        <div class="center">
            <img src={Koala} class="img" />
           
        </div>
        </>
    )
}
export default Student;