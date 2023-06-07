import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Pic1 from '../../images/decks/home-design.jpeg';
import Pic2 from '../../images/decks/home-design-2.jpeg';
import Pic3 from '../../images/decks/home-design-3.jpeg';
import Pic4 from '../../images/decks/home-design-4.jpeg';

function Decks(props) {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<div className='decks gallery'>
			<style>
				{'.nav-decks { font-weight: bold; }'}
				{'.nav-projects { font-weight: bold; }'}
			</style>
			<img data-aos='fade-up' src={Pic1} alt='deck-pic' />
			<img data-aos='fade-up' src={Pic2} alt='deck-pic' />
			<img data-aos='fade-up' src={Pic3} alt='deck-pic' />
			<img data-aos='fade-up' src={Pic4} alt='deck-pic' />
		</div>
	);
}

export default Decks;
