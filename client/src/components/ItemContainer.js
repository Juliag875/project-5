import React from "react";
import Search from './Search';
import ItemCard from './ItemCard';

function ItemContainer({items, searchItem, setSearchItem}) {
  const itemCards = items.map((item) => (  
    <ItemCard 
      key={item.id}
      item={item}
      // onAddToCart={addToCart}
    />
  ))

  return (
    <>
    <Search 
      searchItem={searchItem} 
      setSearchItem={setSearchItem}/>
    <div className="cards">  
      {itemCards}
    </div>
    </>
  );
}

export default ItemContainer