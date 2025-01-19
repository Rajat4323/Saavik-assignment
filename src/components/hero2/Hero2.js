import React from 'react'
import './Hero2.css'
import one from './Group 97.png'
import two from './Group 98.png'
import three from './Group 99.png'

const Hero2 = () => {
  return (
    <div className='hero2'>
      
<h1>Our Team Provides Valuable Services at Any Time in Any Situation</h1>

<div className='hero2-box'>

    <div className='box-item'>
<img src={one} alt=''/>
    <h2>Expert Guidance</h2>
    <p>Rely on seasoned professionals for tailored financial advice and strategic planning aligned with your unique goals</p>
<h4>Read More</h4>
    </div>

    <div className='box-item'>
<img src={two} alt=''/>
    <h2>Risked Management</h2>
    <p>We expertly handle and proactively mitigate financial risks, ensuring the safeguard of assets and overall stability</p>
<h4>Read More</h4>
    </div>

    <div className='box-item'>
<img src={three} alt=''/>
    <h2>Customize Solutions</h2>
    <p>Receive and Benefit from with financial solutions that tailored to your unique financial challenges and aspirations</p>
<h4>Read More</h4>
    </div>

</div>

    </div>
  )
}

export default Hero2
