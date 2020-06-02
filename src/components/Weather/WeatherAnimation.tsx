import React from "react";
import Sun from "./Sun";
import Rain from "./Rain";

type WeatherAnimationProps = {
  weatherCondition: string;
};

function WeatherAnimation({ weatherCondition }: WeatherAnimationProps) {
  switch (weatherCondition) {
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
    case "Mist":
      return <Rain />;
    case "Smoke":
      return <Rain />;
    case "Haze":
      return <Rain />;
    case "Dust":
      return <Rain />;
    case "Fog":
      return <Rain />;
    case "Sand":
      return <Rain />;
    case "Ash":
      return <Rain />;
    case "Squall":
      return <Rain />;
    case "Tornado":
      return <Rain />;
    default:
      console.error("No weather condition found.");
      return null;
  }
}

export default WeatherAnimation;
