import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import './ContactForm.css'

export const ContactForm = () => {
	const [sent, setSent] = useState('false');
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('contact_service', 'contact_form', form.current, 'ricvyJgj76QPQnqUM')
			.then((result) => {
				console.log(result.text);
				setSent(true);
			}, (error) => {
				console.log(error.text);
			});
		e.target.reset()
	};


	return (
		<form ref={form} onSubmit={sendEmail} className='contact-form-container'>
			<div className='form-group'>
				{/* <label className="input-label" htmlFor='name'>Name</label>
				<input className="input-field" type="text" name="user_name" placeholder="Enter your name" required /> */}
			</div>
			<div className='form-group'>
				<label className="input-label"><strong>PI</strong>: 
				<a href="https://www.design.upenn.edu/people/xiaojiang-li">
					 Xiaojiang Li, 
				</a>
				Assistant Professor at University of Pennsylvania
				</label>
				<label className="input-label"><strong>Website</strong>: Urban Spatial Informatics Lab, UPenn</label>
				<label className="input-label" htmlFor='email'><strong>Email</strong>: jianglix@design.upenn.edu</label>
				{/* <input className="input-field" type="email" name="user_email" placeholder="Enter your email" required /> */}
			</div>
			{/* <div className='form-group'>
				<label className="input-label" htmlFor='message'>Message</label>
				<textarea className="input-field if-text" name="message" placeholder="Enter your message" required />
			</div> */}
			{/* {sent === true ?
				<button className="contact-button" disabled>Message Sent!</button> :
				<button className="contact-button" type="submit" value="Send">Submit</button>
			} */}
		</form>
	)
}