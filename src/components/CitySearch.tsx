import React, { useEffect, ChangeEvent, useState } from "react";
import usePlacesAutocomplete from "use-places-autocomplete";
import Autocomplete from "react-autocomplete";

type CitySearchProps = {
  onSelect: (value: string) => void;
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
      onSelect={onSelect}
    />
  );
}

export default CitySearch;
