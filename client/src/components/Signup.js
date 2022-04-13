import React, {useState}  from 'react';
import { Error } from "../styles";

function SignUp({onLogin}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((res) => {
      setIsLoading(false);
      if (res.ok) {
        res.json().then((customer) => onLogin(customer));
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        autoComplete="off"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br></br>
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br></br>
      <label htmlFor="password_confirmation">Confirm Password:</label>
      <input
        type="password"
        id="password_confirmation"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
      />
      <button type="submit">Submit
        {isLoading ? "Loading..." : "Sign Up"}
      </button>
      {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
    </form>
  );
}

export default SignUp