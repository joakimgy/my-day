import React from "react";
import { motion } from "framer-motion";

type RingProps = {
  width: number;
  strokeWidth?: number;
};

function Ring({ width, strokeWidth = 3 }: RingProps) {
  const radius = width / 2 - strokeWidth * 2;
  const circumference = radius * 2 * Math.PI;
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
        animate={{
          strokeDashoffset: [circumference, 0],
        }}
      />
    </motion.svg>
  );
}

export default Ring;
