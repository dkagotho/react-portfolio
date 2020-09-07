import React from "react";
import PropTypes from "prop-types";


export default class Contact extends React.Component {
	render() {
	return(
    <section className="site-section" id="contact">
    <div className="container"> 
        <div className="site-section__icon">
        </div>          
        <h1 className="site-heading"> Contact </h1>
        <form
          className={this.props.shake}
					action="https://formspree.io/dianakago2@gmail.com" target="_blank"
					method="POST">
					<div className="form-group">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-6 mx-auto">
							</div>
						</div>
					</div>
              <div className="row">
                <div className="col-6"> 
                  <div className="site-form__form-group"> 
                  <div className="row">
							
              <div className="col-12 col-sm-12 col-md-6 mx-auto">
								<input
									type="text"
									name="name"
									className="site-form__label"
									id="name"
									placeholder="Name"
								/>
							</div>
              
							</div>
						</div>
                  </div> 
                </div>
                <div className="col-12 col-sm-12 col-md-6 mx-auto">
								<input
									type="text"
									name="email"
									className="site-form__label"
									id="email"
									placeholder="Email"
								/>
							</div>
            <div className="row"> 
            <div className="col-12">
								<textarea
									name="message"
									className="form-control form-control-lg"
									id="exampleFormControlTextarea1"
									rows="3"
									placeholder="Talk to me :-) ..."
								/>
							</div>
            <div className="site-form__action"> 
              <button 
              type="submit" 
              className="btn btn-primary btn-lg btn-radius"> 
                <span className> </span> Submit
              </button>
            </div>            
            </div>  
            </form>
     </div> 
    </section>
			)
	}

}

Contact.propTypes = {
	fadeInLeft: PropTypes.string,
	shake: PropTypes.string
};