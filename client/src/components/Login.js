import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

function Login({ setCurrentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => setCurrentUser(user));
      }});
      window.alert("You are Logged In - Enjoy Your Shoppping")
      history.push(`/`)
    }
      // } else {
      //   res.json().then(err => setErrors(err.errors));
      // }
    
  return (
    <form className="login" onSubmit={handleSubmit}>
    <h3>Login With Username</h3>
    <input
      placeholder="username"
      type="text"
      id="username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />
    <br></br>
      <input
        placeholder="password"
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br></br>
      <br></br>
    <button type="submit">
      {isLoading ? "Login" : "Loading..."}
    </button>
    {/* {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))} */}
  </form>
);
}

export default Login