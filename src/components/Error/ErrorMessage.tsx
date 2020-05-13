import React, { ReactNode } from "react";
import style from "./Error.module.scss";

type Props = {
  children: ReactNode;
};

function ErrorMessage({ children }: Props) {
  return <p className={style.errorMessage}>{children}</p>;
}

export default ErrorMessage;
