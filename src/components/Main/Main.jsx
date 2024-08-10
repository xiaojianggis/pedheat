import React from 'react';
import { NavBar } from '../NavBar/NavBar';
import { Home } from '../Home/Home';
import { MapPanel } from '../MapPanel/MapPanel';
import { MapContainer } from '../MapContainer/MapContainer';
import { Methodology } from '../Methodology/Methodology';
import { Literature } from '../Literature/Literature';
import Heatmetrics from '../Heatmetrics/Heatmetrics';
import { Geoai } from '../Geoai/Geoai';
import { MyWork } from '../MyWork/MyWork';
import { MyWorkMobile } from '../MyWorkMobile/MyWorkMobile';
import { Contact } from '../Contact/Contact';
import './main.css'

export const Main = (props) => {
	const openResume = () => {
		// window.open(Resume, "_blank")
	}

	return (
		<div id='main-container'>
			{/* <NavBar /> */}
			<Home />
			<Literature />
			<Heatmetrics />
			<MapPanel />
			<Methodology />
			
			<Geoai />
			{/* <MyWork  /> */}
			{/* {props.width < 900 ? <MyWorkMobile /> : <MyWork />} */}
			{/* <Contact openResume={openResume} /> */}
			<Contact />
		</div>
	);
}
