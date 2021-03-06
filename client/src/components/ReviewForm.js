import React, {useState} from 'react';

function ReviewForm({onAddReview, onSetScore}) {
  const [toggle, setToggle] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    content: "", 
  });

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
      item_id: 2,
      customer_id: 2,
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
      setFormData({ name: "", title: "", content: ""});
  }

  function handleToggle(){
    setToggle(toggle=>!toggle)
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
        className="input-text-form"
      /><br></br>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        value={formData.title}
        placeholder="Title..."
        className="input-text-form"
      />  
      <br></br>
      <textarea
        type="text"
        name="content"
        onChange={handleChange}
        value={formData.content}
        placeholder="Your comment..."
        className="input-text-form"
      />
      
      <br></br>
      {!toggle ? <button onClick={handleToggle} type="submit">Submit</button>
       :
       <button>Review added</button>
    }
    </form>
  </div>
  )
}


export default ReviewForm