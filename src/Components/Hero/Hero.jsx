import React from "react";
import './Hero.css' 
import arrow_icon from '../Assets/arrow.svg'
import hero_image from '../Assets/hero.svg'
const Hero=() =>{
    return(
        <div className="hero">
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY </h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>New</p>
                    </div>
                    <p>Motorcycles</p>
                    <p>In Spotlight</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="" />
            </div>

        </div>
    )
}

export default Hero