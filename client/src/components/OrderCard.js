import React from 'react'

function OrderCard({order, onDeleteItem}) {
  const {id} = order

  function handleDelete() {
    fetch(`/orders/${id}`, {
      method: "DELETE"
    })
    .then(() => onDeleteItem(id))
  }

  return (
    <div className="cards">
      <p>{order.item.brand}</p>
      <img src={order.item.image} alt={order.item.brand} className="card-image"/>
      <button className="card-button fa fa-trash-o"
        style = {{fontSize:"15px", height:"20px", width:"20px"}} 
        onClick = {handleDelete}>
      </button>
    </div>
    
  )
}

export default OrderCard