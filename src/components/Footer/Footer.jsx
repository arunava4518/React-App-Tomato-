import React from 'react'
import './Footer.css'
import { assets } from './../../assets/assets';
 
const Footer = () => {
  return (
    <div className='footer'id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
             <img src={assets.logo} alt="" />
             <p>We are the best food center near you.feel free to contact us any time.we 
                are ready for any order</p>
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon}alt="" />
            <img src={assets.linkedin_icon} alt="" /> 
            </div>
            <div className='footer-content-center'>
             <h2>
                <ul>
                    <li>home</li>
                    <li>About us</li>
                    <li>DElivery</li>
                    <li>Privacy policy</li>
                </ul>
             </h2>
            </div>
          <div className='footer-content-right'>
             <h2>GET IN TOUCH</h2>
             <ul>
                <li>8250647937</li>
                <li>AkashIndia@gmail.com</li>
             </ul>
          </div>
        </div>
      <hr />
      <p className="footer-copyright">
      copyright 2025 @ Buten.com- All Right Reserved
      </p>
    </div>
  )
}

export default Footer
