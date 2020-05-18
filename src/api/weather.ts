export async function fetchWeather(city: string) {
  const apiKey = "6f25cee5ab290664850014abcda2ad73";

  const queryParams = `?q=${city}&APPID=${apiKey}`;
  const options: RequestInit = {
    method: "GET",
  };

  const weather = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast${queryParams}`,
    options
  ).then((response) => (response.json() as unknown) as OpenWeatherAPI);

  return weather;
}

export type OpenWeatherAPI = {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
  city: City;
};

type City = {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
};

type Coord = {
  lat: number;
  lon: number;
};

type List = {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  sys: Sys;
  dt_txt: string;
  rain?: Rain;
};

type Rain = {
  "3h": number;
};

type Sys = {
  pod: string;
};

type Wind = {
  speed: number;
  deg: number;
};

type Clouds = {
  all: number;
};

export type WeatherCondition =
  | "Thunderstorm"
  | "Drizzle"
  | "Rain"
  | "Snow"
  | "Atmosphere"
  | "Clear"
  | "Clouds";

type Weather = {
  id: number;
  main: WeatherCondition;
  description: string;
  icon: string;
};

type Main = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
};
