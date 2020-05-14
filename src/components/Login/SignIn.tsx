import React from "react";
import "./Login.scss";
import { signInWithGoogle } from "../../firebase";
import { motion } from "framer-motion";

const SignIn = (
  <motion.div
    initial={{ scale: 0.7 }}
    animate={{ scale: 1.0, borderRadius: "10%" }}
    className="login"
  >
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={signInWithGoogle}
    >
      Sign in with Google
    </motion.button>
  </motion.div>
);

export default SignIn;
