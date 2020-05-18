import React, { useState, useEffect } from "react";
import {
  fetchWeather,
  OpenWeatherAPI,
  WeatherCondition,
} from "../../api/weather";

type WeatherProps = {
  setWeatherCondition: (condition: WeatherCondition) => void;
};

function Weather({ setWeatherCondition }: WeatherProps) {
  const [weather, setWeather] = useState<OpenWeatherAPI>();

  useEffect(() => {
    fetchWeather("London").then((data) => setWeather(data));
  }, []);

  useEffect(() => {
    const weatherCondition = weather?.list[0].weather[0].main;
    if (weatherCondition) {
      setWeatherCondition(weatherCondition);
    }
  }, [weather, setWeatherCondition]);

  if (!weather) {
    return <p>Weather not found :(</p>;
  }

  const { description } = weather.list[0].weather[0];

  return <p>Right now there's {description}!</p>;
}

export default Weather;
