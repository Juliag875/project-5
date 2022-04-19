import React from 'react';
import { Link } from "react-router-dom";
// import Popup from 'reactjs-popup';

function Home() {
  return (  
    <div className="home">
      <div className="spring-sale">
        {/* <Popup trigger={<button> Trigger</button>} position="right center">
          <div>Popup content here !!</div>
        </Popup> */}
        <Link to={"/items/spring"} style={{textDecoration:"none"}}>
          <h1>Because you Care <br></br>Spring Sale</h1>
          <h2>-20%</h2>  
        </Link> 
      </div>
      <div className="set-sale">
        <Link to={"/items/new"} style={{textDecoration:"none"}}>
          <h1>Limited Edition Gift Set Sale</h1>
          <h2>-30%</h2>  
        </Link> 
        </div>
    </div> 
    
  )
}

export default Home