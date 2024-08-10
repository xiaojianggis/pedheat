import React from 'react';
import { Link } from "react-router-dom";
// import { PROJECTS } from '../../Data/PROJECTS';
import './MyWork.css';

export const MyWork = () => {
	return (
		<section className="my-work-container" id='methodology'>
			<main className="project-list">
				<article className="project-card">
					<div className='card-container'>
						<div className="column-1">
							<div className="column-1-container">
								<h2 className="card-heading">{'project.title'}</h2>
								<p className="card-body">
									{/* {'project.description'} */}
								</p>
							</div>
						</div>
						
						<div className='column-2'>
							<img className="card-image" src={require('../../assets/Heatt730-crop.gif')} alt={'project.title'} />
						</div>
					</div>
				</article>

				{/* {PROJECTS.map(project => (<article className="project-card">
					<div className='card-container'>
						<div className="column-1">
							<div className="column-1-container">
								<h2 className="card-heading">{project.title}</h2>
								<p className="card-body">
									{project.description}
								</p>
								<div className="project-tools">
									{project.tools.map((tool, i) => (<span key={i + tool}>{(i ? ', ' : '') + '#' + tool}</span>))}
								</div>
								<div className="button-container">
									{Object.entries(project.links).map(([key, value], i) => (<a key={i + key} className="card-button" href={value} rel="noreferrer" target="_blank">{key}</a>))}
									{project.processId ? <Link className="card-button" to={`process/${project.processId}`}>Process</Link> : null}
								</div>
							</div>
						</div>
						<div className='column-2'>
							<img className="card-image" src={project.imgUrl} alt={project.title} />
						</div>
					</div>
				</article>))} */}

			</main>
		</section>
	)
};

