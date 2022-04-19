import React,  { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import NavbarTop from './NavbarTop';
import Navbar from './Navbar';
import Login from './Login';
import Logout from './Logout';
import Signup from './Signup';
import Order from "./Order";
import Checkout from "./Checkout";
import ItemContainer from './ItemContainer';
import ItemDetail from './ItemDetail';
import ReviewForm from "./ReviewForm";
import '../App.css';

function App() {
  const [items, setItems] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  
  // Stay LoggedIn
  useEffect(() => {
    fetch("/me")
      .then((res) => res.json())
      .then((currentUser) => setCurrentUser(currentUser))
  }, []) 
      
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

  useEffect(() => {
    fetch("/customers")
      .then((r) => r.json())
      .then(customers=>setCustomers(customers));
  }, []);

  // const getItemId = items.map( i=> key={i.id} id={id})

  // Add item to cart
  // function addToCart(product){
  //   const exist = cartItems.find(item => item.id === product.id);
  //   if (exist) {
  //     setCartItems(cartItems.map(item => 
  //       item.id ===product.id ? {...exist, quantity: exist.quantity + 1} : item
  //       ))
  //     } else {
  //       setCartItems([...cartItems, {...product, quantity: 1}]);
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
          />
        </Route>
        <Route exact path="/item/:id">
          <ItemDetail
          //  itemId={items.map(i=>i.id)} 
          //  customerId={customers.id}
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
        <Route exact path="/order">
          <Order />
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
