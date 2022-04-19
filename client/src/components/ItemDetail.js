import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import Popup from 'reactjs-popup';
import ReviewForm from './ReviewForm';
import ReviewCard from './ReviewCard';

function ItemDetail({orders, setOrders, addToCart}) {
  const [item, setItem] = useState([]);
  const [reviews, setReviews] = useState([]);
  // const [orders, setOrders] = useState([]);
  const [showDescription, setShowDescription] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [num, setNum] = useState(20);
  // const [isPending, setIsPending] = useState(false);
  const {id} = useParams();

  useEffect(() => {
    fetch(`/items/${id}`)
        .then(r => r.json())
        .then(item =>setItem(item))
      }, [id])

  useEffect(() => {
    fetch('/reviews')
        .then((r) => r.json())
        .then(reviews => setReviews(reviews));
  }, []);

  // useEffect(() => {
  //   fetch("/orders")
  //     .then((r) => r.json())
  //     .then(order=>setOrders(order));
  // }, []);

  // function addToCart(newItem) {
  //   setOrders([...orders, newItem])
  // }

  function handleSubmit(e) {
    e.preventDefault();
    const myOrder = {
      item_id: item.id,
      customer_id: 63,
      purchased: true
    }
  
    fetch('/orders',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myOrder)
   })
    .then(res=>res.json())
    .then(data => addToCart(data));
  }


  //  Review CRUD functions
  function addReview(newReview){
    setReviews([...reviews, newReview])
  }

  function handleDeleteReview(deletedReviewId) {
    const deletedReview = reviews.filter(review => 
      review.id !== deletedReviewId)
      setReviews(deletedReview);
  }

  // Display Reviews
  function showReviewsButton () {
    setNum(Math.floor(Math.random() * reviews.length));
  }

  function showMoreReviews(){
    setNum(num => (num + 5) % reviews.length)
  }

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
    <div className="item-details row popup-content">
        <h3>{item.brand}</h3>
        <h4>{item.title}</h4>
        
        <div className="column left">
        <img 
          src={item.image} 
          alt={item.title} 
          height="350px" 
        /> 
        <p>⭐⭐⭐⭐⭐ ({item.rating}) </p>
          <br></br>  
       
        <p>{item.size1} - <strong>${item.price1}</strong></p>
        <button onClick={handleToggleDescription}> Description </button>
         <br></br>
          {
           !showDescription ? null : item.description
          }
          <br></br>
        <button onClick={handleSubmit}>Add to Cart</button>
        </div>

        <div className="right">
        <br></br>
        {/* <button onClick={handleToggleDescription}> Description </button> */}
        <br></br> 
        <div onClick={handleToggleReviews}>
        <button onClick={showReviewsButton}>Review</button><br></br> 
         {!showReviews ?  
         <>
           {reviews.slice(num, num + 3).map(review=>(
          <ReviewCard 
            key={review.id} 
            review={review} 
            onDeleteReview={handleDeleteReview}
            />))}
        </>
          :
          null}
      </div>
        <button onClick={showMoreReviews}><small>Show More Reviews</small></button>
        <br></br>
        <button onClick={handleToggleShowForm}>Add Review</button>
        {showForm ? 
         <ReviewForm onAddReview={addReview} 
          /> 
        : null} 
        </div>
      </div>
  )
}

export default ItemDetail
