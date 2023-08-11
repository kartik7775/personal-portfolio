import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'
import {SiDribbble} from 'react-icons/si'
import {SiLeetcode} from 'react-icons/si'


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/kartik-nikam/" target="_blank" rel="noreferrer"><BsLinkedin/></a>

        <a href="https://github.com/kartik7775" target="_blank" rel="noreferrer"><FaGithub/></a>
        
        <a href="https://www.instagram.com/dev.kartikn/" target="_blank" rel="noreferrer"><BsInstagram/></a>

        <a href="https://twitter.com/dev_kartiknikam" target="_blank" rel="noreferrer"><FiTwitter/></a>

        <a href="https://dribbble.com/kartik7775" target="_blank" rel="noreferrer"><SiDribbble/></a>

        <a href="https://leetcode.com/kartik775/" target="_blank" rel="noreferrer"><SiLeetcode/></a>

    </div>
  )
}

export default HeaderSocials