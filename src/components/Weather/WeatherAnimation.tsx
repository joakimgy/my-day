import React from "react";
import { WeatherCondition } from "../../api/weather";
import Sun from "./Sun";
import Rain from "./Rain";

type WeatherAnimationProps = {
  weatherCondition: WeatherCondition;
};

function WeatherAnimation({ weatherCondition }: WeatherAnimationProps) {
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

export default WeatherAnimation;
