export function weather() {
  const apiKey = "6f25cee5ab290664850014abcda2ad73";
  const city = "london";

  const queryParams = `?q=${city}&APPID=${apiKey}`;
  const options: RequestInit = {
    method: "GET",
  };

  fetch(
    `http://api.openweathermap.org/data/2.5/forecast${queryParams}`,
    options
  )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
}
