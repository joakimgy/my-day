import { useState, useEffect } from "react";
import { fetchWeather, OpenWeatherAPI } from "../api/weather";

function useWeather(city: string) {
  const [weather, setWeather] = useState<OpenWeatherAPI | undefined>(undefined);

  useEffect(() => {
    fetchWeather(city).then((data) => setWeather(data));
  }, [city]);

  if (
    weather &&
    weather.list &&
    weather.list[0] &&
    weather.list[0].weather &&
    weather.list[0].weather[0]
  ) {
    return weather?.list[0].weather[0];
  } else {
    return undefined;
  }
}

export default useWeather;
