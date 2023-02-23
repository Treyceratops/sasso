import React from 'react';
import Footer from './Footer';
import EmailIcon from '../images/email-icon.png';
import PhoneIcon from '../images/phone-icon.png';
import InstaIcon from '../images/insta-icon.png';
import LocationIcon from '../images/location-icon.png';
import ConnectPic from '../images/connect-pic.jpeg';

function Connect(props) {
	return (
		<div className='connect'>
			<style>
				{'.nav-connect { font-weight: bold; }'}
				{'body { background: #8A898C; }'}
			</style>
			<div className='connect-pic-container'>
				<img className='connect-pic' src={ConnectPic} alt='kitchen-pic' />
			</div>
			<div>
				<img className='connect-icons' src={EmailIcon} alt='email-icon' />
				<br />
				<a
					className='link'
					target='_blank'
					href='mailto:info@sassoinc.com'
					subject='HTML link'>
					info@sassoinc.com
				</a>
				<hr />
			</div>
			<div className='connect-divs'>
				<div>
					<img className='connect-icons' src={PhoneIcon} alt='phone-icon' />
					<br />
					<a className='link' target='_blank' href='tel:415-351-8171'>
						415-351-8171
					</a>
					<hr />
				</div>

				<div>
					<img className='connect-icons' src={InstaIcon} alt='insta-icon' />
					<br />
					<a className='link' target='_blank' href='https://www.instagram.com/'>
						@SASSOinc
					</a>
					<hr />
				</div>

				<div>
					<img
						className='connect-icons'
						src={LocationIcon}
						alt='location-icon'
					/>
					<br />
					<a
						className='link'
						target='_blank'
						href='https://www.google.com/maps/place/San+Francisco,+CA+94114/@37.7585676,-122.439346,15z/data=!4m5!3m4!1s0x808f7e05ae36d0fd:0x3bd07c36cd277bb7!8m2!3d37.7561438!4d-122.4325682'>
						San Francisco CA 94114
					</a>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Connect;
