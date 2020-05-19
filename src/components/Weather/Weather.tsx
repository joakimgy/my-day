import React from "react";
import { WeatherCondition } from "../../api/weather";
import Sun from "./Sun";
import Rain from "./Rain";

type WeatherProps = {
  weatherCondition: WeatherCondition;
};

function Weather({ weatherCondition }: WeatherProps) {
  return (
    <>
      <Sun />
      <Rain />
      <p>It looks like the weather is {weatherCondition}</p>
    </>
  );
}

export default Weather;
