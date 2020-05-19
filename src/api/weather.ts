import { City } from "../components/CitySearch";

export async function fetchWeather(city: City) {
  const {
    latLng: { lat, lng: lon },
  } = city;
  const apiKey = "6f25cee5ab290664850014abcda2ad73";

  const weather = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
  ).then((response) => (response.json() as unknown) as OpenWeatherAPI);

  return weather;
}

export type OpenWeatherAPI = {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

type Sys = {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
};

type Clouds = {
  all: number;
};

type Wind = {
  speed: number;
  deg: number;
};

type Main = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
};

export type WeatherCondition =
  | "Thunderstorm"
  | "Drizzle"
  | "Rain"
  | "Snow"
  | "Atmosphere"
  | "Clear"
  | "Clouds";

export type Weather = {
  id: number;
  main: WeatherCondition;
  description: string;
  icon: string;
};

type Coord = {
  lon: number;
  lat: number;
};
