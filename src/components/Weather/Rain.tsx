import React, { CSSProperties } from "react";
import { motion } from "framer-motion";
import { random } from "lodash";

function Rain() {
  return (
    <>
      {Array.from(Array(150)).map((_, index) => {
        const horizontalPosition = random(100);
        const verticalPosition = -(100 + random(50));
        const rain: CSSProperties = {
          background: "linear-gradient(to bottom, blue 0%, #ffffff 100%)",
          height: "100%",
          position: "absolute",
          width: "3px",
          zIndex: -1,
          left: `${horizontalPosition}%`,
        };

        return (
          <motion.div
            key={index}
            animate={{
              opacity: [(random(30) + 30) * 0.01, 0],
              top: [`${verticalPosition}%`, "0%"],
              animationDelay: `${random(20) - 1}s`,
            }}
            transition={{ duration: random(6) + 4, loop: Infinity }}
            style={rain}
          />
        );
      })}
    </>
  );
}

export default Rain;
