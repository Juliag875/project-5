import React from "react";
import Search from './Search';
import ItemCard from './ItemCard';
import {useParams} from 'react-router-dom';

function ItemContainer({items, searchItem, setSearchItem, onAdd, addToCart}) {

 const {category} = useParams()
// category = "spring"
// category =  "new"

 const filteredByCategory = items.filter(item => item.item_category === category)
 //filter items array by category save filtered array to variable
 // run the below .map on the filtered array variable


  const itemCards = filteredByCategory.map((item) => (  
    <ItemCard 
      key={item.id}
      item={item}
      addToCart={addToCart}
      onAdd={onAdd}
    />
  ))

  return (
    <div>
    <Search 
      searchItem={searchItem} 
      setSearchItem={setSearchItem}/>
    <div className="cards">  
      {itemCards}
    </div>
    </div>
  );
}

export default ItemContainer