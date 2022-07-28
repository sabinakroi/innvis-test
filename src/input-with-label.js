import styled from "styled-components";
import React from "react";

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

`;

const FormInput = styled.input`
  min-width: 200px;
  display: flex;
  justify-content: flex-start;
`;

const InputTitle = styled.label`
  margin-right: 5px;
`;

const InputWithLabel = (props) => {
  const { label, errorMessage, ...inputProps } = props;
  return (
    <InputWrapper>
      <InputTitle>{label}: </InputTitle>
      <FormInput {...inputProps} />
      {errorMessage && <div>{errorMessage}</div>}
    </InputWrapper>
  );
};
export default InputWithLabel;
