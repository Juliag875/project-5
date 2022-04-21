import React from 'react';
import { Link, useParams } from "react-router-dom";

function CartItemCard({order, handleDeleteItemOrder}) {
  const {id} = order;
  const {category} = useParams();
  console.log(category)

  function handleDelete() {
    fetch(`/orders/${id}`, {
      method: "DELETE"
    })
    .then(()=>handleDeleteItemOrder(id))
  }

  return (
    <div className="cards-order">
      <p><strong>{order.item.brand}</strong></p>
      <>
      <Link to={`/items/spring`}>
        <img src={order.item.image} alt={order.item.brand} className="order-image"/>
      </Link></>
      <span><i>{order.item.title}</i></span>
      <p><strong>${order.item.price1}</strong></p>
      <button className="card-button fa fa-trash-o"
        style = {{fontSize:"15px", height:"20px", width:"20px"}} 
        onClick = {handleDelete}>
      </button> 
    </div>
    
  )
}

export default CartItemCard;