import React, { useState } from "react";
import { auth, User } from "firebase";
import { useUser } from "reactfire";
import { motion } from "framer-motion";
import Rain from "./Weather/Rain";
import Sun from "./Weather/Sun";
import CitySearch from "./CitySearch";

const ProfilePage = () => {
  const user = useUser<User>();
  const [city, setCity] = useState("");

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
          <>
            <p>Select a city</p>
            <CitySearch onSelect={setCity} />
          </>
        )}
        {city && <p>You have selected {city}</p>}
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
