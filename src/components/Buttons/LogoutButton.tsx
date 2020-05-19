import React, { CSSProperties } from "react";
import { motion } from "framer-motion";

type LogoutButtonProps = {
  onClick?: () => void;
};

function LogoutButton({ onClick }: LogoutButtonProps) {
  const logout: CSSProperties = {
    backgroundColor: "#ff3366",
    borderColor: "#ff3366",
  };

  /* .logout:hover,
      .logout:active,
      .logout:focus {
        background: #ff0342;
      } */

  return (
    <motion.button
      style={logout}
      onClick={onClick}
      whileHover={{ scale: 1.1, backgroundColor: "#ff0342" }}
      whileTap={{ scale: 0.9 }}
    >
      Sign out
    </motion.button>
  );
}

export default LogoutButton;
