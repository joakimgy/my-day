import React from "react";
import "./Login.scss";
import { signInWithGoogle } from "../../firebase";

const SignIn = (
  <div className="login">
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  </div>
);

export default SignIn;
