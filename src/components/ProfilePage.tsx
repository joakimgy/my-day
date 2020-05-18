import React, { useState } from "react";
import { auth, User } from "firebase";
import { useUser } from "reactfire";
import { motion } from "framer-motion";
import Rain from "./Weather/Rain";
import Sun from "./Weather/Sun";
import CitySearch from "./CitySearch";
import Weather from "./Weather/Weather";
import { WeatherCondition } from "../api/weather";

const ProfilePage = () => {
  const user = useUser<User>();
  const [city, setCity] = useState("");
  const [weatherCondition, setWeatherCondition] = useState<WeatherCondition>();

  return (
    <Rain>
      <motion.div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        initial={{ scale: 0.7 }}
        animate={{ scale: 1.0, borderRadius: "10%" }}
      >
        <h2>What's up {user.displayName}?</h2>
        <div style={{ minHeight: "20vh" }}>
          <Sun />
        </div>
        {!city && (
          <div>
            <p>Select a city</p>
            <CitySearch onSelect={setCity} />
          </div>
        )}
        {city && (
          <div>
            <p>You have selected {city}</p>
            <Weather setWeatherCondition={setWeatherCondition} />
          </div>
        )}
        <div style={{ minHeight: "20vh" }} />
        <motion.button
          className="logout"
          onClick={() => {
            auth().signOut();
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Sign out
        </motion.button>
      </motion.div>
    </Rain>
  );
};
export default ProfilePage;
