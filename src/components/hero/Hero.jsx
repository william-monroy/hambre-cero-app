import React from 'react'
import { APP_NAME } from '../../js/constants'
import './Hero.css'

const Hero = () => {
    return (
        <div className="hero">
            <div className="back">
                <img src="assets/waves.png" alt="waves" className="waves" />
            </div>
            <div className="front">
                <h1>{APP_NAME}</h1>
                <img src="./assets/logo.png" alt="logo" srcset="" />
            </div>
        </div>
    )
}

export default Hero
