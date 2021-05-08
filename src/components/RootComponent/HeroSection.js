import React from 'react'
import Buttons from '../SubComponent/Buttons'

const HeroSection = () => {
    return (
        <div className="hero-section-container">
            <div className="text-container">
                <h1>A modern publishing platform</h1>   
                <p>Grow your audience and build your online brand.</p>
            </div>
            <Buttons classification="hero-section-buttons" buttonOne="Start For free" buttonTwo="Learn More"/>
        </div>
    )
}

export default HeroSection
