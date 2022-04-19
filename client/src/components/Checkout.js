import React from 'react';
import Popup from 'reactjs-popup';

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
        <div className="header"> Continue Shopping </div>
        <div className="content">
          {' '}
          
        </div>
        <div className="actions">
          <Popup
            trigger={<button className="button"> Checkout </button>}
            position="top center"
            nested
          >
            <span>
              
            </span>
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