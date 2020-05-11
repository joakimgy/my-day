import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);
  const createUserWithEmailAndPasswordHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    email: string,
    password: string
  ) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
    setDisplayName("");
  };
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };
  return (
    <div className="login">
      <h1>Sign Up</h1>
      {error !== null && <div>{error}</div>}
      <form>
        <label htmlFor="displayName">Display Name:</label>
        <input
          type="text"
          name="displayName"
          value={displayName}
          placeholder="E.g: Ronald"
          id="displayName"
          onChange={(event) => onChangeHandler(event)}
        />
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
            createUserWithEmailAndPasswordHandler(event, email, password);
          }}
        >
          Sign up
        </button>
      </form>
      <p>or</p>
      <button>Sign In with Google</button>
      <p>
        Already have an account? <Link to="/SignIn">Sign in here</Link>
      </p>
    </div>
  );
};
export default SignUp;
