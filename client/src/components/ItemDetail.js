import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetail() {
  const [item, setItem] = useState([]);
  const [showDescription, setShowDescription] = useState(false);
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
    <div className="item-details">
        <h4>{item.brand}</h4>
        <h5>{item.title}</h5>
        <img 
          src={item.image} 
          alt={item.title} 
          height="300px" 
        /> 
        <br></br>
        <p><span className="bold">From ${item.price1}-{item.price2}</span></p>
        <br></br>
        <p onClick={handleToggle}> <i>Show Description</i>
        <br></br>
          {
          !showDescription ? null : item.description
          }
        </p>
        <div>⭐⭐⭐⭐⭐
          <br></br>
          ({item.rating})
        </div>
        <br></br> 
        <button >Add to Cart</button>
    </div>
  )
}

export default ItemDetail