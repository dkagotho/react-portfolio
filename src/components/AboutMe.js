import React from 'react';


const AboutMe = (props) => {
  // 
  const data = props.portfolioData;
    let aboutMe;
    aboutMe = data.AboutMe.map((s, i) => (
              <div className="stepper__sub2" key={i}> {s.description}</div>
    ));

 	return (
    <section className="site-section" id="aboutme">
      <div className="container">
          <div className="site-section__icon">
          </div>        
        <h1 className="site-heading"> About Me </h1>
        <div className="stepper">
          <div className= "aboutme-description"> { aboutMe } </div> 
          <div className= "aboutme-photo"><img src="../../images/portfolio/diana-photo.png" width="290" height="300"/></div> 
          < a href="../../images/portfolio/Diana-Kagotho-resume.pdf" target="_blank" class="resume-button">Resume</a>
          </div>
          </div>
    </section>	

 		)
}

export default AboutMe;