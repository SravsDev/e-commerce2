import React  ,{createContext}  from "react";
import {useState} from "react";
import all_products from "../Components/Assets/All_products"

export const Shopcontext=createContext(null);
const getDefaultcart=()=>{
    let cart={};
    for(let i=0;i<all_products.length+1;i++){
        cart[i]=0;
    }
    return cart;
}

const Shopcontextprovider=(props)=>{
   

    const [cartitems,setCartitems]=useState(getDefaultcart());

    const addtocart=(itemsid)=>{
        setCartitems((prev)=>({...prev,[itemsid]:prev[itemsid]? prev[itemsid] : prev[itemsid]+1}))
    }
    
    
    

    const addcount=(itemsid)=>{
        setCartitems((prev)=>({...prev, [itemsid]:prev[itemsid]+1}))
       
    }



    const minuscount=(itemsid)=>{
            setCartitems((prev)=>({...prev, [itemsid]:prev[itemsid]>1 ? prev[itemsid]-1 : 1 } ))
           
         }



    // const minuscount=(itemsid)=>{
    //     setCartitems((prev)=>({...prev, [itemsid]:{ [itemsid]:prev[itemsid] > 0 ?prev[itemsid]-1 : 0} } ))
       
    // }
    
    
    // const minuscount=(itemsid)=>{
    //     const count=cartitems.map((item.index)=>{

    //         return [itemsid]===index?{...item, quantity:item.quantity>0?item.quantity-1:0} :item
    //     })
    //     setCartitems(count);

    // }



    const removefromcart=(itemsid)=>{
        
        setCartitems((prev)=>({...prev, [itemsid]:prev[itemsid]===""}));
    }


   

    

    

    const getTotalcartamount=()=>{
        let totalamount=0;
        for(const item in cartitems){
            if(cartitems[item]>0){
                let iteminfo=all_products.find((product)=>product.id===Number(item))
                totalamount+=iteminfo.new_price*cartitems[item];
            }
        }
            return totalamount;
       
        }
        const getTotalcartitems=()=>{
            let totalitem=0;
            for(const item in cartitems){
                if(cartitems[item]>0){
                    totalitem+=cartitems[item];
                }
            }
            return totalitem;
        }
 

    const contextvalue={all_products,cartitems,addtocart,removefromcart,getTotalcartamount, getTotalcartitems,addcount,minuscount};
    
    return(
        <Shopcontext.Provider  value={contextvalue}>
            {props.children}
        </Shopcontext.Provider>
    )

}
export default Shopcontextprovider;