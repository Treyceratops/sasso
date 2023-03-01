import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Pic1 from '../../images/green-street/green-street-1.jpeg';
import Pic2 from '../../images/green-street/green-street-2.jpeg';
import Pic3 from '../../images/green-street/green-street-3.jpeg';
import Pic4 from '../../images/green-street/green-street-4.jpeg';

function GreenStreet(props) {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<div className='green-street gallery'>
			<style>
				{'.nav-green-street { font-weight: bold; }'}
				{'.nav-projects { font-weight: bold; }'}
			</style>
			<img data-aos='fade-up' src={Pic1} alt='green-street-pic' />
			<img data-aos='fade-up' src={Pic2} alt='green-street-pic' />
			<img data-aos='fade-up' src={Pic3} alt='green-street-pic' />
			<img data-aos='fade-up' src={Pic4} alt='green-street-pic' />
		</div>
	);
}

export default GreenStreet;
