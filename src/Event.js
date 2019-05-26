import React from 'react'
import './Event.css'
const khabib = require('./images/KHABIB.png')
const conor = require('./images/CONOR.png')

const Event = () => (
    <div className='event'>
        <h1>LAST EVENT</h1>
        <div className='event-card'>
            <div className='event-img'>
                <img src={khabib} alt='khabib' />
                <img src={conor} alt='connor' />
                <div className='img-text'><p>WIN</p></div>
            </div>
            <div className='event-text'>
                <div className='main-text'>
                    <h2>NURMAGOMEDOV VS MCGREGOR</h2>
                    <p>Oct. 6, 2018</p>
                </div>
                <div className='sub-text'>
                    <div className='round'>
                        <p>ROUND</p>
                        <h3>4</h3>
                    </div>
                    <div className='time'>
                        <p>TIME</p>
                        <h3>03:03</h3>
                    </div>
                    <div className='method'>
                        <p>METHOD</p>
                        <h3>SUB</h3>
                    </div>
                </div>
            </div>
        </div> 

    </div>
)

export default Event