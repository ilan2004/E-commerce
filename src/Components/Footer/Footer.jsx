import React from 'react';
import './Footer.css';
import footer_logo from '../../Assets/Baggi_transparent.png';
import Instagram from '../../Assets/instagram_icon.png';
import pintrest from '../../Assets/pintester_icon.png';
import Whatsapp from '../../Assets/whatsapp_icon.png';



const Footer = () => {
    return (
      <div className='footer'>
          <div className='footer-logo'>
              <img className='socialss' src={footer_logo} alt="" />
              <p>BAGGi</p>
          </div>
          <ul className='footer-links'>
              <li>Company</li>
              <li>Products</li>
              <li>Offices</li>
              <li>About</li>
              <li>Contact</li>
          </ul>
          <div className='footer-social-icon'>
              <div className="footer-icons-container">
                
              </div>
              <div className="footer-icons-container">
                 
              </div>
              <div className="footer-icons-container">
                 
              </div>
          </div>
          <div className="footer-copyright">
              <hr/>
              <p>Copyright @ 2023 - All rights reserved</p>
          </div>
      </div>
    )
  }
  
  export default Footer;