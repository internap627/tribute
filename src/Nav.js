import React from 'react'
import '../src/Nav.css'
const logo =require('./images/UFC_logo.svg.png')
const url = 'https://www.ufc.com/athlete/khabib-nurmagomedov'

const Nav = () => (
    <div className='Nav'>
        <div className='left-links'>
            <ul>
                <li><a href={url}>OFFICIAL PAGE</a></li>
            </ul>
        </div>
        <img src={logo} alt='ufc logo' width='75' height='30' />
        <div className='right-links'>
            <ul>
                <li><a href='#'>STATS</a></li>
                <li><a href='#'>EVENTS</a></li>
                <li><a href='#'>BIO</a></li>
            </ul>
        </div>
        <div id='menu'>
            <a href='#'>MENU</a>
        </div>
    </div>
)

export default Nav