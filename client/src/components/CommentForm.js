import React, {useState} from 'react'

function CommentForm() {
  const [comments, setComments] = useState([])
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    comment: "",
  });

  function addComment(newComment){
    setComments([...comments, newComment])
  }

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newComment = {
      name: formData.name,
      title: formData.title,
      comment : formData.comment,
    };


    fetch("/comments",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment)
   })
    .then(r=>r.json())
    .then(data => addComment(data))
      setFormData({ name: "", title: "", comment: ""})
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
      />
      <input
        type="text"
        name="title"
        onChange={handleChange}
        value={formData.title}
        placeholder="Title..."
        className="input-text"
      />
    <input
        type="text"
        name="comment"
        onChange={handleChange}
        value={formData.comment}
        placeholder="Your comment..."
        className="input-text"
      />
      <input 
        style={{color:"blue"}}
        type="submit"
        name="submit"
        value="Add Comment"
        className="submit"
      />
    </form>
  </div>
  )
}

export default CommentForm