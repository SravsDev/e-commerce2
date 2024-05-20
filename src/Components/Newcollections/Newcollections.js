import React from 'react'
import "./Newcollections.css"
import Newcollection from '../Assets/Newcollection'
import Items from "../Items/Items"

const Newcollections = () => {
  return (
    <div className="newcollections">
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className="collections">
            { Newcollection.map((item,i)=>{
                return <Items key={i}  id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })

            }

        </div>


    </div>
  )
}

export default Newcollections