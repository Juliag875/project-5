import React from 'react'

function ReviewCard({review}) {
  const {name, title, content} = review
  return (
    <div>
     <h5>Name: {name}</h5>
     <i>Title: {title}</i>
     <p>{content}</p>
    </div>
  )
}

export default ReviewCard