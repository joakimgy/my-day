function cities() {
  const key = process.env.REACT_APP_PLACES_KEY;
  const input = "london";
  const inputtype = "textquery";

  const queryParams = `?key=${key}&input=${input}&inputtype=${inputtype}`;
  const options: RequestInit = {
    method: "GET",
  };

  fetch(
    `https://maps.googleapis.com/maps/api/place/findplacefromtext/json${queryParams}`,
    options
  )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
}

export default cities;
