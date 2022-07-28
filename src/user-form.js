import React, { useState } from "react";
import MirroredForm from "./mirrored-form";
import SelectHobbies from "./select-hobbies";
import InputWithLabel from "./input-with-label";
import styled from "styled-components";

const FormWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const VerticalLine = styled.hr`
  background-color: #000000;
  color: #c80000;
  transform: rotate(90deg);
  position: absolute;
  width: 700px;
`;

const UserForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    age: "",
    website: "",
    hobbies: ["purple", "red"],
  });

  const [formValidationErrors, setFormValidationErrors] = useState({});

  const getFieldValidationError = (fieldName) => {
    if (fieldName === "name") {
      const isEmpty = formState.name.trim() === "";
      const isOnlyLetters = /^[a-zA-Z]*$/.test(formState.name);
      if (isEmpty) {
        return "Name is required";
      }

      if (!isOnlyLetters) {
        return "Name should only contain letters";
      }
      return undefined;
    }

    if (fieldName === "email") {
      const isEmpty = formState.email.trim() === "";
      const isEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        formState.email
      );
      if (isEmpty) {
        return "Email is required";
      }
      if (!isEmail) {
        return "Email format is not correct";
      }
      return undefined;
    }
    return undefined;
  };

  const handleChange = (fieldName, e) => {
    setFormState((prev) => ({ ...prev, [fieldName]: e.target.value }));
  };

  const handleHobbiesChange = (value) => {
    setFormState((prev) => ({ ...prev, hobbies: value.map((v) => v.value) }));
  };

  const handleBlur = (fieldName) => {
    setFormValidationErrors((prev) => ({
      ...prev,
      [fieldName]: getFieldValidationError(fieldName),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formValidationErrors).includes(true)) {
      return;
    }

    // continue submit
    console.log({ submittedForm: JSON.stringify(formState) });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormWrapper>
          <div>
            <InputWithLabel
              value={formState.name}
              onChange={(e) => handleChange("name", e)}
              onBlur={() => handleBlur("name")}
              label={"Name"}
              errorMessage={formValidationErrors.name}
            />
            <InputWithLabel
              value={formState.email}
              onChange={(e) => handleChange("email", e)}
              onBlur={() => handleBlur("email")}
              label={"Email"}
              errorMessage={formValidationErrors.email}
            />
            <InputWithLabel
              type="number"
              min={0}
              max={120}
              value={formState.age}
              onChange={(e) => handleChange("age", e)}
              label={"Age"}
            />
            <InputWithLabel
              value={formState.website}
              onChange={(e) => handleChange("website", e)}
              label="Website"
            />
            <SelectHobbies
              value={formState.hobbies}
              onChange={handleHobbiesChange}
            />
            <button type="submit">Save</button>
          </div>
          <VerticalLine />
          <div>
            <MirroredForm formState={formState} />
          </div>
        </FormWrapper>
      </form>
    </div>
  );
};

export default UserForm;
