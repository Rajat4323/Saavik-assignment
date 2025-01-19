import React from 'react'
import './Nav.css'
import { IoMdMenu } from "react-icons/io";

const Nav = () => {
  return (
    <div className='nav'>
      
      <div className='nav-logo'>
Prosperix
      </div>

      <div className='nav-list'>
<ul>
  <li>Home</li>
  <li>Service</li>
  <li>Contact</li>
  <li>Help</li>
</ul>
      </div>

      <div className='nav-btn'>

<span>Sign in</span>
<button className='navbtn'>Get Started</button>
      </div>
      <div className='nav-menu'>
<IoMdMenu size={30} color='#ce8600' />
      </div>
    </div>
  )
}

export default Nav
