import React, {useState}  from 'react';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
// import { Error } from "../styles";

function SignUp({onLogin}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const[name, setName] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  // const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

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
        name,
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((res) => {
      setIsLoading(false);
      if (res.ok) {
        res.json().then((customer) => onLogin(customer));
      }});
      history.push(`/`)
    }

  //     } else {
  //       res.json().then((err) => setErrors(err.errors));
  //     }
  //   });
  // }

  return (
    <div className="signup-form" >
    <h1>Sign Up</h1>
      <br></br>
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Name:</label>
      <br></br>
      <input
        // placeholder="username"
        type="text"
        id="name"
        autoComplete="off"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br></br>
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
      <br></br>
      <br></br>
      <span className="member">Already a member?</span>
      <Link to={"/login"} className="login-span">
        <span className="login-span">  Log In</span>
      </Link>
      {/* {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))} */}
    </form>
   </div>
  );
}

export default SignUp