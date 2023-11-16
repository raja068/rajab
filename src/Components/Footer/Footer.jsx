import React from "react";
import './Footer.css'
import footer_logo from '../Assets/logo orange.png'
import instagram_icon from '../Assets/facebook.png'
import twitter_icon from '../Assets/twitter.png'
import facebook_icon from '../Assets/Instagram_logo.webp'
const Footer=() =>{
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} className="logosize" alt="" />
                <p>Moto Bikes</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Product</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-social-container">
                    <img src = {instagram_icon} className="itemthree" alt="" />
                </div>
                <div className="footer-social-container">
                    <img src = {twitter_icon} className="itemthree" alt="" />
                </div>
                <div className="footer-social-container">
                    <img src = {facebook_icon} className="itemthree" alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2023 - All Right Reserved.</p>
            </div>

        </div>
    )
}

export default Footer