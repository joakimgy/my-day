import ProfilePage from "./ProfilePage";
import PasswordReset from "./Login/PasswordReset";
import React from "react";
import { Route, HashRouter, Switch, Redirect } from "react-router-dom";
import SignUp from "./Login/SignUp";
import SignIn from "./Login/SignIn";

function Application() {
  const user = null;
  return user ? (
    <ProfilePage />
  ) : (
    <HashRouter>
      <Switch>
        <Route path="/signIn" isExact component={SignIn} />
        <Route path="/signUp" isExact component={SignUp} />
        <Route path="/passwordReset" isExact component={PasswordReset} />
        <Redirect to="/signIn" />
      </Switch>
    </HashRouter>
  );
}
export default Application;
