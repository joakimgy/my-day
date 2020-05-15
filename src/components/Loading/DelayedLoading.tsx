import React, { useState, useEffect } from "react";
import { Loading } from "./Loading";

const DelayedLoading = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    let timeout = setTimeout(() => setShow(true), 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return <>{show && <Loading />}</>;
};
export default DelayedLoading;
