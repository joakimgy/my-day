import React, { useState } from "react";
import ErrorBoundary from "./components/Error/ErrorBoundary";
import CitySearch, { City } from "./components/CitySearch";
import useWeather from "./hooks/useWeather";
import WeatherAnimated from "./components/WeatherAnimated";
import Ring from "./components/Ring";

export function App() {
  const [city, setCity] = useState<City>();
  const weather = useWeather(city);

  return (
    <ErrorBoundary>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100vw",
          borderBottom: "solid 1px black",
          padding: "10px",
        }}
      >
        <Ring width={50} animate={!weather} />
        <CitySearch onSelect={setCity} />
        <span>WeatherAnimated</span>
      </nav>
      <div>
        <WeatherAnimated weather={weather} />
      </div>
    </ErrorBoundary>
  );
}

export default App;
