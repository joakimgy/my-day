import ProfilePage from "./ProfilePage";
import React from "react";
import SignIn from "./SignIn";
import { AuthCheck, SuspenseWithPerf } from "reactfire";
import DelayedLoading from "./Loading/DelayedLoading";

function Application() {
  return (
    <SuspenseWithPerf fallback={<DelayedLoading />} traceId={"load-auth"}>
      <AuthCheck fallback={SignIn}>
        <ProfilePage />
      </AuthCheck>
    </SuspenseWithPerf>
  );
}
export default Application;
