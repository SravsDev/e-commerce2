import React , {useState , useContext} from 'react'
import "./Navbar.css"
import logo from "../Assets/logo.png"
import cart from "../Assets/cart.png"
import {Link} from "react-router-dom";
import { Shopcontext } from '../../Content/Shopcontext';

const Navbar = () => {
  const [menu, setMenu]=useState("Shop");
  const {getTotalcartitems}=useContext(Shopcontext)
  return (
    <>
    <div className="navcontainer">
      <div className="nav-logo">
        <img  src={logo} alt="Loading"/>
        <span>SHOPPER</span>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("Shop")}}> <Link to="/" style={{textDecoration:"none"}}>Shop</Link> {menu==="Shop"?<hr />:<></>}</li>

        <li onClick={()=>{setMenu("Mens")}}> <Link to="/Mens" style={{textDecoration:"none"}}>Mens</Link> {menu==="Mens"?<hr />:<></>}</li>

        <li onClick={()=>{setMenu("Womens")}}> <Link to="/Womens" style={{textDecoration:"none"}}>Womens</Link> {menu==="Womens"?<hr />:<></>}</li>

        <li onClick={()=>{setMenu("Kids")}}> <Link  to="/Kids"  style={{textDecoration:"none"}}>Kids </Link>{menu==="Kids"?<hr />:<></>}</li>
      </ul>

      <div className="nav-cart">
       <Link to="/Signup"><button>Sign Up</button></Link> 
       <Link to="/Cart"><img  src={cart} alt="Loading"/></Link> 
       <div className="cart-count">{getTotalcartitems()}</div>

      </div>

        

    </div>
    </>
    
  )
}

export default Navbar