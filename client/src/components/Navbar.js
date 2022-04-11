import React from 'react';
import { NavLink } from "react-router-dom";
import Login from '/Login'

function Navbar() {
  const [customer, setCustomer] = useState(null)
   
  // Auto-login
  useEffect(() => {
    fetch("/me").then((res)=>{
      if (res.ok) {
        res.json().then((customer) => setCustomer(customer))
      }});
  },[]);

  if(!customer) return <Login onLogin={setCustomer} />
  return (
    <div className="main-nav">
        <NavLink className="nav-li" exact to="/">
          uCare
        </NavLink>
        <NavLink className="nav-li" exact to="/items">
          Collection
        </NavLink>
        <NavLink className="nav-li" exact to="/items/:id">
          <Login />
        </NavLink>
        <NavLink className="nav-li" to="/about">About</NavLink>
    </div>
  )
}

export default Navbar