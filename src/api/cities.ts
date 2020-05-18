async function cities() {
  const apiKey = process.env.REACT_APP_PLACES_KEY;
  const input = "london";

  const queryParams = `?key=${apiKey}&input=${input}&inputtype=textquery`;

  const placeid = await fetch(
    `https://maps.googleapis.com/maps/api/place/findplacefromtext/json${queryParams}`
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.error("Failed to fetch placeid: ", err);
      return undefined;
    });

  if (!placeid) {
    return undefined;
  }
  console.log("Place id found: ", placeid);

  const result = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeid}}&key=${apiKey}`
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log("Failed to fetch city: ", err);
      return undefined;
    });

  if (!result) {
    return undefined;
  } else {
    console.log("City found: ", result);
    return result;
  }
}

export default cities;
