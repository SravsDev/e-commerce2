import React ,{useContext }from 'react'
import "./Cartitems.css"
import { Shopcontext } from '../../Content/Shopcontext'
import removeicon from "../Assets/removeicon.png"

const Cartitems = () => {
    
    const {all_products,cartitems, removefromcart,getTotalcartamount,addcount,minuscount  }=useContext(Shopcontext);
   

    
return (
    <div className="cartitems">
        <div className="cartitems-format-main">   
            <p>Products</p>
            <p>name</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        {
            all_products.map((e)=>{
                if(cartitems[e.id]>0){

                    return <div>
                         <div className="cartitems-format cartitems-format-main">
            <img className="carticon-producticon" src={e.image} alt="Loading" />
            <p>{e.name}</p>
            <p>{e.new_price}</p>
          
            <div className="cartitems-quantity">
                 <button onClick={()=>{minuscount(e.id)} } >-</button>

                <button>{cartitems[e.id]}</button>
                
                <button onClick={()=>{addcount(e.id)} } > + </button>
            </div>

            <p>{e.new_price*cartitems[e.id]}</p>
            <img className="cartitems-removeicon" src={removeicon} onClick={()=>{removefromcart(e.id)}} style={{width:"20px"}} alt="Loading" />

        </div>
        <hr/>

                    </div>
                }
                return null;
            })
        }
       <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>Cart Total</h1>
            <div>
                <div className="cartitems-total-items">
                    <p>Subtotal</p>
                    <p>{getTotalcartamount()}</p>

                </div>
                <hr/>
                <div className='cartitems-total-items'>
                    <p>Shipping Fee</p>
                    <p>Free</p>

                </div>
                <hr/>
                <div className='cartitems-total-items'>
                    <h3>Total</h3>
                    <h3>{getTotalcartamount()}</h3>

                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>

        </div>
        <div className="cartitems-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cartitems-promobox">
                <input type="text" placeholder="Enter promo code" />
                <button>Submit</button>
                 
            </div>

        </div>


       </div>
        


    </div>
  )
}

export default Cartitems