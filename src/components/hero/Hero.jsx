import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <div className="hero">
            <div className="back">
                <img src="assets/waves.png" alt="waves" className="waves" />
            </div>
            <div className="front">
                <h1>QualiAPI</h1>
                <img src="assets/logo.png" alt="logo" srcset="" />
            </div>
        </div>
    )
}

export default Hero
