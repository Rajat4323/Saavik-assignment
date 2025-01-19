import React from 'react'
import './Footer.css'
import social from './social.png'

const Footer = () => {
  return (
    <div className='foot'>
      
<footer>

<ul>
    <li className='active-links'>Prosperix</li>
    <li>Our expert financial consultants provide solutions to help you achieve financial wealth. Trust us to guide you toward a brighter financial future.</li>
    <li><img src={social} alt=''/></li>
</ul>

    <ul>
        <li className='active-link'>Our Services</li>
        <li>Insurance Planing</li>
        <li>Estate Planing</li>
        <li>Tax Optimization</li>
        <li>Debt Managament</li>
    </ul>

    <ul>
        <li className='active-link'>Explore More</li>
        <li>About Us</li>
        <li>Blog</li>
        <li>Site map</li>
        <li>privacy</li>
    </ul>

    <ul>
        <li className='active-link'>Contact Details</li>
        <li>contact@bring.com</li>
        <li>+1 51 788187</li>
    </ul>
</footer>

<hr/>

<div className='copyright'>
<span>DSCODE 2023 © All rights reserved</span>
<span>Terms & Conditions     Privacy policy</span>
</div>

    </div>
  )
}

export default Footer
