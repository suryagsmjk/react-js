import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
    <div className="footer-content">
        <div className="footer-content-left">
            <img className="" src={assets.logo} />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi ullam officia reprehenderit eligendi vero. Placeat architecto laudantium necessitatibus esse reiciendis perspiciatis quia, pariatur fugiat officia? Dolorem maiores esse cum doloribus.</p>
            <div className="footer-social-icon">
                <img src={assets.facebook_icon} />
                <img src={assets.twitter_icon} />
                <img src={assets.linkedin_icon} />
            </div>
        </div>
        <div className="footer-content-center">
         <h2> SURYA SS </h2>
         <ul>
            <li>Home</li>
            <li>About us</li>
            <li> Delivery</li>
            <li>Privacy policy</li>
         </ul>
        </div>
        <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>9751093954</li>
                    <li>suryass@gmail.com</li>
                </ul>
        </div>
    </div>
    <hr/>
    <p className='footer-copyright'>Copyright 2024 @ Tomato.com - All Right Reserver.</p>
    </div>
  )
}

export default Footer