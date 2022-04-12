import React, {useState} from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((customer) => onLogin(customer));
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
    <button type="submit">Login</button>
  </form>
);
}

export default Login