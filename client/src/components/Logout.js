import React from 'react';
import { Link } from "react-router-dom";
import {useHistory} from 'react-router-dom';

function Logout({customer, onLogout}) {
  const history = useHistory();
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE" 
    }).then(() => onLogout);
    window.alert("Thank You for Shopping with Us!")
    history.push(`/`)
  }

  return (
    <>
    <h2>
      <Link to="/">
        <button>Continue Shopping</button>
      </Link>
    </h2>
    <button onClick={handleLogout}>Logout</button>
    {/* {customer ? (
      <div>
        <p>Welcome, {customer.username}!</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    ) :(
      <button onClick={handleLogout}>Logout</button>
    )} */}
    </>
  );
}

export default Logout