import React from 'react';
import 'animate.css';
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
				{'.projects-nav-bar { display: none; }'}
			</style>
			<div className='connect-pic-container animate__animated animate__fadeIn'>
				<img className='connect-pic' src={ConnectPic} alt='kitchen-pic' />
			</div>
			<div className='connect-divs'>
				<div>
					<a target='_blank' href='mailto:info@sassoinc.com'>
						<img className='connect-icons' src={EmailIcon} alt='email-icon' />
					</a>
					<br />
					<a
						className='link animate__animated animate__fadeIn'
						target='_blank'
						href='mailto:info@sassoinc.com'
						subject='HTML link'>
						info@sassoinc.com
					</a>
					<hr />
				</div>

				<div>
					<a target='_blank' href='tel:415-351-8171'>
						<img className='connect-icons' src={PhoneIcon} alt='phone-icon' />
					</a>
					<br />
					<a
						className='link animate__animated animate__fadeIn'
						target='_blank'
						href='tel:415-351-8171'>
						415-351-8171
					</a>
					<hr />
				</div>

				<div>
					<a
						target='_blank'
						href='https://www.instagram.com/sassoconstructioninc/'>
						<img className='connect-icons' src={InstaIcon} alt='insta-icon' />
					</a>
					<br />
					<a
						className='link animate__animated animate__fadeIn'
						target='_blank'
						href='https://www.instagram.com/sassoconstructioninc/'>
						@SASSOinc
					</a>
					<hr />
				</div>

				<div>
					<a
						target='_blank'
						href='https://www.google.com/maps/place/San+Francisco,+CA+94114/@37.7585676,-122.439346,15z/data=!4m5!3m4!1s0x808f7e05ae36d0fd:0x3bd07c36cd277bb7!8m2!3d37.7561438!4d-122.4325682'>
						<img
							className='connect-icons'
							src={LocationIcon}
							alt='location-icon'
						/>
					</a>
					<br />
					<a
						className='link animate__animated animate__fadeIn'
						target='_blank'
						href='https://www.google.com/maps/place/San+Francisco,+CA+94114/@37.7585676,-122.439346,15z/data=!4m5!3m4!1s0x808f7e05ae36d0fd:0x3bd07c36cd277bb7!8m2!3d37.7561438!4d-122.4325682'>
						San Francisco, CA 94114
					</a>
				</div>
			</div>
		</div>
	);
}

export default Connect;
