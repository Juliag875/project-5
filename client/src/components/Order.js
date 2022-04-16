import React, { useEffect, useState } from 'react';
import OrderCard from './OrderCard';

function Order() {
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetch("/orders")
      .then((r) => r.json())
      .then(order=>setOrders(order));
  }, []);

  function addItem(newItem){
    setCartItems([...cartItems, newItem])
  }

  function handleSubmit(e) {
    e.preventDefault();
    const myOrder = {
      item_id: 1,
      customer_id: 1,
      purchased: true
    }
  
    fetch('/orders',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myOrder)
   })
    .then(res=>res.json())
    .then(data => console.log(data));
  }


  return (
    <div className="cards">
    {orders.map(order => (
      <OrderCard 
        key={order.id}
        order={order}/>
    ))}
    <button onClick={handleSubmit}>Checkout</button>
    <div className="fa fa-shopping-cart" ariaHidden="true"></div>
    </div>
  )
}

export default Order