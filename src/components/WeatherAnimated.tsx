import React from "react";
import WeatherAnimation from "./Weather/WeatherAnimation";
import { Weather } from "../api/weather";

type CityOverviewProps = {
  weather?: Weather;
};

function WeatherAnimated({ weather }: CityOverviewProps) {
  return (
    <div
      style={{
        backgroundColor: "#47bfe4",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        paddingTop: "5rem",
      }}
    >
      {weather && <WeatherAnimation weatherCondition={weather?.main} />}
    </div>
  );
}

export default WeatherAnimated;
