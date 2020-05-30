import { JsonDecoder } from "ts.data.json";

interface User {
  firstName: string;
  lastName: string;
}

const userDecoder = JsonDecoder.object<User>(
  {
    firstName: JsonDecoder.string,
    lastName: JsonDecoder.string,
  },
  "User"
);

const validUser = {
  firstName: "Nils",
  lastName: "Frahm",
};

const invalidUser = {
  firstName: null,
  lastName: "Wagner",
};

export function decodeWeather() {
  const json = Math.random() > 0.5 ? validUser : invalidUser;

  userDecoder
    .decodePromise(json)
    .then((value) => {
      console.log("Decode success: ", value);
    })
    .catch((error) => {
      console.error("Decode fail: ", error);
    });
}
