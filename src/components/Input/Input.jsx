// eslint-disable-next-line no-unused-vars
import React from 'react';
import { InputStyled, InputContainer } from './styled';

// eslint-disable-next-line react/prop-types
const Input = ({ value, onChange, label, id, erro, ...props }) => {
  return (
    <>
      <InputContainer>
        <label htmlFor={id}>{label}</label>
        <InputStyled
          id={id}
          type="text"
          value={value}
          onChange={onChange}
          colorerro={String(erro)}
          {...props}
        />
      </InputContainer>
    </>
  );
};

export default Input;
