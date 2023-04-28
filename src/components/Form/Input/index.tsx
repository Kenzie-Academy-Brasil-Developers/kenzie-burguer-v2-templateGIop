import React, { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import { StyledInputContainer } from "../../../styles/form";
import { StyledParagraph } from "../../../styles/typography";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  type: string;
  register: UseFormRegisterReturn;
}

const Input = ({ label, error, register, type }: IInputProps) => (
  <div>
    <StyledInputContainer>
      <input {...register} type={type} />
      {label ? <label>{label}</label> : null}
    </StyledInputContainer>
    <StyledParagraph fontColor="red">{error}</StyledParagraph>
  </div>
);
export default Input;
