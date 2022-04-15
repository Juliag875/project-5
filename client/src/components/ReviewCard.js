import React from 'react'

function ReviewCard({review, onDeleteReview}) {
  // function handleShowMore(){
  //   setIndex(index => (index + 3) % review.length)
  // }

  function handleDelete(id) {
    fetch(`/reviews/${id}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(()=>onDeleteReview(id))
  }

  const {name, title, content} = review
  return (
    <div>
     <h5>Name: {name}</h5>
     <i>Title: {title}</i>
     <p>{content}</p>
     <button className="card-button" onClick={handleDelete}>Delete</button>
     {/* <button onClick={handleShowMore}></button> */}
    </div>
  )
}

export default ReviewCard