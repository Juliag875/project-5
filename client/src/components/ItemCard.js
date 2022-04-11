import React from 'react'

function ItemCard({item}) {
  const { brand, title, image, price1, price2, rating} = item

  return (
      <div className="card">
        <h2>{brand}</h2>
        <h4>{title}</h4>
        <img src={image} alt={title} className="card-image" />
        <span>{rating}</span>  
        <p><span className="bold">From ${price1}-{price2}</span></p>
      </div>
  
  )
}

export default ItemCard
 
/* {badgeText && <div className="card--badge">{badgeText}</div>} */
/* <img src="../images/star.png" className="card-star" /> */
/* <span className="gray">({props.item.reviewCount}) • </span>
<span className="gray">{props.item.location}</span> */
    
  
    

       