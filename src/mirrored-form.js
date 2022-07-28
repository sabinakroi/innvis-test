import React from "react";
import InputWithLabel from "./input-with-label";
import SelectHobbies from "./select-hobbies";

const MirroredForm = ({ formState }) => {
  return (
    <div>
      <div>
        <InputWithLabel value={formState.name} label="Name" readOnly />
        <InputWithLabel value={formState.email} label="Email" readOnly />
        <InputWithLabel value={formState.age} label='Age' readOnly  />
        <InputWithLabel value={formState.website} label='Website' readOnly />
        <SelectHobbies value={formState.hobbies} />
      </div>
    </div>
  );
};

export default MirroredForm;
