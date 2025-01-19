import React from 'react'
import './Hero.css'
import hero from './hero.png'

const Hero = () => {
  return (
    <div className='hero'>
      
<div className='hero-left'>

<h1>
Navigating the<span>Global </span>  financial landscape
</h1>

<p>
Empowering Your Journey to Global Financial Success Through Customized and Personalized Financial Consulting for Every Client
</p>

<div className='hero-email'>
<input type='text' placeholder='Your email address'/>
<button className='navbtn'>Get Started</button>

</div>

</div>

<div className='hero-right'>
<img src={hero} alt=''/>
</div>


    </div>
  )
}

export default Hero
