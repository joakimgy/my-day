import React from "react";
import { auth } from "firebase";
import "./ProfilePage.scss";

const ProfilePage = () => {
  const photoURL = "";
  const displayName = "";
  const email = "";

  return (
    <div>
      <div>
        <h1>My page</h1>
        <div
          style={{
            background: `url(${photoURL})  no-repeat center center`,
            backgroundSize: "cover",
            height: "200px",
            width: "200px",
          }}
        ></div>
        <div>
          <h2>{displayName}</h2>
          <h3>{email}</h3>
        </div>
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
