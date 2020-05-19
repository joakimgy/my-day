import React, { useState } from "react";
import { auth, User } from "firebase";
import { useUser } from "reactfire";
import { motion } from "framer-motion";
import CitySearch from "./CitySearch";
import Weather from "./Weather/Weather";
import useWeather from "../hooks/useWeather";
import LogoutButton from "./Buttons/LogoutButton";

const ProfilePage = () => {
  const user = useUser<User>();
  const [city, setCity] = useState("");
  const weather = useWeather(city);

  return (
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
      <h2>What's up {user.displayName}?</h2>
      <CitySearch onSelect={setCity} />
      {city && (
        <div>
          <p>You have selected {city}</p>
          {weather && <Weather weatherCondition={weather.main} />}
        </div>
      )}
      <div style={{ minHeight: "20vh" }} />
      <LogoutButton onClick={() => auth().signOut()} />
    </motion.div>
  );
};
export default ProfilePage;
