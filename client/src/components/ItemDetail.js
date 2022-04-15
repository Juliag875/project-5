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
  const [index, setIndex] = useState(22);
  // const [isPending, setIsPending] = useState(false);
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
  }, []);
  // if (!item) return <h2>Loading...</h2> 

  // CRUD functions
  function addReview(newReview){
    setReviews([...reviews, newReview])
  }

  function handleDeleteReview(deletedReviewId) {
    const deletedReview = reviews.filter(review => 
      review.id !== deletedReviewId)
      setReviews(deletedReview);
  }

  // Display functions
  function showReviewsButton () {
    setIndex(Math.floor(Math.random() * reviews.length));
  }

  function showMoreReviews(){
    setIndex(index => (index + 5) % reviews.length)
  }

  // function handleUpdateReview(updatedReview){
  //   const updatedReviews = reviews.map(review => {
  //     if(review.id === updatedReview.id) return updatedReview;
  //     return review;
  //   })
  //   setReviews(updatedReviews);
  // }

  // Toggle Functions
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
        <button onClick={showReviewsButton}>Review</button><br></br> 
         {/* {showReviews ? 
          <> */}
          {/* .slice(index, index + 3) */}
          {reviews.map(review=>(
            <ReviewCard 
              key={review.id} 
              review={review} 
              onDeleteReview={handleDeleteReview}
              // onUpdateReview={handleUpdateReview}
              />))}
          {/* </>
          :
          null */}
        
      </div>
        <button onClick={showMoreReviews}><small>Show More Reviews</small></button>
        <br></br>
        <button >Add to Cart</button>
        <br></br>
        <button onClick={handleToggleShowForm}>Add Review</button>
        {showForm ? <ReviewForm onAddReview={addReview}/> : null}    
    </div>
  )
}

export default ItemDetail