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

  function handleDeleteItemOrder(deletedItemOrderId) {
    const deletedItemOrder = orders.filter(order => 
      order.id !== deletedItemOrderId)
      setOrders(deletedItemOrder);
  }

  return (
    <>
    <Link exact to="/checkout">
       <button>Checkout</button>
    </Link>
    <div className="cards">
    {orders.map(order => (
      <OrderCard 
        key={order.id}
        order={order}
        handleDeleteItemOrder={handleDeleteItemOrder}
      />
    ))}
    
    {/* <div className="fa fa-shopping-cart" ariaHidden="true"></div> */}
    </div>
    </>
  )
}

export default Order