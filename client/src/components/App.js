import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import NavbarTop from './NavbarTop';
import Navbar from './Navbar';
import Login from './Login';
import Logout from './Logout';
import ItemContainer from './ItemContainer';
import ItemDetail from './ItemDetail';
import '../App.css';


function App() {
  // let { slug } = useParams();
  
  return (
    <div className="App">
      <NavbarTop />
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/items">
          <ItemContainer />
        </Route>
        <Route exact path="/items/:id">
          <ItemDetail />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/logout">
          <Logout />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
