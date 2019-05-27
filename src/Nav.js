import React, { useState, useEffect } from 'react'
import '../src/Nav.css'
const logo =require('./images/UFC_logo.svg.png')
const url = 'https://www.ufc.com/athlete/khabib-nurmagomedov'

const Nav = () => {
    const [scrolled, setScroll] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    const handleScroll = (event) => {
        const scrollTop = window.pageYOffset
        if(scrollTop > 200 ){
            // setScroll(true)
            
        }
    }
    
    return(
    <div className={scrolled? 'NavDark' : 'Nav'}>
        <div className='left-links'>
            <ul>
                <li><a href={url}>OFFICIAL PAGE</a></li>
            </ul>
        </div>
        <img src={logo} alt='ufc logo' width='75' height='30' />
        <div className='right-links'>
            <ul>
                <li><a href='#stats'>STATS</a></li>
                <li><a href='#event'>EVENTS</a></li>
                <li><a href='#bio'>BIO</a></li>
            </ul>
        </div>
        <div id='menu'>
            <a href='#'>MENU</a>
        </div>
    </div>
)}

export default Nav