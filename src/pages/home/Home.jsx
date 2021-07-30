import React from 'react'
import Hero from '../../components/hero/Hero'
import AboutUs from '../../components/about_us/AboutUs'
import HowWorks from '../../components/how_works/HowWorks'
import GetStarted from '../../components/get_started/GetStarted'
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <div className="sections">
                <Hero />
                <hr></hr>
                <AboutUs />
                <hr></hr>
                <HowWorks />
                <hr></hr>
                <GetStarted />
            </div>
        </div>
    )
}

export default Home


