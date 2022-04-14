import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewForm from './ReviewForm';

function ItemDetail() {
  const [item, setItem] = useState([]);
  const [reviews, setReviews] = useState([])
  const [showDescription, setShowDescription] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [showForm, setShowForm] = useState(false)
  const {id} = useParams();
  
  useEffect(() => {
    fetch(`/items/${id}`)
        .then(r => r.json())
        .then(item =>setItem(item));
      }, [id])

  // if (!item) return <h2>Loading...</h2> 

  useEffect(() => {
    fetch(`/reviews/${id}`)
      .then((r) => r.json())
      .then(review=>setReviews(review));
  }, [id]);

  
  // const {name, title} = reviews
  
  function handleToggleDescription(){
    setShowDescription(showDescription=>!showDescription)
  }

  function handleToggleReviews(){
    setShowReviews(showReviews=>!showReviews)
  }

  function handleToggleShowForm(){
    setShowForm(showForm=>!showForm)
  }

  return (
    <div className="item-details">
        <h4>{item.brand}</h4>
        <h5>{item.title}</h5>
        <img 
          src={item.image} 
          alt={item.title} 
          height="300px" 
        /> 
        <br></br>
        <p><span className="bold">From ${item.price1}-{item.price2}</span></p>
        <br></br>
        <button onClick={handleToggleDescription}> Description </button>
        {/* {!showDescription ? 
          <small> show more</small>
          :
          <small> show less</small>} */}
        <br></br>
          {
          !showDescription ? null : item.description
          }
        <div>⭐⭐⭐⭐⭐
          <br></br>
          ({item.rating})
        </div>
        <br></br> 
        <div onClick={handleToggleReviews}>
        <button>Show Review</button><br></br> 
         {showReviews ? 
          <p>
            {reviews.name}<br></br> 
            {reviews.title}<br></br>
            {reviews.content}
          </p>
          :
          null
        }
        
      </div>
        <button >Add to Cart</button>
        <br></br>
        <button onClick={handleToggleShowForm} >Add Review</button>
        {showForm ? <ReviewForm /> : null}
        
    </div>
  )
}

export default ItemDetail