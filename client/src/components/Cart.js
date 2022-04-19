import React from 'react';
import { Link } from "react-router-dom";
import CartItemCard from './CartItemCard';

function Cart({orders, setOrders, onAdd, handleDeleteItemOrder}) {

// console.log(orders.map(order=>order.item.price1));
// console.log(orders)
let itemsPrice = orders
  .map(order=>parseInt(order.item.price1))
  .reduce((acc, order) => acc + order, 0);
let taxPrice = itemsPrice * 0.0875;
let shippingPrice = itemsPrice > 200 ? 0 : 20;
let totalPrice = itemsPrice + taxPrice + shippingPrice;
// console.log(totals)

return (
    <>
    <div>
      <Link exact to="/checkout">
         <button>Checkout</button>
      </Link>
      {orders.map(order => (
        <CartItemCard 
          key={order.id}
          order={order}
          handleDeleteItemOrder={handleDeleteItemOrder}
          // onAdd={onAdd}
        />
      ))}
      </div>
    <div>
        <p>Items Price : {totalPrice}</p>
      </div> 
      </>
    )
  }

export default Cart