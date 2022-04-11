import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>   
      <div className="spring-sale">
        <h1>Spring Sale</h1>
        <h2>-20%</h2>
        <Link to={"/items"}> </Link>
      </div>
    </div>
  )
}

export default Home