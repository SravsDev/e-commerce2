import React from 'react'
import "./Breadcrum.css"
import rightarrow from "../Assets/rightarrow.png";

const Breadcrum = (props) => {
    const {product}=props;
  return (
    <div className="breadcrum">
        HOME<img src={rightarrow}  alt="Loading" /> SHOP <img src={rightarrow} alt="Loading" /> {product.category} <img src={rightarrow} alt="Loading" /> {product.name} <img src={rightarrow} alt="Loading"/>

    </div>
  )
}

export default Breadcrum;