import React, { useState } from "react";
import ErrorBoundary from "./components/Error/ErrorBoundary";
import CitySearch, { City } from "./components/CitySearch";
import useWeather from "./hooks/useWeather";
import { motion } from "framer-motion";
import CityOverview from "./components/CityOverview";

export function App() {
  const [city, setCity] = useState<City>();
  const weather = useWeather(city);

  return (
    <ErrorBoundary>
      <motion.div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        initial={{ scale: 0.5 }}
        animate={{ scale: 1.0, borderRadius: "10%" }}
      >
        <CitySearch setCity={setCity} />
        <CityOverview city={city} weather={weather} />
        <div style={{ minHeight: "20vh" }} />
      </motion.div>
    </ErrorBoundary>
  );
}

export default App;
