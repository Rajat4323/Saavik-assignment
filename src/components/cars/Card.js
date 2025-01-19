import React from 'react'
import './Card.css'
import img from './Images.png'
import line from './Line 10.png'

const Card = () => {
  return (
    <div className='card'>
      
<div className='card-left'>

<div className='start'>
<span>START NOW</span><img src={line} alt=''/>
</div>

<div className='card-heading'>
Get Start For Free No Credit Card Required 
</div>


<div className='hero-email'>
<input type='text' placeholder='Your email address'/>
<button className='navbtn'>Get Started</button>

</div>
<p>Want to contact our team and book a call? Try it now</p>

</div>

<div className='card-right'>
    <img src={img} alt=''/>
</div>

    </div>
  )
}

export default Card
