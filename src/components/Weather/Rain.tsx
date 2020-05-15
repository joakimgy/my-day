import React, { ReactNode } from "react";
import "./Rain.scss";

type RainProps = {
  children?: ReactNode;
};

function Rain({ children }: RainProps) {
  return (
    <>
      {Array.from(Array(150)).map(() => (
        <div className="rain" />
      ))}
      {children}
    </>
  );
}

export default Rain;
