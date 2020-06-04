import React, { useState } from "react";
import ErrorBoundary from "./components/Error/ErrorBoundary";
import CitySearch, { City } from "./components/CitySearch";
import useWeather from "./hooks/useWeather";
import AnimatedWeather from "./components/AnimatedWeather";

export function App() {
  const [city, setCity] = useState<City>();
  const weather = useWeather(city);

  return (
    <ErrorBoundary>
      <div>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100vw",
            borderBottom: "solid 1px black",
            padding: "10px",
          }}
        >
          <CitySearch onSelect={setCity} />
          <span style={{ paddingRight: "10px" }}>{weather?.main}</span>
        </nav>
        <AnimatedWeather weather={weather} />
      </div>
    </ErrorBoundary>
  );
}

export default App;
