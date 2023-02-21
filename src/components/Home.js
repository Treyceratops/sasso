import React from 'react';
import Logo from '../images/SI-01 Logo_RGB.png';
import 'animate.css';

function Home(props) {
	return (
		<div className='home main'>
			<style>
				{'.nav-home { text-decoration: none; }'}
				{'body { background-color: RGB(0, 0, 0); }'}
				{'.nav-bar a { color: white; }'}
				{/* {'.nav-logo { visibility: hidden; }'} */}
			</style>
			<div className='remodel-in animate__animated animate__fadeIn'>
				<h2 className='remodel-out animate__animated animate__fadeOut'>
					Remodel
				</h2>
			</div>
			<div className='repair-in animate__animated animate__fadeIn'>
				<h2 className='repair-out animate__animated animate__fadeOut'>
					Repair
				</h2>
			</div>
			<div className='reimagine-in animate__animated animate__fadeIn'>
				<h2 className='reimagine-out animate__animated animate__fadeOut'>
					Reimagine
				</h2>
			</div>
			<img
				className='home-logo animate__animated animate__fadeIn'
				src={Logo}
				alt='sassoinc-logo'
			/>
		</div>
	);
}

export default Home;
