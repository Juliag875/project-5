import React from 'react';

function CartItemCard({brand, order, handleDeleteItemOrder}) {
  const {id} = order

  function handleDelete() {
    fetch(`/orders/${id}`, {
      method: "DELETE"
    })
    .then(()=>handleDeleteItemOrder(id))
  }

  return (
    <div className="cards-order">
      <p>{brand}</p>
      <img src={order.item.image} alt={brand} className="order-image"/>
      <p>{order.item.price1}</p>
      <button className="card-button fa fa-trash-o"
        style = {{fontSize:"15px", height:"20px", width:"20px"}} 
        onClick = {handleDelete}>
      </button> 
      {/* {cartItems.map(item =>
      <div key={item.id}>
      <p>{item.qty} X ${item.price1}</p>
      <button onClick={() => onAdd(item)}>+</button>
      </div>
      )}   */}
    </div>
    
  )
}

export default CartItemCard;