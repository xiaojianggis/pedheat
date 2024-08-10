import React from 'react';
import './Home.css';
// import Resume from "../../assets/Campbell-Doug-Resume.pdf";

export const Home = () => {

	// const openResume = () => {
	// 	window.open(Resume, "_blank")
	// }
	
	return (
		<section className='home-container' id='home'>
			<main className='home-card'>
				<div className='home-card-container'>
					<img className="self-portrait" src={require('../../assets/Heatt730-crop.gif')} alt="Heatt730" />
					<div className='overlay-text-title'>
						Pedestrian level heat exposure
						<br/>
						<div className='overlay-text-subtitle'>
							Mapping and modeling heat exposure at hyperlocal level
						</div>
					</div>
					{/* <button className='click-botton'>Start to explore</button> */}
				</div>
			</main>
		</section>
	);
}
