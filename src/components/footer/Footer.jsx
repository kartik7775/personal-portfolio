import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="/#" className='footer__logo'>Kartik Nikam</a>

      <ul className="permalinks">
        <li><a href="/#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/_kartix/" target='_blank' rel="noreferrer"><BsInstagram/></a>
        <a href="https://twitter.com/KartikNikam1" target='_blank' rel="noreferrer"><FiTwitter/></a>
        <a href="https://www.linkedin.com/in/kartik-nikam/" target='_blank' rel="noreferrer"><AiOutlineLinkedin/></a>
        <a href="https://github.com/kartik7775" target='_blank' rel="noreferrer"><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Kartik Nikam. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer