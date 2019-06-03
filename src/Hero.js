import React from 'react'
import '../src/Hero.css'


const Hero = () => (
    <div className='HeroGroup'>
        <div id='img-div' className='HeroContent'>
            <p>"THE EAGLE"</p>
            <h1 id='title'>KHABIB NURMAGOMEDOV</h1>
            <p>Lightweight Champion • 27-0-0 (W-L-D)</p>
            <a href='#gallery'><button>VIEW GALLERY</button></a>
            
            <div className='HeroFooter'>
            <div className='line' />
            <a href='https://twitter.com/TeamKhabib' rel='noopener noreferrer' target='_blank'>TWITTER</a>
            </div>
        </div>
        
    </div>
)

export default Hero