import React, { useState } from 'react'
import './App.css';


const Home = () => {
  const date = new Date();
  const dd = date.getDate();
  const mm = date.getMonth();
  const yyyy = date.getFullYear();
  return (

    <div>
      <div class="left">
        <div>
          <div class="top">
            <u><h1>About course:</h1></u>
            <h3>Include every Bootstrap JavaScript plugin and dependency with one of our two bundles. Both bootstrap.bundle.js and bootstrap.bundle.min.js include Popper for
                              our tooltips and popovers. For more information about what’s included in Bootstrap, please see our contents section. Going to see the changes</h3>
          </div>
          <div class="bottom">
            <u><h1>About topic:</h1></u>
            <h3>Read and subscribe to The Official Bootstrap Blog.
            Join the official Slack room.
            Chat with fellow Bootstrappers in IRC. On the irc.freenode.net server, in the ##bootstrap channel.
            On the irc.freenode.net server, in the ##bootstrap channel
                               delivery mechanisms for maximum discoverability.</h3>
          </div>
        </div>
      </div>
      <div class="right">
        <u><h2><center>List of the absent student</center></h2></u>
        <h3><center>Date: {dd}-{mm}-{yyyy}</center></h3>

        <table class="table caption-top">

          <thead>
            <tr>
              <th scope="col">Roll</th>
              <th scope="col">Name</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>rajiv</td>

            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Raz</td>

            </tr>
            <tr>
              <th scope="row">4</th>
              <td>dipak</td>

            </tr>
            <tr>
              <th scope="row">5</th>
              <td>dipankar</td>

            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Sahil</td>

            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Mrinal</td>

            </tr>
            <tr>
              <th scope="row">8</th>
              <td>koushik</td>

            </tr>
            <tr>
              <th scope="row">9</th>
              <td>koushik</td>

            </tr>
            <tr>
              <th scope="row">10</th>
              <td>koushik</td>

            </tr>
            <tr>
              <th scope="row">11</th>
              <td>tapash</td>

            </tr>
          </tbody>
        </table>


      </div>
      
    </div>

  )
}
export default Home;