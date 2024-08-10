import React from 'react';
import './Contact.css';
import { ContactForm } from '../ContactForm/ContactForm';

export const Contact = (props) => {
	return (
		<footer id='contact'>
			<main className='contact-card'>
				<div className='contact-container'>
					<h1 className='contact-heading'>Contact me</h1>
					<ContactForm />
					<div className='contact-card-container'>
						<div className='contact-link-container'>
							<p className='connect'>Connect:</p>
							<a className='contact-link' href="https://twitter.com/GIS_jiang" target="" >X</a>
							<span>/</span>
							<a className='contact-link' href="https://www.linkedin.com/in/xiaojiang-li-a9107966/" rel="noreferrer" target="_blank">LinkedIn</a>
							<span>/</span>
							<a className='contact-link' href="https://github.com/xiaojianggis" rel="noreferrer" target="_blank">Github</a>
							<span>/</span>
							<a className='contact-link' href="https://gis-jiang.medium.com/" rel="noreferrer" target="_blank">Medium</a>
						</div>
					</div>
				</div>
			</main>

			<div className='founder-container'>
				<img className="founder-fig" src={require('../../assets/nsf.png')} alt="solweig" />
				<img className="founder-fig" src={require('../../assets/nasa.png')} alt="solweig" />
				<img className="founder-fig" src={require('../../assets/biometeorsai2.png')} alt="solweig" />
			</div>
		</footer>

	);
}