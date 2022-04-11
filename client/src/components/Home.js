import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (   
      <div className="spring-sale">
        <Link to={"/items"} style={{textDecoration:"none"}}>
          <h1>Spring Sale</h1>
          <h2>-20%</h2>  
        </Link>  
    </div>
  )
}

export default Home