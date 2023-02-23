import React from 'react';
import Logo from '../images/SI-01 Logo_BW.png';

function Footer(props) {
	return (
		<footer className='footer'>
			<img className='footer-logo' src={Logo} alt='sassoinc-logo' />
			<p className='license'>Lic. 911044</p>
		</footer>
	);
}

export default Footer;
