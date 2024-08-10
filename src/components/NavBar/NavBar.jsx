import React from 'react';
import './NavBar.css';
import { Link } from 'react-scroll';

export const NavBar = () => {
	return (
		<nav className="nav-bar-container">
			<div className="nav-title-container">
				<img className="logo-image" src={require('../../assets/biometeors.png')} alt="Pedestrian Heat"></img>
				<div className='logo-title-text'>Urban Spatial Infomation Lab</div>
			</div>
			<div className='nav-link-container'>
                <Link className='nav-bar-link'  to="home" spy={true} smooth={true}>About</Link>
                
                <Link className='nav-bar-link'  to="home" spy={true} smooth={true}>Map</Link>
                <Link className='nav-bar-link'  to="projects" spy={true} smooth={true}>Publication</Link>

                <Link className='nav-bar-link' to="contact" spy={true} smooth={true}>Contact</Link>
                <a className='nav-bar-link' href="https://dougcampbell.blog/" rel="noreferrer" target="_blank">Blog</a>
			</div>
		</nav>
	)
}

