import React from "react";
import may from "./img/mayukh.jpg";

const About = () => {
  return (
    <>
      <section class="text-center about">
        <h1>About US</h1>
        <div class="container">
          <div class="row">

            <div class="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200">
            <span >
            <img src={may} className="img" />
            </span>
              <h3>Mayukh goswami </h3>
              <p class="lead"> Yodafy is a Education Fundamentals finishing school, where we help the college graduates become employable through Gamified training & help the companies meet their employee requirement through project directed training by Industry veterans.

Yodafy has been instrumental in helping multiple client companies bridge their skill and employment gap by providing graduates training on Project specific and Extra Skillset in record time and least expense.

In case you want to know how Yodafy can help you grow or even discuss about ideas on how Yodafy can help meet your client and industry demand do E-mail at: mayukh.goswami@yodafy.in </p>
          </div>
          <div class="clearfix visible-md-block visible-sm-block"></div>


        </div>
       </div>
    </section>
        </>
    )
}
export default About