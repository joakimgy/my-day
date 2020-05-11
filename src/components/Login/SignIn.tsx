import React from "react";
import "./Login.scss";
import { signInWithGoogle } from "../../firebase";

const SignIn = () => {
  return (
    <div className="login">
      <h1>Sign in</h1>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};
export default SignIn;
