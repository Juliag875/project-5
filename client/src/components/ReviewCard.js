import React from 'react';
// import { useParams } from 'react-router-dom';

function ReviewCard({review, onDeleteReview}) {
  
  // const {id} = useParams
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
     <button className="card-button fa fa-trash-o"
        style = {{fontSize:"15px", height:"20px", width:"20px"}} 
        onClick = {handleDelete}>
     </button>
    </div>
  )
}

export default ReviewCard