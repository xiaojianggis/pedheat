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
				<a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2314709&HistoricalAwards=false" target="_blank" rel="noopener noreferrer">
					<img className="founder-fig" src={require('../../assets/nsf.png')} alt="solweig" />
				</a>

				<a href="https://science.jpl.nasa.gov/projects/ids/" target="_blank" rel="noopener noreferrer">
					<img className="founder-fig" src={require('../../assets/nasa.png')} alt="solweig" />
				</a>
				<a href="https://www.design.upenn.edu/" target="_blank" rel="noopener noreferrer">
					<img className="founder-fig" src={require('../../assets/penn-logo.png')} alt="solweig" />
				</a>
				<a href="https://www.biometeors.com/" target="_blank" rel="noopener noreferrer">
					<img className="founder-fig" src={require('../../assets/biometeors3.png')} alt="solweig" />
				</a>

			</div>
		</footer>

	);
}