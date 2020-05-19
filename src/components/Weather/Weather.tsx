import React from "react";
import { WeatherCondition } from "../../api/weather";
import Sun from "./Sun";
import Rain from "./Rain";

type WeatherProps = {
  weatherCondition: WeatherCondition;
};

function Weather({ weatherCondition }: WeatherProps) {
  switch (weatherCondition) {
    case "Atmosphere":
      return <Rain />;
    case "Clear":
      return <Sun />;
    case "Clouds":
      return <Sun />;
    case "Drizzle":
      return <Rain />;
    case "Rain":
      return <Rain />;
    case "Snow":
      return <Rain />;
    case "Thunderstorm":
      return <Rain />;
  }
}

export default Weather;
