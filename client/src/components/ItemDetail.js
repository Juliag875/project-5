import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import ReviewCard from './ReviewCard';

function ItemDetail() {
  const [item, setItem] = useState([]);
  const [reviews, setReviews] = useState([])
  const [showDescription, setShowDescription] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [index, setIndex] = useState(0);
  const [isPending, setIsPending] = useState(false);
  const {id} = useParams();

  useEffect(() => {
    fetch(`/items/${id}`)
        .then(r => r.json())
        .then(item =>setItem(item));
      }, [id])

  useEffect(() => {
    fetch('/reviews')
        .then((r) => r.json())
        .then(reviews => setReviews(reviews));
         setIsPending(false);
  }, []);
  // if (!item) return <h2>Loading...</h2> 
  function addReview(newReview){
    setReviews([...reviews, newReview])
  }

  function showReviewsButton () {
    setIndex(Math.floor(Math.random() * reviews.length));
  }

  function showMoreReviews(){
    setIndex(index => (index + 3) % reviews.length)
  }

  function handleDeleteReview(deletedReviewId) {
    const deletedReview = reviews.filter(review => 
      review.id !== deletedReviewId)
      setReviews(deletedReview)
  }

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
        <button onClick={showReviewsButton}>Show Review</button><br></br> 
         {showReviews ? 
          <>
          {reviews.slice(index, index + 3).map(review=>(
            <ReviewCard 
              key={review.id} 
              review={review} 
              onDeleteReview={handleDeleteReview}/>))}
          </>
          :
          null
        } 
      </div>
        {!isPending && <button onClick={showMoreReviews}><small>Show More Reviews</small></button>}
        <br></br>
        <button >Add to Cart</button>
        <br></br>
        <button onClick={handleToggleShowForm} >Add Review</button>
        {showForm ? <ReviewForm onAddReview={addReview}/> : null}    
    </div>
  )
}

export default ItemDetail