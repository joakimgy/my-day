import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function ErrorMessage({ children }: Props) {
  return <p style={{ fontSize: "2rem", fontWeight: "bold" }}>{children}</p>;
}

export default ErrorMessage;
