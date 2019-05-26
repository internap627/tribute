import React from 'react'
import './Gallery.css'
const fan1 = require('./images/khabib-fan-1.jpg')
const fan2 = require('./images/khabib-fan-2.jpg')
const fan3 = require('./images/khabib-fan-3.jpg')
const fan4 = require('./images/khabib-fan-4.jpg')
const fan5 = require('./images/khabib-fan-5.jpg')
const fan6 = require('./images/khabib-fan-6.jpg')

const Gallery = () => (
    <div className='gallery'>
        <div className='left'>
            {/* <div className='line' /> */}
            <img src={fan1} alt='khabib anime' />
            <img src={fan2} alt='khabib anime' />
            <img src={fan3} alt='khabib anime' />

        </div>
        <div className='right'>
            <img src={fan4} alt='khabib anime' />
            <img src={fan5} alt='khabib anime' />
            <img src={fan6} alt='khabib anime' />
            {/* <div className='line' /> */}
        </div>
    </div>
)

export default Gallery