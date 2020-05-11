import { createContext } from "react";
import { User } from "firebase";

type UserProviderType = {
  user?: User;
};

const defaultUser = {
  user: undefined,
};

export const UserContext = createContext<UserProviderType>(defaultUser);
