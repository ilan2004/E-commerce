import React from 'react'
import './Newsletter.css';
const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive offers on your Email</h1>
        <p>Subscirbe to our newsletter to stay updated</p>
        <div className='enter'>
            <input type='email' placeholder='your email id'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}
export default Newsletter;
