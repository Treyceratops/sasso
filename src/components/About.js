import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Footer from './Footer';
import Bathroom from '../images/about-bathroom-pic.jpeg';
import Owners from '../images/about-owners-pic.jpeg';

function About(props) {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<div className='about'>
			<style>
				{'.nav-about { font-weight: bold; }'}
				{'body { background: white; }'}
				{'.projects-nav-bar { display: none; }'}
			</style>
			<div className='about-red-block'>
				<p data-aos='fade-right'>
					Sasso Construction is a LGBTQ+ owned/operated general and electrical
					contracting company. We specialize in interior and exterior remodels
					in the San Francisco Bay Area.
				</p>
				<div className='bathroom-renovation-pic-container'>
					<img
						className='bathroom-renovation-pic'
						src={Bathroom}
						alt='bathroom-renovation-pic'
					/>
				</div>
				<p data-aos='fade-right'>
					Whether it’s in a high rise, a condo, or a single-family home, we have
					15 years of experience in a variety of projects, including but not
					limited to:
				</p>
				<ul data-aos='fade-right'>
					<li>Kitchen Remodels</li>
					<li>Bath Remodels</li>
					<li>Full House Reconfigurations</li>
					<li>Hardwood Floors</li>
					<li>Decks</li>
					<li>Roofs</li>
					<li>Siding</li>
					<li>Stucco</li>
					<li>Electrical Service Upgrades</li>
					<li>EV Charging Stations</li>
					<li>Interior and Exterior Lighting</li>
				</ul>
				<p data-aos='fade-right'>
					Every project has its own particular needs and challenges. Sasso
					Construction, Inc. has the experience and know-how to turn your vision
					into a reality. Let’s build something together!
				</p>
			</div>
			<div className='about-white-block'>
				<div className='owners-pic-container'>
					<img className='owners-pic' src={Owners} alt='owners-pic' />
				</div>
				<h3 data-aos='fade-left'>Paul Sasso (Principal)</h3>
				<p data-aos='fade-left'>
					Paul continues a family tradition of building. He combines real-life
					experience in multiple trades with over two decades of experience
					heading residential construction companies. Paul brings quality
					control, problem solving, and an almost instinctive eye for space
					planning and structural requirements to every project. His ability to
					connect and coordinate with the client, design professionals, material
					vendors, our trade partners, and the SF building department are
					critically important to project success and client satisfaction.
				</p>
				<br />
				<h3 data-aos='fade-left'>Brian Stamper (Principal)</h3>
				<p data-aos='fade-left'>
					Brian began his 25 years of experience in commercial construction
					where he learned almost every aspect of the business, along with the
					best practices necessary for project success. He combines estimating,
					scheduling, project management, and project accounting skills with a
					high level ability to inform, interface, and communicate. The result
					is a successful construction experience that centers around and
					responds to the client's vision and expectations.
				</p>
			</div>
			<Footer />
		</div>
	);
}

export default About;
