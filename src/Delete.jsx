import React from "react";
import {BrowserRouter,Route,Link} from "react-router-dom";

const Delete=(props)=>{
    const{del,student}=props;
    console.log(student.name);
    console.log(student.roll);
    const submit=()=>{
        del(student.roll);
    }
    return(
        <>
            <h1>sure you want to delete..{student.name}</h1>
           <Link to="/"> <button onClick={submit}>confirm</button></Link>
        </>
    )
}
export default Delete;