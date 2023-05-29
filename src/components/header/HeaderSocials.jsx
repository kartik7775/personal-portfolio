import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/kartik-nikam/" target="_blank" rel="noreferrer"><BsLinkedin/></a>

        <a href="https://github.com/kartik7775" target="_blank" rel="noreferrer"><FaGithub/></a>

        <a href="https://www.instagram.com/_kartix/" target="_blank" rel="noreferrer"><BsInstagram/></a>

    </div>
  )
}

export default HeaderSocials