import React from 'react'
import "./Newsletter.css"

const Newsletter = () => {
  return (
    <div  className="newsletter">
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our site and stay updated</p>
        <div>
            <input type="email" placeholder="Enter your mail id" />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter