import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.scss';


export default function ContactForm() {
	const [state, handleSubmit] = useForm("contactForm");

		if (state.succeeded) {
			console.log("in succeed");
		}
		if(state.errors.length){
			console.log("in errors");
		}
	
	return (
		<div className="d-flex flex-row flex-wrap contact" id="Contact">
		<div className="col-lg-4"><h1 className="contactText">Contact</h1>
		</div>
		<div className="col-lg-8">
		<form onSubmit={handleSubmit} className="contactForm flex-column">
		<div className="col-9">
		<input id="email" type="text" name="name" placeholder="Name" className="form-control" />
		<ValidationError field="name" prefix="Name" errors={state.errors} />
		</div>
		<div className="col-9">
		<input id="email" type="email" name="email" placeholder="Email" className="form-control" />
		<ValidationError field="email" prefix="Email" errors={state.errors} />
		</div>
        <div className="col-9">
		<textarea className="form-control" name="message" placeholder="Enter your message" rows="3"></textarea>
		</div>		
		<div className="col-9 ml-10">
      <button type="submit" className="btn btn-primary" disabled={state.submitting}>Send</button>
	  </div>
    </form>  
		</div>
		</div>
	);
  }