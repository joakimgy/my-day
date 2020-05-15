import React, { ReactNode } from "react";
import "./Rain.scss";

type RainProps = {
  children?: ReactNode;
};

function Rain({ children }: RainProps) {
  return (
    <div className="rain-container">
      {Array.from(Array(150)).map(() => (
        <div className="rain" />
      ))}
      {children}
    </div>
  );
}

export default Rain;
