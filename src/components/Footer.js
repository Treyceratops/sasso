import React from 'react';
import Logo from '../images/SI-01 Logo_BW.png';

function Footer(props) {
	return (
		<div className='footer'>
			<img className='footer-logo' src={Logo} alt='sassoinc-logo' />
			<p className='license'>Lic. 911044</p>
		</div>
	);
}

export default Footer;
