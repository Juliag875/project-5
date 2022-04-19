import React from 'react';
import { Link } from "react-router-dom";
import CartItemCard from './CartItemCard';

function Cart({orders, setOrders, onAdd, handleDeleteItemOrder}) {
  // const [orders, setOrders] = useState([]);
  console.log(orders)
  // useEffect(() => {
  //   fetch("/orders")
  //     .then((r) => r.json())
  //     .then(order=>setOrders(order));
  // }, []);

  // const itemsPrice = orders.reduce((a,order) => a + order.item.price1 * order.qty, 0);
  // const taxPrice = itemsPrice * 8.875;
  // const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  // const totalPrice = itemsPrice + taxPrice + shippingPrice;
  // console.log(itemsPrice)

  // function handleDeleteItemOrder(deletedItemOrderId) {
  //   const deletedItemOrder = orders.filter(order => 
  //     order.id !== deletedItemOrderId)
  //     setOrders(deletedItemOrder);
  // }

  return (
    <>
  <div>
    <Link exact to="/checkout">
       <button>Checkout</button>
    </Link>
    {orders.map(order => (
      <CartItemCard 
        key={order.id}
        brand={order.item.brand}
        order={order}
        handleDeleteItemOrder={handleDeleteItemOrder}
        // onAdd={onAdd}
      />
    ))}
    </div>
  {/* <div>
    {orders.length !== 0 && (
      <>
      <p>Items Price : {itemsPrice}</p>
      <p>Tax Price : ${taxPrice}</p>
      <p>Shipping Price :${shippingPrice}</p>
      <p><strong>Total Price</strong></p>
      <strong>${parseInt(totalPrice).toFixed(2)}</strong>
      </>
    )} 
    </div>  */}
    </>
  )
}

export default Cart
