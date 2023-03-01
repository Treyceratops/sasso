import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Pic1 from '../../images/rhode-island/rhode-island-1.jpeg';
import Pic2 from '../../images/rhode-island/rhode-island-2.jpeg';
import Pic3 from '../../images/rhode-island/rhode-island-3.jpeg';

function RhodeIsland(props) {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<div className='rhode-island gallery'>
			<style>
				{'.nav-rhode-island { font-weight: bold; }'}
				{'.nav-projects { font-weight: bold; }'}
			</style>
			<img data-aos='fade-up' src={Pic1} alt='rhode-island-pic' />
			<img data-aos='fade-up' src={Pic2} alt='rhode-island-pic' />
			<img data-aos='fade-up' src={Pic3} alt='rhode-island-pic' />
		</div>
	);
}

export default RhodeIsland;
