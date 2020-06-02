import { useState, useEffect } from "react";
import { OpenWeatherAPI, Weather, decodeWeather } from "../api/weather";
import { City } from "../components/CitySearch";

function useWeather(city?: City): Weather | undefined {
  const [weather, setWeather] = useState<OpenWeatherAPI | undefined>(undefined);

  async function fetchWeather(city: City) {
    const {
      latLng: { lat, lng: lon },
    } = city;
    const apiKey = process.env.REACT_APP_OPENWEATHERMAP_KEY;
    const weather = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        return decodeWeather(responseJson);
      });
    return weather;
  }

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
