import ProfilePage from "./ProfilePage/ProfilePage";
import React from "react";
import SignIn from "./Login/SignIn";
import { AuthCheck } from "reactfire";

function Application() {
  return (
    <>
      <h1>Bzz</h1>
      <AuthCheck fallback={SignIn}>
        <>
          yo
          <ProfilePage />
        </>
      </AuthCheck>
    </>
  );
}
export default Application;
