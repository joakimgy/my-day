import React, { ReactNode } from "react";
import "./Rain.scss";

type RainProps = {
  children?: ReactNode;
};

function Rain({ children }: RainProps) {
  return (
    <>
      <div>
        {Array.from(Array(150)).map(() => (
          <div className="rain" />
        ))}
      </div>
      {children}
    </>
  );
}

export default Rain;
