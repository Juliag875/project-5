import React, {useState} from 'react';
import { useParams } from 'react-router-dom';

function ReviewForm({onAddReview}) {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    content: ""
  });

  const {id} = useParams
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newReview = {
      name: formData.name,
      title: formData.title,
      content : formData.content,
      item_id: 1,
      customer_id: 1
    }
  
    fetch('/reviews',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview)
   })
    .then(res=>res.json())
    .then(data => onAddReview(data))
      setFormData({ name: "", title: "", content: ""})
  }

  return (
    <div className="form-container">
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        value={formData.name}
        placeholder="Name..."
        className="input-text"
      /><br></br>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        value={formData.title}
        placeholder="Title..."
        className="input-text"
      />  
      <br></br>
      <textarea
        type="text"
        name="content"
        onChange={handleChange}
        value={formData.content}
        placeholder="Your comment..."
        className="input-text"
      />
      <br></br>
      <button type="submit">Submit</button>
    </form>
  </div>
  )
}

export default ReviewForm