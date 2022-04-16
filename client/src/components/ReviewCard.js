import React from 'react';
import styled from "styled-components";
// import { useParams } from 'react-router-dom';

function ReviewCard({review, onDeleteReview}) {

  const CardStyle = styled.div `
    border-radius: 4px;
    border: 1.5px solid #E6E6E6;
    padding: 18px;
    margin: 0px 0px 20px 0px;
    position: relative;
    margin-right: 12px;
    margin-top: 10px;
`
  const {id, name, title, content} = review
  
  function handleDelete() {
    fetch(`/reviews/${id}`, {
      method: "DELETE"
    })
    // .then((r) => r.json())
    .then(()=>onDeleteReview(id))
  }

//   function handleReviewChangeSubmit(e) {
//     e.preventDefault();
//     fetch (`reviews/${id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({review : updatedReview})
//   })
//       .then(r=>r.json())
//       .then(updatedReview => onUpdateReview(updatedReview))
//  }

  return (
    <>
    <CardStyle>
      <h5>Name: {name}</h5>
      <i>Title: {title}</i>
      <p>{content}</p>
      <button className="card-button fa fa-trash-o"
          style = {{fontSize:"15px", height:"20px", width:"20px"}} 
          onClick = {handleDelete}>
      </button>
    </CardStyle>
    </>
  )
}

export default ReviewCard