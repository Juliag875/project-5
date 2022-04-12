import React, { useEffect, useState } from "react";
import ItemCard from './ItemCard';
import Search from './Search'

function ItemContainer() {
  const [items, setItems] = useState([])
  const [searchItem, setSearchItem] = useState("")
 
  useEffect(() => {
    fetch("/items")
      .then((r) => r.json())
      .then(items=>setItems(items));
  }, []);
  
  if (!items) return <h2>Loading...</h2>

  const searchItems = items.filter((item) => {
    return item.title.toLowerCase().includes(searchItem.toLowerCase())
    || item.brand.toLowerCase().includes(searchItem.toLowerCase());
  });

  return (
    <>
    <Search 
      searchItem={searchItem} 
      setSearchItem={setSearchItem}
    />
    <div className="cards">
    {searchItems.map((item) => (  
      <ItemCard 
        key={item.id}
        item={item}  
      />
    ))}
    </div>
  </>
  );
}

export default ItemContainer