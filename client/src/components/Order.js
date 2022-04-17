import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import OrderCard from './OrderCard';

function Order() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetch("/orders")
      .then((r) => r.json())
      .then(order=>setOrders(order));
  }, []);

  // function addItem(newItem){
  //   setCartItems([...cartItems, newItem])
  // }

  function handleDeleteItemOrder(deletedItemOrderId) {
    const deletedItemOrder = orders.filter(order => 
      order.id !== deletedItemOrderId)
      setOrders(deletedItemOrder);
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const myOrder = {
  //     item_id: 1,
  //     customer_id: 1,
  //     purchased: true
  //   }
  
  //   fetch('/orders',{
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(myOrder)
  //  })
  //   .then(res=>res.json())
  //   .then(data => addItem(data));
  // }


  return (
    <div className="cards">
    {orders.map(order => (
      <OrderCard 
        key={order.id}
        order={order}
        handleDeleteItemOrder={handleDeleteItemOrder}
      />
    ))}
    <Link exact to="/checkout">
      <button>Checkout</button>
    </Link>
    {/* <div className="fa fa-shopping-cart" ariaHidden="true"></div> */}
    </div>
  )
}

export default Order