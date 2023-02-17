import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
	return (
		<div>
			<Link to='/'>
				<button>Home</button>
			</Link>
			<Link to='/about'>
				<button>About</button>
			</Link>
			<Link to='/projects'>
				<button>Projects</button>
			</Link>
			<Link to='/connect'>
				<button>Connect</button>
			</Link>
		</div>
	);
}

export default NavBar;
