import React from 'react'
import './header.css'
import CTA from './CTA'
// import ME from '../../assets/ME.png'
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

        <div className="me">
          {/* <img src={ME} alt="me" rel="noreferrer"/> */}
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header