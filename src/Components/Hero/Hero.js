import React from 'react'
import handicon from "../Assets/handicon.png"
import lady from "../Assets/lady.jpeg"
import whitearrow from "../Assets/whitearrow.png"
import "./Hero.css"

const Hero = () => {
  return(
    <>
    <div className='herocontainer'>
        <div className='hero-left'>
        <h2>NEW ARRIVIALS ONLY</h2>
        <div className='hero-hand'>
        <p>new</p>
        <img  src={handicon} alt="Loading"/>
        </div>
        <p>collections</p>
        <p>for everyone</p>
        <div >
            <button className='hero-button' >Latest Colleection<img  src={whitearrow}  alt="Loading"/></button>
            

        </div>
       

    </div>
    <div className='hero-right'>
     <img  src={lady} alt="Loading"/>
    </div>
    </div>


    </>
  )
}

export default Hero