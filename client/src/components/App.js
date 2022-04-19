import React,  { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import NavbarTop from './NavbarTop';
import Navbar from './Navbar';
import Login from './Login';
import Logout from './Logout';
import Signup from './Signup';
import Cart from "./Cart";
import Checkout from "./Checkout";
import ItemContainer from './ItemContainer';
import ItemDetail from './ItemDetail';
import ReviewForm from "./ReviewForm";
import '../App.css';

function App() {
  const [items, setItems] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  // const [cartItems, setCartItems] = useState([]);
  
  // Stay LoggedIn
  useEffect(() => {
    fetch("/me")
      .then((res) => res.json())
      .then((currentUser) => setCurrentUser(currentUser))
  }, []) 


  // Fetch Customers
  useEffect(() => {
    fetch("/customers")
      .then((r) => r.json())
      .then(customers=>setCustomers(customers));
  }, []);
      
  // Fetch Items
  useEffect(() => {
    fetch("/items")
      .then((r) => r.json())
      .then(items=>setItems(items));
  }, []);

  const searchItems = items.filter((item) => {
    return item.title.toLowerCase().includes(searchItem.toLowerCase())
    || item.brand.toLowerCase().includes(searchItem.toLowerCase());
  });

  // Fetch Orders
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

  function addToCart(newItem) {
    setOrders([...orders, newItem])
  }


  // Add item to cart
  // const onAdd = (product) => {
  //   const exist = orders.find(item => item.id === product.id);
  //   if (exist) {
  //     setOrders(orders.map(item => 
  //       item.id === product.id ? {...exist, qty: exist.qty + 1} : item
  //       ));
  //     } else {
  //       setOrders([...orders, {...product, qty: 1}]);
  //     }
  // };

  return (
    <div className="App">
      <NavbarTop />
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/items/:category">
          <ItemContainer 
            items={searchItems}
            searchItem={searchItem} 
            setSearchItem={setSearchItem}
            addToCart={addToCart}
            // onAdd={onAdd}
          />
        </Route>
        <Route exact path="/item/:id">
          <ItemDetail 
            orders={orders} 
            setOrders={setOrders}
            addToCart={addToCart}
          />
        </Route>
        <Route exact path="/reviewform">
          <ReviewForm />
        </Route>
        <Route exact path="/login">
          <Login setCurrentUser={setCurrentUser} />
        </Route>
        <Route exact path="/logout">
          <Logout />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/cart">
          <Cart 
            orders={orders}
            setOrder={setOrders} 
            // onAdd={onAdd} 
            handleDeleteItemOrder={handleDeleteItemOrder}/>
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
