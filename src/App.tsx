import React, { useState } from "react";
import ErrorBoundary from "./components/Error/ErrorBoundary";
import CitySearch, { City } from "./components/CitySearch";
import useWeather from "./hooks/useWeather";
import WeatherAnimated from "./components/WeatherAnimated";

export function App() {
  const [city, setCity] = useState<City>();
  const weather = useWeather(city);

  return (
    <ErrorBoundary>
      <div>
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
          <CitySearch onSelect={setCity} />
          <span>WeatherAnimated</span>
        </nav>
        <WeatherAnimated weather={weather} />
      </div>
    </ErrorBoundary>
  );
}

export default App;
