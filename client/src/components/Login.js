import React, {useState} from 'react';
import { Error } from "../styles";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
        res.json().then((customer) => onLogin(customer));
      } else {
        res.json().then(err => setErrors(err.errors));
      }
    });
  }
  return (
    <form onSubmit={handleSubmit}>
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
    <button type="submit">Login
      {isLoading ? "Loading..." : "Login"}
    </button>
    {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
  </form>
);
}

export default Login