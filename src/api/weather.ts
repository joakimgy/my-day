import { JsonDecoder } from "ts.data.json";
import { City } from "../components/CitySearch";

export async function fetchWeather(city: City) {
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

export function decodeWeather(weather: OpenWeatherAPI) {
  return weatherDecoder
    .decodePromise(weather)
    .then((value) => {
      console.log("Decode success: ", value);
      return weather;
    })
    .catch((error) => {
      console.error("Decode fail: ", error);
      return undefined;
    });
}

export type OpenWeatherAPI = {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility?: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
  rain?: Rain;
};

type Sys = {
  type?: number;
  id: number;
  message?: number;
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

export type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type Coord = {
  lon: number;
  lat: number;
};

type Rain = {
  "1h": number;
};

const weatherDecoder = JsonDecoder.objectStrict<OpenWeatherAPI>(
  {
    coord: JsonDecoder.object<Coord>(
      {
        lon: JsonDecoder.number,
        lat: JsonDecoder.number,
      },
      "Coord"
    ),
    weather: JsonDecoder.array(
      JsonDecoder.object<Weather>(
        {
          id: JsonDecoder.number,
          main: JsonDecoder.string,
          description: JsonDecoder.string,
          icon: JsonDecoder.string,
        },
        "Weather"
      ),
      "weather array"
    ),
    base: JsonDecoder.string,
    main: JsonDecoder.object<Main>(
      {
        temp: JsonDecoder.number,
        feels_like: JsonDecoder.number,
        temp_min: JsonDecoder.number,
        temp_max: JsonDecoder.number,
        pressure: JsonDecoder.number,
        humidity: JsonDecoder.number,
      },
      "main"
    ),
    visibility: JsonDecoder.optional(JsonDecoder.number),
    wind: JsonDecoder.object<Wind>(
      {
        speed: JsonDecoder.number,
        deg: JsonDecoder.number,
      },
      "wind"
    ),
    clouds: JsonDecoder.object<Clouds>(
      {
        all: JsonDecoder.number,
      },
      "clouds"
    ),
    dt: JsonDecoder.number,
    sys: JsonDecoder.object<Sys>(
      {
        type: JsonDecoder.optional(JsonDecoder.number),
        id: JsonDecoder.number,
        message: JsonDecoder.optional(JsonDecoder.number),
        country: JsonDecoder.string,
        sunrise: JsonDecoder.number,
        sunset: JsonDecoder.number,
      },
      "sys"
    ),
    timezone: JsonDecoder.number,
    id: JsonDecoder.number,
    name: JsonDecoder.string,
    cod: JsonDecoder.number,
    rain: JsonDecoder.optional(
      JsonDecoder.object<Rain>(
        {
          "1h": JsonDecoder.number,
        },
        "rain"
      )
    ),
  },
  "OpenWeatherAPI"
);
