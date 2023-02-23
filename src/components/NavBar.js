import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/SI-01 Logo_RGB.png';

function NavBar(props) {
	return (
		<div className='nav'>
			<img className='nav-logo' src={Logo} alt='sassoinc-logo' />
			<div className='nav-bar'>
				<Link className='nav-home' to='/'>
					Home
				</Link>
				<Link className='nav-about' to='/about'>
					About
				</Link>
				<Link className='nav-projects' to='/projects'>
					Projects
				</Link>
				<Link className='nav-connect' to='/connect'>
					Connect
				</Link>
			</div>
		</div>
	);
}

export default NavBar;
