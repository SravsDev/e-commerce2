import React,{useContext} from 'react'
import {Shopcontext} from "../Content/Shopcontext"
import {useParams} from "react-router-dom";
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import Productdisplay from '../Components/Productdisplay/Productdisplay';
import Descriptionbox from '../Components/Descriptionbox/Descriptionbox';
import Relatedproduct from '../Components/Relaedproduct/Relatedproduct';


const Product = () => {
  const {all_products}=useContext(Shopcontext);
  const {ProductId}=useParams();
  const product=all_products.find((e)=>e.id===Number(ProductId));


  return (
    <div>
      <Breadcrum  product={product}/>
      <Productdisplay  product={product}/>
      <Descriptionbox />
      <Relatedproduct />

    </div>
  )
}

export default Product