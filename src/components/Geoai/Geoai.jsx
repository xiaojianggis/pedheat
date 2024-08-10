import React from 'react';
import { Link } from "react-router-dom";
import './Geoai.css';

const handleClick = (href) => {
	window.location.href = href;
};

export const Geoai = () => {
	const links = [
		{
			text: "Li, X. (2021). Investigating the spatial distribution of resident’s outdoor heat exposure across neighborhoods of Philadelphia, Pennsylvania using urban microclimate modeling. Sustainable Cities and Society, 72, 103066.",
			url: 'https://www.sciencedirect.com/science/article/abs/pii/S2210670721003504'
		},
		{
			text: "Li, X., & Wang, G. (2021). GPU parallel computing for mapping urban outdoor heat exposure. Theoretical and Applied Climatology, 145(3), 1101-1111.", 
			url: "https://link.springer.com/article/10.1007/s00704-021-03692-z"
		}, 
		{
			text: "Li, X., Chakraborty, T. C., & Wang, G. (2023). Comparing land surface temperature and mean radiant temperature for urban heat mapping in Philadelphia. Urban Climate, 51, 101615.",
			url: 'https://www.sciencedirect.com/science/article/pii/S2212095523002092?casa_token=t8CJbBU3YVUAAAAA:NIJuSL9as_zMpyLqeEgQVxsFBS4urDU5JvcdhpoVk0ykXd0krvufKFSv0P-opjfOGdhuzBFFqa4'
		},
		{
			text: "Li, X., Wang, G, Zaitchik, B, Hsu, A, Chakraborty, T. C, (2024), Sensitivity and vulnerability to summer heat extremes in major cities of the United States, Enviornmental Research Letter (Accepted).",
			url: ''
		},
		{
			text: "Li, X, (2024), Mapping pedestrian network level outdoor heat hazard distributions in Philadelphia, Environment and Planning B: Urban Analytics and City Science, (Accepted).",
			url: ''
		}

	];

	return (
		<section className="literature-container" id='methodology'>
			<div id="pub-column-1">
				<p>Publications</p>
			</div>

			<div id='pub-column-2'>
				{links.map((link, index) => (
					<li key={index}>
						<a href={link.url} target='_blank' rel="noopener noreferrer">
							{link.text}
						</a>
					</li>
				))}
			</div>
		</section>
	)
};
