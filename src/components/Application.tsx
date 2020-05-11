import ProfilePage from "./ProfilePage";
import PasswordReset from "./Login/PasswordReset";
import React, { useState, useEffect } from "react";
import { Route, HashRouter, Switch, Redirect } from "react-router-dom";
import SignUp from "./Login/SignUp";
import SignIn from "./Login/SignIn";
import { auth, User } from "firebase";
import { UserContext } from "../providers/UserProvider";

function Application() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    auth().onAuthStateChanged(function (user) {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }
    });
  }, []);

  return user ? (
    <UserContext.Provider value={{ user: user }}>
      <ProfilePage />
    </UserContext.Provider>
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
