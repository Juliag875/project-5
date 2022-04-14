import React, {useState, useEffect}  from 'react';
// import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
// import Button from "./Button";

function Navbar() {
  const [currentCustomer, setCurrentCustomer] = useState(null)
  
  useEffect(() => {
    fetch("/me")
    .then(res => {
      if (res.ok) {
        res.json().then((customer) => setCurrentCustomer(customer))
      }});
  },[]);

  // if (!currentCustomer) return <Login setCurrentCustomer={setCurrentCustomer} />;

  function handleLogin(currentCustomer) {
    setCurrentCustomer(currentCustomer);
  }

  function handleLogout() {
    setCurrentCustomer(null);
  }

  return (
    <div className="main-nav-container">
      <NavLink className="nav-li" exact to="/">uCare</NavLink>
      <NavLink className="nav-li" exact to="/items">Collection</NavLink>
      <NavLink className="nav-li" exact to="/about">About</NavLink>
      <Link className="nav-li" currentCustomer={currentCustomer} onLogin={handleLogin} exact to="/login">Login</Link>
      <Link className="nav-li" onLogout={handleLogout} exact to="/logout">Logout</Link>
      <Link className="nav-li" onLogin={handleLogin} exact to="/signup">Signup</Link>

    </div>
  );
}

// const Nav = styled.nav`
//   display: flex;
//   gap: 4px;
//   position: absolute;
//   right: 8px;
// `;

// const Wrapper = styled.header`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 8px;
// `;

export default Navbar