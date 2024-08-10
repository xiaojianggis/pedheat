import React from 'react';
import { Link } from "react-router-dom";
import './Literature.css';

export const Literature = () => {
	return (
		<section className="literature-container">
			<div id="liter-column-1">
				<p>Extreme heat is dangerous</p>
			</div>
			
			<div id='liter-column-2'>
			Extreme heat events are increasing in frequency and intensity in US cities and are responsible for a greater annual number of climate-related fatalities, on average, than any other form of extreme weathers. With the climate change, multi-day heat waves are projected to increase in frequency, length, and intensity more often in many cities. In US, one-fifth of hazard deaths are caused by extreme heat. Exposure to excessive heat can kill people, and it also can cause general discomfort, respiratory problems, heat cramps and exhaustion, non-fatal heat stroke, and dehydration, all of which lead to a loss of labor productivity and decreased learning. Studying how humans are exposed to heat is thus important for mitigating the negative impacts of heat exposure on human health and building resilience to more and more frequent and intensive heat events in the context of climate change. Knowing the spatial distribution and the temporal variation of heat is of great importance to understand how people are exposed to the extreme heat.			</div>
		</section>
	)
};
