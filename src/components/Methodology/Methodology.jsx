import React from 'react';
import { Link } from "react-router-dom";
import './Methodology.css';

export const Methodology = () => {
	return (
		<section className="methodology-container">
			<div className="method-column-1">
				<p>Efficient microclimate modeling</p>
			</div>

			<div className='method-column-2'>

				<p>
					This study used the SOlar and LongWave Environmental Irradiance Geometry (SOLWEIG) model to model and map the spatio-temporal distribution of MRT. The SOLWEIG model has been developed over decades and validated worldwide. In the model, the 3D urban models were used to represent the obstructions of solar radiation in the urban space. In order to generate the urban 3D models, this project first created the normalized digital surface model (nDSM) based on the LiDAR cloud points. The building height model and tree canopy height model were then created by overlaying the most recent land cover map.
				</p>

				<p>
					Since the computational complexity is a major obstacle for urban microclimate modeling at large scales, this project developed GPU (Graphic Processing Units) parallel computing approach to calculate urban morphological parameters and estimate the MRT. The GPU-parallel computing algorithm has been reported to achieve a speed up as high as 400,000 times for urban geometrical parameter estimation than the regular method based on the PI’s previous work (Li and Wang, 2021). The highly efficient algorithms were then used to generate the outdoor heat exposure maps in Philadelphia at high spatial resolution at hour level in the summertime of Philadelphia.
				</p>

				<div className='description-container'>
					<img className="method-diagram" src={require('../../assets/solweig.png')} alt="solweig" />
				</div>
			</div>
		</section>
	)
};
