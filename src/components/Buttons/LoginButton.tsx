import React from "react";
import { motion } from "framer-motion";

type LoginButtonProps = {
  onClick?: () => void;
};

function LoginButton({ onClick }: LoginButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
    >
      Sign in with Google
    </motion.button>
  );
}

export default LoginButton;
