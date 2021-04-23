import React from "react";


const Home=(props)=>{
  const{students,present}=props;
  const s=[];
  let j=0;
  for(let i=0;i<students.length;i++)
  {
    for( j=0;j<present.length;j++)
    {
        if(present[j]==students[i])
          break;
    }
    if(j==present.length)
        s.push(students[i])
  }
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
                              Implementation help may be found at Stack Overflow (tagged bootstrap-5).
                              Developers should use the keyword bootstrap on packages that modify or add to the 
                              functionality of Bootstrap when distributing through npm or similar delivery mechanisms for maximum discoverability.</h3>
                      </div>
                  </div>
             </div>
             <div class="right">
                  <u><h2>list of the absent stuent</h2></u>
                  {s.map(s1=>
                     <table>
                          <tr>
                             <td>{s1.roll}.</td>
                             <td>{s1.name}</td>
                          </tr>
                         
                     </table>
                    )}
                 
             </div>
           </div>
        
    )
}
export default Home;