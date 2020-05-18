import React, { useEffect } from "react";
import cities from "../api/cities";

function CitySearch() {
  useEffect(() => {
    cities();
  }, []);
  return <div></div>;
}

export default CitySearch;
