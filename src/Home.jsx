import React,{useState} from 'react'
import DatePicker from  'react-datepicker'
import  './App.css';
import 'react-datepicker/dist/react-datepicker.css'

function Side(){
  const [selectedDate, setSelectedDate] = useState(null)
  return (
    <div className="App">
      <h1>Today'Date</h1>
      <DatePicker 
      placeholder="Enter date"
      selected={selectedDate}
       onChange={date => setSelectedDate(date)}
       dateFormat='dd/MM/yyyy'
       isClearable />
       <div>
       <table className="table table-hover table-dark">
  <thead>
    <tr>
      <th scope="col">Roll</th>
      <th scope="col">Name</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Anand</td>
      
    </tr>
    <tr>
      <th scope="row">2</th>
       <td>Sourav</td>
      
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Pritam</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Rohit</td>
      
    </tr>
    <tr>
      <th scope="row">5</th>
       <td>Virat</td>
      
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Bhuvi</td>
      
      
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>Bhuviu</td>
      
      
    </tr>
  </tbody>
</table>
      </div>
    </div>
    
  )
}
export default Side;