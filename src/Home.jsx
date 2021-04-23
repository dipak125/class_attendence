import React,{useState} from 'react'
import DatePicker from  'react-datepicker'
import  './App.css';
import 'react-datepicker/dist/react-datepicker.css'

const Home=()=>{

  const [selectedDate, setSelectedDate] = useState(null)
  
    return(
     
           <div>
             <div class="left">
                  <div>
                      <div class="top">
                          <u><h1>Obout course:</h1></u>
                            <h3>Include every Bootstrap JavaScript plugin and dependency with one of our two bundles. Both bootstrap.bundle.js and bootstrap.bundle.min.js include Popper for 
                              our tooltips and popovers. For more information about what’s included in Bootstrap, please see our contents section.</h3>
                      </div>
                      <div class="bottom">
                          <u><h1>Obout topic:</h1></u>
                          <h3>Read and subscribe to The Official Bootstrap Blog.
                              Join the official Slack room.
                              Chat with fellow Bootstrappers in IRC. On the irc.freenode.net server, in the ##bootstrap channel.
                              On the irc.freenode.net server, in the ##bootstrap channel
                               delivery mechanisms for maximum discoverability.</h3>
                      </div>
                  </div>
             </div>
             <div class="right">
                  <u><h2>list of the absent stuent</h2></u>
                  <div className="App">
                  <DatePicker 
      placeholder="Enter date"
      selected={selectedDate}
       onChange={date => setSelectedDate(date)}
       dateFormat='dd/MM/yyyy'
       isClearable />
                  </div>
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
       <div class="foot">  
                <h1>hello dipak</h1>
             </div>
            
     </div>
     
  </div> 
       
    )
}
export default Home;