import React from "react";
import WeatherAnimation from "./Weather/WeatherAnimation";
import { Weather } from "../api/weather";

type CityOverviewProps = {
  city?: string;
  weather?: Weather;
};

function CityOverview({ city, weather }: CityOverviewProps) {
  return (
    <div>
      <p>{weather?.description}</p>
      {city && <p>You have selected {city}</p>}
      {weather && <WeatherAnimation weatherCondition={weather.main} />}
    </div>
  );
}

export default CityOverview;
