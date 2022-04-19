import React from 'react';
import { Link } from "react-router-dom";

function ItemCard({item, onAdd}) {
  const { id, brand, title, image, price1, price2, rating} = item
  
  return (
    <div className="card">
      <Link to={`/item/${id}`} style={{color:"black"}}>
        <h3>{brand}</h3>
        <h4>{title}</h4>
      </Link>
        <img src={image} alt={title} className="card-image" />
        <p><span className="bold">From ${price1}-{price2}</span></p>
        <span>⭐({rating})</span>
      <Link exact to="/order">
        <button onClick={()=>onAdd(item)}>Add To Cart</button>
      </Link>
    </div> 
  )
}

export default ItemCard
 
    
  
    

       