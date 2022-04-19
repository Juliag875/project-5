import React from 'react';
// import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

function Navbar() {

  return (
    <div className="main-nav-container">
      <NavLink className="nav-li" exact to="/">uCare </NavLink>
      <NavLink className="nav-li" exact to="/items/spring">| Spring Sale |</NavLink>
      <Link className="nav-li fa fa-user-circle" exact to="/login"></Link>
      <NavLink className="nav-li fa fa-shopping-cart" exact to="/cart"></NavLink>
      {/* <Link className="nav-li" onLogout={handleLogout} exact to="/logout">Logout</Link> */}
      {/* <Link className="nav-li" onLogin={handleLogin} exact to="/signup">Signup</Link> */}
    </div>
  );
}

export default Navbar