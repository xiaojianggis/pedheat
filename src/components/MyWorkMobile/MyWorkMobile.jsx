import React from 'react';
import { Link } from "react-router-dom";
//DATA
// import { PROJECTS } from '../../Data/PROJECTS';
// STYLING
import './MyWorkMobile.css';

export const MyWorkMobile = () => {
	return (
		<section className="my-work-container" id='projects'>
			<main className="project-list">
				{/* {PROJECTS.map(project => (<article className="project-card-mobile">
					<div className='card-container-mobile'>

						<div className="card-heading-mobile">{project.title}</div>
						<img className="card-image-mobile" src={project.imgUrl} alt={project.title} />
						<p className="card-body-mobile">
							{project.description}
						</p>
						<div className="project-tools-mobile">
							{project.tools.map((tool, i) => (<span>{(i ? ', ' : '') + '#' + tool}</span>))}
						</div>

						<div className="button-container-mobile">
							{Object.entries(project.links).map(([key, value], i) => (<a key={i} className="card-button" href={value} rel="noreferrer" target="_blank">{key}</a>))}
							{project.processId ? <Link className="card-button" to={`process/${project.processId}`}>Process</Link> : null}
						</div>


					</div>
				</article>))} */}



			</main>
		</section>
	)
};

