import React from 'react'
import "./Footer.css"
import whatsapp from "../Assets/whatsapp.png"
import instagram from "../Assets/instagram.png"
import pinterest from "../Assets/pinterest.png"
import  logo from "../Assets/logo.png"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo" >
            <img  src={logo} alt="Loading"/>
            <p>SHOPPER</p>
       </div>
       <ul className="footer-links">
    <li>Company</li>
    <li>Products</li>
    <li>Offices</li>
    <li>About</li>
    <li>Contact</li>
 </ul>
 <div className="footer-social-icon">
    <div className="footer-icons-container">
       
        <img  src={whatsapp} alt="Loading"/>
        <img  src={instagram} alt="Loading"/>
        <img  src={pinterest} alt="Loading"/>

        


    </div>
    
</div>
    
    <div className="footer-copyright">
      <hr/>
      <p>Copyright 2024 All Rights Reserved @ Sravanthi  </p>

    </div>

 

    </div>
  )
}

export default Footer