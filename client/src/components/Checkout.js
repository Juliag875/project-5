import React, {useState} from 'react';
// import Popup from 'reactjs-popup';
import { Link } from "react-router-dom";

function Checkout() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    address: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div>
    <form className="checkout-container">
      <input
        type="text"
        name="name"
        onChange={handleChange}
        value={formData.name}
        placeholder="First name..."
        className="input-text-checkout"
      /><br></br>
      <input
        type="text"
        name="lastname"
        onChange={handleChange}
        value={formData.lastname}
        placeholder="Last name..."
        className="input-text-checkout"
      />  
      <br></br>
      <input
        type="text"
        name="email"
        onChange={handleChange}
        value={formData.email}
        placeholder="Email..."
        className="input-text-checkout"
      />  
      <input
        type="text"
        name="address"
        onChange={handleChange}
        value={formData.address}
        placeholder="Address..."
        className="input-text-checkout"
      />
      <br></br>
      <Link to="/logout">
        <button type="submit">Checkout</button>
      </Link>
    </form>
    <div className="return-policy"><h5>Return Policy</h5></div>
    <div>
      <p className="return-policy-text">
        We want you to love your purchase, but if you are not completely satisfied, we gladly accept most returns by mail and in stores within 90 days of purchase for free Conditions are noted below. Returned items must be in original, saleable condition with original tags. Shipping and delivery fees are non-refundable.
        Any new or gently used Cosmetic or Fragrance product purchased at uCare's that does not meet your needs will be accepted for return.
        Items purchased in a store must be returned to a store.
        Items purchased online can be returned by mail or to a store.</p>  
    </div>  
  </div>
  )
}

export default Checkout

