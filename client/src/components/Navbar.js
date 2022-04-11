import React from 'react';
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="main-nav">
        <NavLink className="nav-li" exact to="/">
          uCare
        </NavLink>
        <NavLink className="nav-li" exact to="/items">
          Collection
          </NavLink>
        <NavLink className="nav-li" to="/about">About</NavLink>
    </div>
  )
}

export default Navbar