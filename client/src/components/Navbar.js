import React from 'react';
// import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

function Navbar({currentUser}) {

  return (
    <div className="main-nav-container">
      <NavLink className="nav-li" exact to="/"> uCare </NavLink>
      <NavLink className="nav-li spring" exact to="/items/spring">Spring Collection</NavLink>
      <NavLink className="nav-li spring" exact to="/items/new">Gift Sets</NavLink>
      <Link className="nav-li fa fa-user-circle" style={{float:"right"}} exact to="/login"></Link>
      <NavLink className="nav-li fa fa-shopping-cart" exact to="/cart"></NavLink>
      <span className="nav-li" style={{float:"right", fontSize:"12px"}}>{currentUser.username}</span>
      {/* <Link className="nav-li" onLogout={handleLogout} exact to="/logout">Logout</Link> */}
      {/* <Link className="nav-li" onLogin={handleLogin} exact to="/signup">Signup</Link> */}
    </div>
  );
}

export default Navbar