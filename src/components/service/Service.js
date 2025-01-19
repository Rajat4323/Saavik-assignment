import React from 'react'
import './Service.css'
import line from './Line 10.png'
import service from './Group 95.png'
import finance from './dollar.png'
import invest from './invest.png'
import estate from './estate.png'
import welth from './wealth.png'

const Service = () => {
  return (
    <div className='service'>
      
      <div className='line'>
<div className='expertt-heading'>
OUR SERVICE
</div>
<img src={line} alt=''/>
</div>

<div className='services'>

<div className='expert-right'>
<img src={service} alt=''/>
</div>

<div className='expert-left'>

<h1>Our Services Can Help You Grow Your Investments and Wealth</h1>

<p>Embark on a Journey to Unlock a World of Financial Opportunities, Grow Your Investment with Our Comprehensive and Expert Services</p>

<div className='servicess'>
    <span> <img src={finance} alt=''/> Financial Planing</span>
    <span>  <img src={invest} alt=''/> Investment Advisory</span>
</div>
<div className='servicess'>
    <span> <img src={estate} alt=''/> Estate Planing</span>
    <span>  <img src={welth} alt=''/> Wealth Management</span>
</div>

<button className='explore'>Explore Service</button>

</div>




</div>

    </div>
  )
}

export default Service
