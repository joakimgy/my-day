import React from "react";
import { auth, User } from "firebase";
import { useUser } from "reactfire";
import { motion } from "framer-motion";

const ProfilePage = () => {
  const user = useUser<User>();

  return (
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
        <p>:)</p>
      </div>
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
  );
};
export default ProfilePage;
