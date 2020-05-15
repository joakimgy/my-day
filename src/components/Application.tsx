import ProfilePage from "./ProfilePage/ProfilePage";
import React from "react";
import SignIn from "./Login/SignIn";
import { AuthCheck, SuspenseWithPerf } from "reactfire";
import { Loading } from "./Loading";

function Application() {
  return (
    <SuspenseWithPerf fallback={<Loading />} traceId={"load-auth"}>
      <AuthCheck fallback={SignIn}>
        <ProfilePage />
      </AuthCheck>
    </SuspenseWithPerf>
  );
}
export default Application;
