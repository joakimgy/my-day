import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
import { signInWithGoogle } from "../../firebase";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const signInWithEmailAndPasswordHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    email: string,
    password: string
  ) => {
    event.preventDefault();
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    }
  };
  return (
    <div className="login">
      <h1>Sign In</h1>
      {error !== null && <div>{error}</div>}
      <form>
        <label htmlFor="userEmail">Email:</label>
        <input
          type="email"
          name="userEmail"
          value={email}
          placeholder="E.g: test@gmail.com"
          id="userEmail"
          onChange={(event) => onChangeHandler(event)}
        />
        <label htmlFor="userPassword">Password:</label>
        <input
          type="password"
          name="userPassword"
          value={password}
          placeholder="Your Password"
          id="userPassword"
          onChange={(event) => onChangeHandler(event)}
        />
        <button
          onClick={(event) => {
            signInWithEmailAndPasswordHandler(event, email, password);
          }}
        >
          Sign in
        </button>
      </form>
      <p>or</p>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      <p>
        Don't have an account? <Link to="signUp">Sign up here</Link> <br />{" "}
        <Link to="passwordReset">Forgot Password?</Link>
      </p>
    </div>
  );
};
export default SignIn;
