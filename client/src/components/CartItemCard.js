import React from 'react';

function CartItemCard({order, handleDeleteItemOrder}) {
  const {id} = order

  function handleDelete() {
    fetch(`/orders/${id}`, {
      method: "DELETE"
    })
    .then(()=>handleDeleteItemOrder(id))
  }

  return (
    <div className="cards-order">
      <p>{order.item.brand}</p>
      <img src={order.item.image} alt={order.item.brand} className="order-image"/>
      <span>{order.item.price1}</span>
      <button className="card-button fa fa-trash-o"
        style = {{fontSize:"15px", height:"20px", width:"20px"}} 
        onClick = {handleDelete}>
      </button> 
    </div>
    
  )
}

export default CartItemCard;