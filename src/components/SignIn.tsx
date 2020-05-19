import React, { CSSProperties } from "react";
import { signInWithGoogle } from "../firebase";
import { motion } from "framer-motion";
import LoginButton from "./Buttons/LoginButton";

const container: CSSProperties = {
  background: "#ffffff",
  margin: "100px auto 100px",
  padding: "3rem 6rem",
  boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)",
};

const SignIn = (
  <motion.div
    initial={{ scale: 0.7 }}
    animate={{ scale: 1.0, borderRadius: "10%" }}
    style={container}
  >
    <LoginButton onClick={signInWithGoogle} />
  </motion.div>
);

export default SignIn;
