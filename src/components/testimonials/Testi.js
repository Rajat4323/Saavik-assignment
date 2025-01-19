import React from 'react'
import './Testi.css'
import line from './Line 10.png'
import Review from './Review'
import pic1 from './profile1.png'
import pic2 from './profile2.png'
import pic3 from './profile3.png'

const Testi = () => {
  return (
    <div className='testi'>
      
<div className='testi-line'>
<div className='testi-heading'>
TESTIMONIALS
</div>
<img src={line} alt='' />
</div>

<div className='testi-head'>
What Our Customers Say
</div>

<div className='testi-para'>
Discover the Success Stories and Satisfaction of Clients Who Have Benefited from Our Expertise and Personalized Financial Guidance
</div>

<div className='reviews'>
    <Review  pic1={pic1} review='Financial expertise has made a significant impact on our nonprofit financial stability, allowing us to better serve our community' designation='Director' names='Grace Turner' />
    <Review  pic1={pic2} review='Financial planning and investment advice I received from this team completely transformed my future. I couldnt be happier with the results.' designation='Analyst' names='Linda Carter' />
    <Review  pic1={pic3} review='Estate planning is crucial, and they made the process seamless and stress-free. I can rest assured knowing familys future is secure' designation='Attorney' names='Ales Walker' />
</div>


    </div>
  )
}

export default Testi
