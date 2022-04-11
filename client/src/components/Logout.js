import React from 'react';
import Login from './Login'
// import Button from './Button'

function Logout({customer, setCustomer}) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE" 
    }).then((res) => {
      if (res.ok) {
        setCustomer(null)
      }});
    }

    if (!customer) return <Login onLogin={setCustomer} />;

  return (
    <button onClick={handleLogout}>Logout</button>
  )
}

export default Logout