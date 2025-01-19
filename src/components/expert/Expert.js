import React from 'react'
import './Expert.css'
import expert from './expert.png'
import line from './Line 10.png'

const Expert = () => {
  return (
    <div className='expert'>
      
<div className='line'>
<div className='expert-heading'>
OUR EXPERTISE 
</div>
<img src={line} alt=''/>
</div>

<div className='expertt'>

<div className='expert-left'>

<h1>Transforming Finances With Strategic Wealth Management</h1>

<p>Guiding You on Your Global Financial Success Journey Through Customized & Personalized Financial Consulting Services. Achieve Your Goals with Data-Driven Expertise and Secure Your Financial Future, Successfully Navigating the Ever-Changing Finance </p>

<p>We're Committed to Providing You with Expert Guidance, Proven Strategies & Personalized Approach to Ensure Financial Prosperity</p>

<button className='explore'>Explore Service</button>

</div>


<div className='expert-right'>
<img src={expert} alt=''/>
</div>

</div>


    </div>
  )
}

export default Expert
