import React from 'react';
import Bathroom from '../images/about-bathroom-pic.jpeg';
import Owners from '../images/about-owners-pic.jpeg';

function About(props) {
	return (
		<div className='about'>
			<style>
				{'.nav-about { font-weight: bold; }'}
				{'body { background: white; }'}
			</style>
			<div className='about-red-block'>
				<p>
					Sasso Construction is a gay-owned and -operated general and electrical
					contracting company specializing in exterior and exterior remodels in
					San Francisco and the Bay Area.
				</p>
				<div className='bathroom-renovation-pic-container'>
					<img
						className='bathroom-renovation-pic'
						src={Bathroom}
						alt='bathroom-renovation-pic'
					/>
				</div>
				<p>
					Whether it’s in a high rise, condo, or single-family home, we have 15
					years of experience in a variety of projects, including but not
					limited to:
				</p>
				<ul>
					<li>Kitchen Remodels</li>
					<li>Bath Remodels</li>
					<li>Full House Reconfigurations</li>
					<li>Hardwood Floors</li>
					<li>Decks</li>
					<li>Roofs</li>
					<li>Siding</li>
					<li>Stucco</li>
					<li>Electrical service upgrade</li>
					<li>EV Charging Stations</li>
					<li>Interior and Exterior Lighting</li>
				</ul>
				{/* <div className='bathroom-renovation-pic-container'>
					<img
						className='bathroom-renovation-pic'
						src={Bathroom}
						alt='bathroom-renovation-pic'
					/>
				</div> */}
				<p>
					Every project has its own particular needs and challenges. Sasso
					Construction, Inc. has the experience and know-how to turn your vision
					into a reality. Let’s build something together!
				</p>
			</div>
			<div className='about-white-block'>
				<div className='owners-pic-container'>
					<img className='owners-pic' src={Owners} alt='owners-pic' />
				</div>
				<h3>Paul Sasso (Principal)</h3>
				<p>
					Paul continues a family tradition of building. He combines real-life
					experience in multiple trades with over two decades of experience
					heading residential construction companies. Paul brings quality
					control, problem solving, and an almost instinctive eye for space
					planning and structural requirements to every project. His ability to
					connect and coordinate with the client, design professionals, the
					Sasso team, material vendors, our trade partners, and the SF building
					department are critically important to project success and client
					satisfaction.
				</p>
				<h3>Brian Stamper (Principal)</h3>
				<p>
					Brian began his 25 years of experience in commercial construction
					where he learned almost every aspect of the business, along with the
					best practices necessary for project success. He combines estimating,
					scheduling, project management, and project accounting skills with a
					high level ability to inform, interface, and communicate. The result
					is a successful construction experience that centers around and
					responds to the client's vision and expectations.
				</p>
			</div>
		</div>
	);
}

export default About;
