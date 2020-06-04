import React from "react";
import WeatherAnimation from "./Weather/WeatherAnimation";
import { Weather } from "../api/weather";

type CityOverviewProps = {
  weather?: Weather;
};

function AnimatedWeather({ weather }: CityOverviewProps) {
  return (
    <div style={{ backgroundColor: "#47bfe4", height: "100vh" }}>
      {weather && <WeatherAnimation weatherCondition={weather.main} />}
    </div>
  );
}

export default AnimatedWeather;
