import React from 'react';


const AboutMe = (props) => {
  // 
  const data = props.portfolioData;
    let skillList;
    skillList = data.skills.map((s, i) => (
          <div className="col-2" key={i}>
            <div className="site-skill">
              <div className="site-skill__canvas-wrapper">
        
              </div>
              <div className="site-skill__text"> {s.name}</div>
            </div>           
          </div>          
    ));

 	return (
    <section className="site-section" id="aboutme">
      <div className="container">
          <div className="site-section__icon">
          </div>        
        <h1 className="site-heading"> About me  </h1>
        <div className="row">
    
              { AboutMe } 
                        
        </div>
      </div>
    </section>

 		)
}

export default AboutMe;