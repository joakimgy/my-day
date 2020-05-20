import React, { useEffect, ChangeEvent, useState } from "react";
import usePlacesAutocomplete, {
  getLatLng,
  getGeocode,
} from "use-places-autocomplete";
import Autocomplete from "react-autocomplete";

export type City = {
  name: string;
  latLng: { lat: number; lng: number };
};

type CitySearchProps = {
  onSelect: (value: City) => void;
};

function CitySearch({ onSelect }: CitySearchProps) {
  const {
    value,
    suggestions: { data },
    setValue,
  } = usePlacesAutocomplete();
  const [suggestions, setSuggestions] = useState(data);

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function handleSelect(value: string) {
    const parameter = {
      address: value,
    };
    getGeocode(parameter).then((results) =>
      getLatLng(results[0]).then((latLng) => {
        const city: City = {
          name: value,
          latLng,
        };
        onSelect(city);
      })
    );
    setValue(value);
  }

  useEffect(() => {
    setSuggestions(data);
  }, [data]);

  return (
    <Autocomplete
      getItemValue={(item) => item.description}
      items={suggestions}
      renderItem={(item, isHighlighted) => (
        <div
          style={{ background: isHighlighted ? "lightgray" : "white" }}
          key={item.id}
        >
          {item.description}
        </div>
      )}
      value={value}
      onChange={onChange}
      onSelect={(value) => {
        handleSelect(value);
      }}
      inputProps={{ placeholder: "Where to?" }}
      menuStyle={{ margin: "-1rem 0" }}
    />
  );
}

export default CitySearch;
