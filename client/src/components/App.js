import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import NavbarTop from './NavbarTop';
import Navbar from './Navbar';
import ItemContainer from "./ItemContainer";
import '../App.css';

function App() {
  return (
    <div className="App">
      <NavbarTop />

      <Navbar/>
      
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/items">
          <ItemContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
