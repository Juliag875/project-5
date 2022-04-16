import React, { useEffect, useState } from "react";
import Search from './Search';
import ItemCard from './ItemCard';
import Order from './Order';

function ItemContainer() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([]);
  const [searchItem, setSearchItem] = useState("")

  useEffect(() => {
    fetch("/items")
      .then((r) => r.json())
      .then(items=>setItems(items));
  }, []);

  // if (!items) return <h2>Loading...</h2>

  // Add item to cart
  function addToCart(product){
    const exist = cartItems.find(item => item.id === product.id);
    if (exist) {
      setCartItems(cartItems.map(item => 
        item.id ===product.id ? {...exist, quantity: exist.quantity + 1} : item
        ))
      } else {
        setCartItems([...cartItems, {...product, quantity: 1}]);
      }
  };

  const searchItems = items.filter((item) => {
    return item.title.toLowerCase().includes(searchItem.toLowerCase())
    || item.brand.toLowerCase().includes(searchItem.toLowerCase());
  });

  return (
    <>
    <Order onAddToCart={addToCart}/>
    <Search 
      searchItem={searchItem} 
      setSearchItem={setSearchItem}
    />
    <div className="cards">
    {searchItems.map((item) => (  
      <ItemCard 
        key={item.id}
        item={item}
        onAddToCart={addToCart}
      />
    ))}
    </div>
  </>
  );
}

export default ItemContainer