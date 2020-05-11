import { createContext } from "react";

export type User = {
  uid?: any;
  email?: any;
  displayName?: any;
  photoURL?: any;
};

const defaultUser: User = {
  uid: undefined,
  email: undefined,
  displayName: undefined,
  photoURL: undefined,
};

export const UserContext = createContext<User>(defaultUser);
