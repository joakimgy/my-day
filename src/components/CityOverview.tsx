import React from "react";
import WeatherAnimation from "./Weather/WeatherAnimation";
import { Weather } from "../api/weather";
import { City } from "./CitySearch";

type CityOverviewProps = {
  city?: City;
  weather?: Weather;
};

function CityOverview({ city, weather }: CityOverviewProps) {
  return (
    <div>
      {city && <p>You have selected {city.name}</p>}
      {weather && <WeatherAnimation weatherCondition={weather.main} />}
    </div>
  );
}

export default CityOverview;
