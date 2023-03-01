import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Pic1 from '../../images/bathrooms/home-design-1.jpeg';
import Pic2 from '../../images/bathrooms/home-design-2.jpeg';
import Pic3 from '../../images/bathrooms/home-design-3.jpeg';

function Bathrooms(props) {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<div className='bathrooms gallery'>
			<style>
				{'.nav-bathrooms { font-weight: bold; }'}
				{'.nav-projects { font-weight: bold; }'}
			</style>
			<img data-aos='fade-up' src={Pic1} alt='bathroom-pic' />
			<img data-aos='fade-up' src={Pic2} alt='bathroom-pic' />
			<img data-aos='fade-up' src={Pic3} alt='bathroom-pic' />
		</div>
	);
}

export default Bathrooms;
