import React ,{useContext}from 'react'
import "./Productdisplay.css"
import staricon from "../Assets/staricon.png"
import stardullicon from "../Assets/stardullicon.png"
import { Shopcontext } from '../../Content/Shopcontext'

const Productdisplay = (props) => {
   
 
    const {product}=props;
    const {addtocart}=useContext(Shopcontext);

    


    
  return (
    <div className="productdisplay">
        <div className='productdisplay-left'>
         <div className="productdisplay-img-list">
           <img src={product.image} alt="Loading"/>
           <img src={product.image} alt="Loading"/>
           <img src={product.image} alt="Loading"/>
           <img src={product.image} alt="Loading"/>
         </div>
           <div className="productdisplay-img">
            <img className="productdisplay-main-img" src={product.image} alt="Loading"/>

           </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={staricon} alt="Loading"/>
                <img src={staricon} alt="Loading"/>
                <img src={staricon} alt="Loading"/>
                <img src={staricon} alt="Loading"/>
                <img src={stardullicon} alt="Loading"/>
                <p>(109)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                    {product.old_price}
                </div>
                <div className="productdisplay-right-new">
                {product.new_price}
                </div>

            </div>
            <div className="productdisplay-right-description">A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves,worn as an undershirt or outer garment
            </div>
            <div className="productdisplay-right-size">
              <div className="productdisplay-right-sizes">
                
                <div>S</div>
                
                
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
                



            </div>
        </div>
        <button onClick={()=>{addtocart(product.id)}}>ADD TO CART</button>
        <p className="productdisplay-right-category"><span>Category: </span>Women ,T-Shirt Crop Top</p>
        <p className="productdisplay-right-category"><span>Tags: </span>Modren ,Latest</p>


        </div>
       
    </div>
  )
}

export default Productdisplay