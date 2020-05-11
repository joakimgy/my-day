import { createContext } from "react";

type UserProviderType = {
  uid?: any;
  email?: any;
  displayName?: any;
  photoURL?: any;
};

const defaultUser: UserProviderType = {
  uid: undefined,
  email: undefined,
  displayName: undefined,
  photoURL: undefined,
};

export const UserContext = createContext<UserProviderType>(defaultUser);
