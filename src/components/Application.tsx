import ProfilePage from "./ProfilePage/ProfilePage";
import React, { useState } from "react";
import { Route, HashRouter, Switch, Redirect } from "react-router-dom";
import SignIn from "./Login/SignIn";
import { auth } from "firebase";
import { UserContext, User } from "../providers/UserProvider";

function Application() {
  const [user, setUser] = useState<User>();

  auth().onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(undefined);
    }
  });

  return user ? (
    <UserContext.Provider value={user}>
      <ProfilePage />
    </UserContext.Provider>
  ) : (
    <HashRouter>
      <Switch>
        <Route path="/signIn" isExact component={SignIn} />
        <Redirect to="/signIn" />
      </Switch>
    </HashRouter>
  );
}
export default Application;
