import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>The</h5>
        
        <h1 className='text-dark'>Front - end&nbsp;&nbsp;&nbsp;Developer</h1>
        
        <h5>name is</h5>
        
        <h2>Kartik&nbsp;&nbsp;&nbsp;Nikam</h2>

        <div className="line"></div>

        <CTA />
        
        <HeaderSocials />

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header