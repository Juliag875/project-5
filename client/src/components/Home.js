import React from 'react';
import { Link } from "react-router-dom";
import Popup from 'reactjs-popup';

function Home() {
  return (   
      <div className="spring-sale">
        <Popup trigger={<button> Trigger</button>} position="right center">
          <div>Popup content here !!</div>
        </Popup>
        <Link to={"/items"} style={{textDecoration:"none"}}>
          <h1>Because you Care <br></br>Spring Sale</h1>
          <h2>-20%</h2>  
        </Link>  
    </div>
  )
}

export default Home