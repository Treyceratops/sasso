import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
	return (
		<div>
			<Link to='/'>Home</Link>
			<Link to='/about'>About</Link>
			<Link to='/projects'>Projects</Link>
			<Link to='/connect'>Connect</Link>
		</div>
	);
}

export default NavBar;
