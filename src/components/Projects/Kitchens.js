import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Pic1 from '../../images/kitchens/home-design-5.jpeg';
import Pic2 from '../../images/kitchens/home-design-1.jpeg';
import Pic3 from '../../images/kitchens/home-design-2.jpeg';
import Pic4 from '../../images/kitchens/home-design-3.jpeg';
import Pic5 from '../../images/kitchens/home-design-4.jpeg';

function Kitchens(props) {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<div className='kitchens gallery'>
			<style>
				{'.nav-kitchens { font-weight: bold; }'}
				{'.nav-projects { font-weight: bold; }'}
			</style>
			<img data-aos='fade-up' src={Pic1} alt='kitchen-pic' />
			<img data-aos='fade-up' src={Pic2} alt='kitchen-pic' />
			<img data-aos='fade-up' src={Pic3} alt='kitchen-pic' />
			<img data-aos='fade-up' src={Pic4} alt='kitchen-pic' />
			<img data-aos='fade-up' src={Pic5} alt='kitchen-pic' />
		</div>
	);
}

export default Kitchens;
