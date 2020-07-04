import React, { Component } from 'react';

const Timeline  = (props) => {
  const data = props.portfolioData;
  let expList;
  expList = data.workExp.map((exp, i) => (
    <div className="stepper__list" key={ i }>
      <div className="stepper__item">
        <div className="stepper__step">
          <div className="stepper__timeline">
            <div className="stepper__circle"> </div>
            <div className="stepper__timeline-heading"> { exp.title } </div>
          </div>
        </div>
        <div className="stepper__info">
          <div className="stepper__body">
            <h5 className="stepper__sub"> { exp.company }</h5>
            <span className="stepper__sub"> { exp.date }</span>
            <div className="stepper__sub"> { exp. description } </div>
          </div>
        </div>              
      </div>
    </div>     
  ))
	return(
    <section className="site-section  site-section--with-background" id="work">
      <div className="container">
          <div className="site-section__icon stroke-white">
          </div>        
        <h1 className="site-heading text-white"> Work  </h1>
        <div className="stepper">
           { expList }    

        </div>
      </div>
    </section>	  
		)
}



export default Timeline ;