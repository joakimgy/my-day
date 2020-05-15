import React, { CSSProperties } from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { shuffle } from "lodash";

const spring = {
  type: "spring",
  damping: 2,
  stiffness: 50,
};

const ulStyle: CSSProperties = {
  display: "flex",
  width: "300px",
  flexWrap: "wrap",
};

const liStyle: CSSProperties = {
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
    <ul style={ulStyle}>
      {colors.map((background) => (
        <motion.li
          key={background}
          layoutTransition={spring}
          style={{ ...liStyle, background }}
        />
      ))}
    </ul>
  );
};

const initialColors = ["#6000FF", "#B000FF", "#0060FF", "#0000FF"];
