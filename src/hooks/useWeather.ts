import { useState, useEffect } from "react";
import { fetchWeather, OpenWeatherAPI, Weather } from "../api/weather";
import { City } from "../components/CitySearch";

function useWeather(city?: City): Weather | undefined {
  const [weather, setWeather] = useState<OpenWeatherAPI | undefined>(undefined);

  useEffect(() => {
    if (city) {
      fetchWeather(city).then((data) => setWeather(data));
    } else {
      setWeather(undefined);
    }
  }, [city]);

  if (weather && weather.weather && weather.weather[0]) {
    return weather.weather[0];
  } else {
    return undefined;
  }
}

export default useWeather;
