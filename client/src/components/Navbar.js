import React, {useState,useEffect}  from 'react';
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Login from './Login';
import Logout from "./Logout";
// import Button from "./Button";

function Navbar() {
  const [customer, setCustomer] = useState(null)
   
  // Auto-login
  useEffect(() => {
    fetch("/me").then((res)=>{
      if (res.ok) {
        res.json().then((customer) => setCustomer(customer))
      }});
  },[]);

  if (!customer) return <Login onLogin={setCustomer} />;

  return (
    <Wrapper>
      <NavLink className="nav-li" exact to="/">uCare</NavLink>
      <NavLink className="nav-li" exact to="/items">Collection</NavLink>
      <NavLink className="nav-li" to="/about">About</NavLink>
      <NavLink className="nav-li" exact to="/items/:id">
        <Login onLogin={setCustomer}/>
      </NavLink>
      <button>
        <Logout customer={customer} setCustomer={setCustomer}/>
      </button>
    </Wrapper>
  );
}

// const Nav = styled.nav`
//   display: flex;
//   gap: 4px;
//   position: absolute;
//   right: 8px;
// `;

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

export default Navbar