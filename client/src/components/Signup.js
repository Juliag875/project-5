import React, {useState}  from 'react';
// import { Error } from "../styles";

function SignUp({onLogin}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  // const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    // setErrors([]);
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
      }});
    }

  //     } else {
  //       res.json().then((err) => setErrors(err.errors));
  //     }
  //   });
  // }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <br></br>
      <input
        // placeholder="username"
        type="text"
        id="username"
        autoComplete="off"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br></br>
      <label htmlFor="password">Password:</label>
      <br></br>
      <input
        // placeholder="password"
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br></br>
      <label htmlFor="password_confirmation">Confirm Password:</label>
      <br></br>
      <input
        // placeholder="password confirmation"
        type="password"
        id="password_confirmation"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
      />
      <br></br>
      <button type="submit">
        {isLoading ? "Sign Up" : "Loading..."}
      </button>
      {/* {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))} */}
    </form>
  );
}

export default SignUp