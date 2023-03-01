import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Pic0 from '../../images/states-street-kitchen/home-design-0.jpeg';
import Pic1 from '../../images/states-street-kitchen/home-design-1.jpeg';
import Pic2 from '../../images/states-street-kitchen/home-design-2.jpeg';
import Pic3 from '../../images/states-street-kitchen/home-design-3.jpeg';
import Pic4 from '../../images/states-street-kitchen/home-design-4.jpeg';
import Pic5 from '../../images/states-street-kitchen/home-design-5.jpeg';
import Pic6 from '../../images/states-street-kitchen/home-design-6.jpeg';
import Pic7 from '../../images/states-street-kitchen/home-design-7.jpeg';
import Pic8 from '../../images/states-street-kitchen/home-design-8.jpeg';
import Pic9 from '../../images/states-street-kitchen/home-design-9.jpeg';
import Pic10 from '../../images/states-street-kitchen/home-design-10.jpeg';
import Pic11 from '../../images/states-street-kitchen/home-design-11.jpeg';
import Pic12 from '../../images/states-street-kitchen/home-design-12.jpeg';
import Pic13 from '../../images/states-street-kitchen/home-design-13.jpeg';
import Pic14 from '../../images/states-street-kitchen/home-design-14.jpeg';
import Pic15 from '../../images/states-street-kitchen/home-design-15.jpeg';
import Pic16 from '../../images/states-street-kitchen/home-design-16.jpeg';

function StatesStreet(props) {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<div className='states-street'>
			<style>
				{'.nav-states-street { font-weight: bold; }'}
				{'.nav-projects { font-weight: bold; }'}
			</style>
			<h1 className='before-after'>Finished Project</h1>
			<div className='gallery'>
				<img data-aos='fade-up' src={Pic0} alt='states-street-pic' />
				<img data-aos='fade-up' src={Pic1} alt='states-street-pic' />
				<img data-aos='fade-up' src={Pic2} alt='states-street-pic' />
				<img data-aos='fade-up' src={Pic3} alt='states-street-pic' />
				<img data-aos='fade-up' src={Pic4} alt='states-street-pic' />
				<img data-aos='fade-up' src={Pic5} alt='states-street-pic' />
				<img data-aos='fade-up' src={Pic6} alt='states-street-pic' />
				<img data-aos='fade-up' src={Pic7} alt='states-street-pic' />
				<img data-aos='fade-up' src={Pic8} alt='states-street-pic' />
				<img data-aos='fade-up' src={Pic9} alt='states-street-pic' />
			</div>
			<h1 className='before-after'>Before</h1>
			<div className='gallery'>
				<img data-aos='fade-up' src={Pic10} alt='states-street-pic' />
				<img data-aos='fade-up' src={Pic11} alt='states-street-pic' />
				<img data-aos='fade-up' src={Pic12} alt='states-street-pic' />
				<img data-aos='fade-up' src={Pic13} alt='states-street-pic' />
				<img data-aos='fade-up' src={Pic14} alt='states-street-pic' />
				<img data-aos='fade-up' src={Pic15} alt='states-street-pic' />
				<img data-aos='fade-up' src={Pic16} alt='states-street-pic' />
			</div>
		</div>
	);
}

export default StatesStreet;
