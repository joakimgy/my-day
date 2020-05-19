import React, { CSSProperties } from "react";
import { motion } from "framer-motion";

function Sun() {
  const sun: CSSProperties = {
    position: "absolute",
    top: "15%",
    right: "10%",
  };

  const ring: CSSProperties = {
    width: "150px",
    height: "150px",
    margin: "-75px 0 0 -75px",
    position: "inherit",
  };

  const yellowRing: CSSProperties = {
    ...ring,
    background: "rgba(255, 185, 6, 0.5)",
  };

  const darkRing: CSSProperties = {
    ...ring,
    background: "rgba(255, 130, 5, 0.2)",
  };

  return (
    <>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 49, loop: Infinity, ease: "linear" }}
        style={sun}
      >
        <div style={yellowRing}></div>
        <div style={{ ...yellowRing, transform: "rotate(-60deg)" }} />
        <div style={{ ...yellowRing, transform: "rotate(60deg)" }} />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 56, loop: Infinity, ease: "linear" }}
        style={sun}
      >
        <div style={darkRing}></div>
        <div style={{ ...darkRing, transform: "rotate(-60deg)" }} />
        <div style={{ ...darkRing, transform: "rotate(60deg)" }} />
      </motion.div>
    </>
  );
}

export default Sun;
