import React, { useEffect, useState } from "react";
import ItemCard from './ItemCard';

function ItemContainer() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch("/items")
      .then((r) => r.json())
      .then(items=>setItems(items));
  }, []);
  if (!items) return <h2>Loading...</h2> 


  return (
      <div className="cards">
      {items.map((item) => (  
        <ItemCard 
          key={item.id}
          item={item}    
       />
      ))}
    </div>
  );
}

export default ItemContainer