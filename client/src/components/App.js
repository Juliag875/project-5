import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import NavbarTop from './NavbarTop';
import Navbar from './Navbar';
import Login from './Login';
import ItemContainer from './ItemContainer';
import ItemDetail from './ItemDetail';
import '../App.css';

function App() {
  // let { slug } = useParams();
  const [customer, setCustomer] = useState(null)
   
  // Auto-login
  useEffect(() => {
    fetch("/me").then((res)=>{
      if (res.ok) {
        res.json().then((customer) => setCustomer(customer))
      }});
  },[]);

  if(!customer) return <Login onLogin={setCustomer} />

  return (
    <div className="App">
      <NavbarTop />
      <Navbar customer={customer} setCustomer={setCustomer}/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      {/* <Route exact path="/items">
        <Cart />
      </Route> */}
        <Route exact path="/items">
          <ItemContainer />
        </Route>
        <Route exact path="/items/:id">
          <ItemDetail />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
