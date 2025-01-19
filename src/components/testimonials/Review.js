import React from 'react'
import './Review.css'
import dot from './dot.png'

const Review = ({pic1,names,designation,review}) => {
  return (
    <div className='review'>
      
<div className='profile'>

<div className='profile-pic'>
<img src={pic1} alt=''/>
</div>

<div className='profile-info'>
    <h3>{names}</h3>
    <p>{designation}</p>
</div>

</div>

<p className='review-text'>
{review}
</p>

<div className='coma'>
    <img src={dot} alt=''/>
</div>

    </div>
  )
}

export default Review
