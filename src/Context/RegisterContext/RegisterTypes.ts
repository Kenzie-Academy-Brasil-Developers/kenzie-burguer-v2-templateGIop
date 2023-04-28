import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { TRegisterValues } from "./RegisterSchema";

export interface IFormRegisterContext {
  register: UseFormRegister<TRegisterValues>;
  handleSubmit: UseFormHandleSubmit<TRegisterValues>;
  errors: FieldErrors<TRegisterValues>;
  submitRegisterForm: (data: TRegisterValues) => void;
}

export interface ISubmitRegisterForm {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

export interface IFormRegisterProviderProps {
  children: React.ReactNode;
}
