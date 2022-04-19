import React from 'react';
import Popup from 'reactjs-popup';
import { Link } from "react-router-dom";

export default () => (
  <Popup
    trigger={<button className="button"> Open Checkout Form </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <Link exact to="/logout">
          <button>Checkout</button>
        </Link>
        <br></br>
        <Link exact to="/logout">
          <button className="header"> Continue Shopping </button>
        </Link>
        <div className="content">
          {' '}
          
        </div>
        <div className="actions">
       
          <Popup
            trigger={<button className="button"> Checkout </button>}
            position="top center"
            nested
          > <Link exact to="/logout">
          </Link>
          </Popup>
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            close checkout form
          </button>
        </div>
      </div>
    )}
  </Popup>
);