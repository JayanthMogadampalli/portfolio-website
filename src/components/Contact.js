import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.scss';


export default function ContactForm() {
	const [state, handleSubmit] = useForm("contactForm");
	if (state.succeeded) {
		return <p>Thanks for joining!</p>;
	}
	return (
		<div className="d-flex flex-row flex-wrap contact">
		<div className="col-lg-4"><h1>Contact</h1></div>
		<div className="col-lg-8">
		<form onSubmit={handleSubmit} className="contactForm flex-column">
		<div class="col-9">
		<input id="email" type="text" name="name" placeholder="Name" className="form-control" />
		<ValidationError field="name" prefix="Name" errors={state.errors} />
		</div>
		<div class="col-9">
		<input id="email" type="email" name="email" placeholder="Email" className="form-control" />
		<ValidationError field="email" prefix="Email" errors={state.errors} />
		</div>
        <div class="col-9">
		<textarea class="form-control" name="message" placeholder="Enter your message" rows="3"></textarea>
		</div>		
		<div class="col-9 ml-10">
      <button type="submit" class="btn btn-primary" disabled={state.submitting}>Send</button>
	  </div>
    </form>  
		</div>
		</div>
	);
  }