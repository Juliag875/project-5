import React from 'react';
import { Link } from "react-router-dom";
// import Button from './Button'

function Logout({customer, onLogout}) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE" 
    }).then(() => onLogout());
  }
  // if (!customer) return <Login onLogin={setCustomer} />;

  return (
    <>
    <h2>
      <Link to="/">Continue Shopping</Link>
    </h2>
    {customer ? (
      <div>
        <p>Welcome, {customer.username}!</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    ) :(
      <Link to="/login">Click Here to Login</Link>
    )}
    </>
  );
}

export default Logout