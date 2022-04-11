import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetail() {
  const [item, setItem] = useState([]);
  const {id} = useParams()
  
  useEffect(() => {
    fetch(`/items/${id}`)
        .then(r => r.json())
        .then(item =>setItem(item));
      }, [id])

  if (!item) return <h2>Loading...</h2> 

  console.log(item)
  
return (
    <div>
        <h4>{item.brand}</h4>
        <h5>{item.title}</h5>
        <img src={item.image} alt={item.title} height="300px" className="card-image" />
        <span>{item.rating}</span>  
        <p><span className="bold">From ${item.price1}-{item.price2}</span></p>
        <h4>Description: </h4>
        <p>{item.description}</p>
    </div>
  )
}

export default ItemDetail