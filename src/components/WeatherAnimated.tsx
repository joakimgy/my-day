import React from "react";
import WeatherAnimation from "./Weather/WeatherAnimation";
import { Weather } from "../api/weather";
import Ring from "./Ring";

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
      {false && weather && (
        <WeatherAnimation weatherCondition={weather?.main} />
      )}
      <Ring width={100} />
    </div>
  );
}

export default WeatherAnimated;
