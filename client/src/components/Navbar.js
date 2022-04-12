import React, {useState, useEffect}  from 'react';
// import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
// import Button from "./Button";

function Navbar() {
  const [customer, setCustomer] = useState(null)
  
  useEffect(() => {
    fetch("/me").then((res)=> {
      if (res.ok) {
        res.json().then((customer) => setCustomer(customer))
      }});
  },[]);

  // if (!customer) return <Login onLogin={setCustomer} />;
  function handleLogin(customer) {
    setCustomer(customer);
  }

  function handleLogout() {
    setCustomer(null);
  }

  return (
    <div>
      <NavLink className="nav-li" exact to="/">uCare</NavLink>
      <NavLink className="nav-li" exact to="/items">Collection</NavLink>
      <NavLink className="nav-li" exact to="/about">About</NavLink>
      <Link onLogin={handleLogin} customer={customer} exact to="/login">Login</Link>
      <Link onLogout={handleLogout} exact to="/logout">Logout</Link>
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