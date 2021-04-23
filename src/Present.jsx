import React from "react";

const Present=(props)=>{
    const{student,presentStudent}=props;
    
    const submit=()=>{
       
    console.log(student.name);
        presentStudent(student.roll);
    }
    
       
    
    return(
        <>
            <h1>{student.name} confirm this is your attendence sheet</h1>
            <button onClick={()=> submit()}>Confirm</button>
        </>
    )

}
export default Present;