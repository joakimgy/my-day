import React from "react";
import { auth, User } from "firebase";
import "./ProfilePage.scss";
import { useUser } from "reactfire";
import { Loading } from "../Loading";

const ProfilePage = () => {
  const user = useUser<User>();

  return (
    <div>
      <div>
        <h2>What's up {user.displayName}?</h2>
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
