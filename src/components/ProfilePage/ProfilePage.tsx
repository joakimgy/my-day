import React from "react";
import { auth, User } from "firebase";
import { useUser } from "reactfire";

const ProfilePage = () => {
  const user = useUser<User>();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>What's up {user.displayName}?</h2>
      <div style={{ minHeight: "20vh" }}>
        <p>:)</p>
      </div>
      <button
        className="logout"
        onClick={() => {
          auth().signOut();
        }}
      >
        Sign out
      </button>
    </div>
  );
};
export default ProfilePage;
