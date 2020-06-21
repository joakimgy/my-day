import React from "react";
import { motion } from "framer-motion";

type RingProps = {
  width: number;
  strokeWidth?: number;
  animate?: boolean;
};

function Ring({ width, strokeWidth = 3, animate }: RingProps) {
  const radius = width / 2 - strokeWidth * 2;
  const circumference = radius * 2 * Math.PI;

  const variants = {
    spinning: {
      strokeDashoffset: [circumference, 0],
      transition: { duration: 2, yoyo: Infinity },
    },
    still: {
      strokeDashoffset: [circumference, 0],
      transition: { duration: 2 },
    },
  };

  return (
    <motion.svg width={width} height={width}>
      <motion.circle
        r={`${radius}`}
        cx={`${width / 2}`}
        cy={`${width / 2}`}
        stroke="black"
        strokeWidth={strokeWidth}
        fill="transparent"
        strokeDasharray={`${circumference} ${circumference}`}
        variants={variants}
        animate={animate ? "spinning" : "still"}
      />
    </motion.svg>
  );
}

export default Ring;
