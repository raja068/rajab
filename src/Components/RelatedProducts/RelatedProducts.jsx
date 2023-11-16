import React from "react";
import './RelatedProducts.css'
import new_collection from '../Assets/new_collection'
import Item from '../Item/Item'
const RelatedProducts=() =>{
    return(
        <div className="relatedproducts">
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproducts-items">
                {new_collection.map((item,i) =>{
                    return <Item Key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    )
}

export default RelatedProducts