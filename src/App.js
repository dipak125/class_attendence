
import React, { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Students from "./Students";
import Student from "./Student";
import Nav from "./Nav";
import Home from "./Home";
import Attendence from "./Attendence";
import Present from "./Present";
import AddStudent from "./AddStudent";
import Delete from "./Delete";
import Footer from "./Footer";

const App = () => {

  const [state, setState] = useState({
    students: [
      {
        roll: 1,
        name: "sudi",


      },
      {
        roll: 2,
        name: "Raza",

      },
      {
        roll: 3,
        name: "dipak",

      },
      {
        roll: 4,
        name: "subham",

      },
      {
        roll: 5,
        name: "dipankar",

      },
      {
        roll: 6,
        name: "mrinal",

      },
      {
        roll: 7,
        name: "sahil",

      },
      {
        roll: 8,
        name: "tapash",

      },
    ],
    present: [

    ]
  })
  const presentStudent = (roll) => {
    const student = state.students.find(s => s.roll == roll);

    setState({
      ...state,
      present: [
        ...state.present,
        student,
      ]
    })

  }
  const Addstudent = (student) => {
    const s = state.students.filter(s => s.roll != student.roll);
    setState({
      ...state,
      students: [
        ...s,
        student
      ]
    })
  }
  const del = (roll) => {
    const s = state.students.filter(student => student.roll != roll);
    setState({
      ...state,
      students: [
        ...s,
      ]

    })
  }
  return (
    
<<<<<<< HEAD
      < BrowserRouter >
        < Nav />
        <Route exact path="/" component={() => <Home students={state.students} present={state.present} />} />
        <Route path="/students" component={() => <Students students={state.students} />} />
        <Route path="/student/:id" component={(props) => <Student student={state.students.find(s => s.roll == props.match.params.id)} />} />
        <Route path="/attendence" component={() => <Attendence students={state.students} />} />
        <Route path="/present/:id" component={(props) => <Present presentStudent={presentStudent} student={state.students.find(s => s.roll == props.match.params.id)} />} />
        <Route path="/add" component={() => <AddStudent Addstudent={Addstudent} student={
          {
            roll: "",
            name: ""
          }
        } />} />
        <Route path="/edit/:id" component={(props) => <AddStudent Addstudent={Addstudent} student={state.students.find(student => student.roll == props.match.params.id)} />} />
        <Route path="/delete/:id" component={(props) => <Delete del={del} student={state.students.find(student => student.roll == props.match.params.id)} />} />
      </BrowserRouter>
      <Footer />
=======
     <BrowserRouter>
       <Nav/>
       <Route exact path="/home" component={()=> <Home students={state.students} present={state.present}/>}/>
        <Route  path="/students" component={()=><Students students={state.students}/>}/>
        <Route  path="/student/:id" component={(props)=> <Student student={state.students.find(s=>s.roll==props.match.params.id)}/>}/>
       <Route path="/attendence" component={()=><Attendence students={state.students}/>}/>
       <Route path="/present/:id" component={(props)=> <Present  presentStudent={ presentStudent} student={state.students.find(s=>s.roll==props.match.params.id)}/>}/>
       <Route path="/add" component={()=><AddStudent Addstudent={Addstudent} student={
         {
           roll:"",
           name:""
         }
       }/>}/>
       <Route path="/edit/:id" component={(props)=> <AddStudent Addstudent={Addstudent} student={state.students.find(student=>student.roll==props.match.params.id)}/>}/>
       <Route path="/delete/:id" component={(props)=> <Delete del={del} student={state.students.find(student=>student.roll==props.match.params.id)}/>}/>
     </BrowserRouter>
    
>>>>>>> master
  )
}
export default App;