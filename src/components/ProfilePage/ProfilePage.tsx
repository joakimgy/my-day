import React from "react";
import { auth, User } from "firebase";
import "./ProfilePage.scss";
import { useUser } from "reactfire";

const ProfilePage = () => {
  const user = useUser<User>();

  return (
    <div>
      <div>
        <h1>My page</h1>
        <div
          style={{
            background: `url(${user.photoURL})  no-repeat center center`,
            backgroundSize: "cover",
            height: "200px",
            width: "200px",
          }}
        ></div>
        <div>
          <h2>{user.displayName}</h2>
          <h3>{user.email}</h3>
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
