import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h3>The</h3>
        
        <h1 className='text-dark'>Front-end Web Developer</h1>
        <br />
        <h3>name is</h3>
        
        <h2>Kartik Nikam</h2>

        <div className="line"></div>

        <CTA />
        
        <HeaderSocials />

        <a href="#footer" className='scroll_down'>Scroll Down <MdOutlineKeyboardArrowDown className='arrow' /></a>
        
      </div>
    </header>
  )
}

export default Header