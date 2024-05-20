import React from 'react'
import "./Offers.css"
import exclusive from "../Assets/exclusive.png"

const Offers = () => {
  return (
    <div className="offerscontainer">
        <div className="offers_left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>

        </div>
        <div className="offers_right">
            <img  src={exclusive} alt="Loading"/>

        </div>

    </div>
  )
}

export default Offers