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
				<Link className='hover'>
					<div class='dropdown'>
						<button class='dropbtn nav-projects'>Projects▼</button>
						<div class='dropdown-content'>
							<span className='projects-nav'>
								<Link className='nav-kitchens' to='/kitchens'>
									Kitchens
								</Link>
								<Link className='nav-bathrooms' to='/bathrooms'>
									Bathrooms
								</Link>
								<Link className='nav-decks' to='/decks'>
									Decks
								</Link>
							</span>
							<span className='projects-nav'>
								<Link className='nav-green-street' to='/green-street'>
									Green Street
								</Link>
								<Link className='nav-rhode-island' to='/rhode-island'>
									Rhode Island
								</Link>
								<Link className='nav-states-street' to='/states-street'>
									States Street
								</Link>
							</span>
						</div>
					</div>
				</Link>
				<Link className='nav-connect' to='/connect'>
					Connect
				</Link>
			</div>
			<hr className='projects-hr' />
			{/* <div className='projects-nav-bar-container'>
				<div className='projects-nav-bar'>
					<Link className='nav-kitchens' to='/kitchens'>
						Kitchens
					</Link>
					<Link className='nav-bathrooms' to='/bathrooms'>
						Bathrooms
					</Link>
					<Link className='nav-decks' to='/decks'>
						Decks
					</Link>
				</div>
				<div className='projects-nav-bar'>
					<Link className='nav-green-street' to='/green-street'>
						Green Street
					</Link>
					<Link className='nav-rhode-island' to='/rhode-island'>
						Rhode Island
					</Link>
					<Link className='nav-states-street' to='/states-street'>
						States Street
					</Link>
				</div>
			</div> */}
		</div>
	);
}

export default NavBar;
