import React,{useContext ,useState} from 'react'
import "./CSS/Shopcategory.css"
import { Shopcontext } from '../Content/Shopcontext'
// import dropdown from "../Components/Assets/dropdown.png"
import Items from '../Components/Items/Items'
import search from "../Components/Assets/search.png"


const Shopcategory = (props) => {
  const [searchitem , setSearchitem]=useState('');
  const [sortprice , setSortprice]=useState();
 
   const {all_products}=useContext(Shopcontext);
  //  const price=props.new_price;

  function handlechangefilter(e){
    setSortprice(e.target.value);

  }
  
   function handlesort(a,b){
    if(sortprice==="htol"){
      return b.new_price-a.new_price;
    }
    if(sortprice==="ltoh"){
      return a.new_price-b.new_price;
    }

   
   }

  return (
    <div className="shopcategory">
      <img  className="shopcategorybanner"src={props.banner}  alt="Loading" />
      <div  className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-search">
          <input  type="text"   placeholder="Search content" value={searchitem} onChange={(e)=>setSearchitem(e.target.value)} />
          <span><img src={search} alt="Loading" /></span>

        </div>
        <div >
          <select className="shopcategory-sort" onChange={handlechangefilter}>
            

            <option>Sort By</option>
            <option value="htol">High to low</option>
            <option value="ltoh">Low to high</option>
          </select>
          
          {/* <img  src={dropdown} alt="Loading"/> */}
        </div>
       
     </div>
     <div className="shopcategory-products">
      {
        all_products
        
        .filter(p=>p.name.toLowerCase().includes(searchitem.toLowerCase()))
        .sort(handlesort)
        .map((item,i)=>{
        if(props.category===item.category){
          return( <div className="shopcategory-card">
            <Items  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />

          </div>
          
          )
        }
        else{
          return null;

        }
        
      })
    }

     </div>
     <div className="shopcategory-loadmore">
      Explore More
     </div>
      

    </div>
  )
}

export default Shopcategory