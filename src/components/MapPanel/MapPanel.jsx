import React from 'react';
import Map from 'react-map-gl';
import './MapPanel.css';
import { MapContainer } from '../MapContainer/MapContainer';

export const MapPanel = () => {
	return (

		<div id='heatmap-scales'>
			<div className="heatmap-scales-text">
				{/* <h1>Pedestrian level heat at multiple scales</h1> */}
				<h2>Heat maps at the different scales </h2>
				<p id='heatmap-scales-description'>
					This project uses AI, urban microclimate modeling, and geospatial technologies to estimate and map the urban heat distribution at an unprecedently detailed level with spatial resolution of 1 m. This is basically the pedestrian level heat exposure with consideration of the fine level urban features. Based on the 1 m resolution MRT map, this project further estimated the census tract level heat exposure with the building roof pixels mask out, since nobody live on top of buildings. In addition, it is possible to examine the city-wide heat exposure along the sidewalks, around public transit stations, and within playgrounds and parks. The fine-level heat maps also provide more actionable insights at local scale for heat mitigation practices, such as increasing tree canopies and placing shade in the right places, especially in those areas where human activities take place but have high MRT values. Please scroll down to examine the heat exposure maps different scales, census tract, sidewalk level, and down to 1 m pixel level. Future work will also include the playground level and building block level heat maps.
				</p>
			</div>

			<div className='map-panel-container'>
				<main className='map-panel-card'>
					<MapContainer />
				</main>
			</div >
		</div>


	);
}

