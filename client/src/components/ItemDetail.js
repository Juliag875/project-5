import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetail() {
  const [item, setItem] = useState([]);
  const [showDescription, setShowDescription] = useState([]);
  const {id} = useParams()
  
  useEffect(() => {
    fetch(`/items/${id}`)
        .then(r => r.json())
        .then(item =>setItem(item));
      }, [id])
  if (!item) return <h2>Loading...</h2> 
  
  function handleToggle(){
    setShowDescription(showDescription=>!showDescription)
  }
  
 return (
    <div onClick={handleToggle}>
        <h4>{item.brand}</h4>
        <h5>{item.title}</h5>
        <img 
          src={item.image} 
          alt={item.title} 
          height="300px" 
          className="card-image" 
        />
        <span>{item.rating}</span>  
        <p><span className="bold">From ${item.price1}-{item.price2}</span></p>
        <p>
          {
          !showDescription ? "Description" : item.description
          }
        </p>
        <button >Add to Cart</button>
    </div>
  )
}

export default ItemDetail