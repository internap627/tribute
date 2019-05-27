import React from 'react'
import './Bio.css'
const khabibL = require('./images/KHABIB-L.png')

const Bio = () => (
    <div className='bio'>
        <div className='bio-header'>
            <h1>BIOGRAPHY</h1>
        </div>

        <div className='bio-body'>
            <div className='bio-img' id='img-div'>
                <figure>
                    <img src={khabibL} alt='khabib pic' id='image' />
                    <figcaption id='image-caption'>LIGHTWEIGHT CHAMPION</figcaption>
                </figure>
            </div>
            <div className='bio-info' id="tribute-info">
                <div className='bio-block'>
                    <p>STATUS</p>
                    <h2>ACTIVE</h2>
                </div>
                <div className='bio-block'>
                    <p>HOMETOWN</p>
                    <h2>DAGESTAN</h2>
                </div>
                <div className='bio-block'>
                    <p>TRAINS AT</p>
                    <h2>AKA (AMERICAN KICKBOXING ACADEMY) SAN JOSE</h2>
                </div>
                <div className='bio-group'>
                    <div className='bio-block'>
                        <p>AGE</p>
                        <h2>30</h2>
                    </div>
                    <div className='bio-block'>
                        <p>HEIGHT</p>
                        <h2>70.00</h2>
                    </div>
                    <div className='bio-block'>
                        <p>WEIGHT</p>
                        <h2>155.00</h2>
                    </div>
                </div>
                <div className='bio-group'>
                    <div className='bio-block'>
                        <p>REACH</p>
                        <h2>70</h2>
                    </div>
                    <div className='bio-block'>
                        <p>LEG REACH</p>
                        <h2>40</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Bio