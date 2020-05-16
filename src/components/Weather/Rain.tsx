import React, { ReactNode } from "react";
import "./Rain.scss";

type RainProps = {
  children?: ReactNode;
};

function Rain({ children }: RainProps) {
  return (
    <>
      <div>
        {Array.from(Array(150)).map((_, index) => (
          <div key={index} className="rain" />
        ))}
      </div>
      {children}
    </>
  );
}

export default Rain;
