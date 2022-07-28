import React from "react";
import Select from "react-select";

const options = [
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "green", label: "Green" },
  { value: "blue", label: "Blue" },
];

const SelectHobbies = ({ onChange, value }) => {
  return (
    <div>
      <label>Hobbies: </label>
      <Select
        isMulti
        options={options}
        value={value.map((v) => options.find((o) => o.value === v))}
        getOptionValue={(o) => o.value}
        onChange={onChange}
      />
    </div>
  );
};

export default SelectHobbies;
