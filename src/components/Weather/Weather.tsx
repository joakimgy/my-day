import React from "react";
import { WeatherCondition } from "../../api/weather";

type WeatherProps = {
  weatherCondition: WeatherCondition;
};

function Weather({ weatherCondition }: WeatherProps) {
  return <p>It looks like the weather is {weatherCondition}</p>;
}

export default Weather;
