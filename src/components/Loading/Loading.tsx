import React, { CSSProperties } from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { shuffle } from "lodash";

const square: CSSProperties = {
  listStyle: "none",
  borderRadius: "10px",
  marginBottom: "10px",
  marginRight: "10px",
  width: "140px",
  height: "140px",
};

export const Loading = () => {
  const [colors, setColors] = useState(initialColors);

  useEffect(() => {
    setTimeout(() => setColors(shuffle(colors)), 1000);
  }, [colors]);

  return (
    <ul
      style={{
        display: "flex",
        width: "300px",
        height: "300px",
        flexWrap: "wrap",
      }}
    >
      {colors.map((background) => (
        <motion.li
          key={background}
          layoutTransition={{
            type: "spring",
            damping: 50,
            stiffness: 100,
          }}
          style={{ ...square, background }}
        />
      ))}
    </ul>
  );
};

const initialColors = ["#6000FF", "#B000FF", "#0060FF", "#0000FF"];
