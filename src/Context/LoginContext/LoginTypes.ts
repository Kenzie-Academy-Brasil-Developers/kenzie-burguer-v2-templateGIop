import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

import { TLoginValues } from "./LoginSchema";

export interface IFormLoginContext {
  register: UseFormRegister<TLoginValues>;
  handleSubmit: UseFormHandleSubmit<TLoginValues>;
  submitLoginForm: (data: TLoginValues) => void;

  errors: FieldErrors<TLoginValues>;
  logoutDashboard: () => void;
}

export interface IFormLoginProviderProps {
  children: React.ReactNode;
}

export interface ISubmitLoginForm {
  email: string;
  password: string;
}

export interface IApiResponseLogin {
  accessToken: string;
  user: {
    id: string;
    email: string;
  };
}

export interface IUser {
  email: string;
  name?: string;
  id?: string;
}

export interface IAxiosError {
  message: string;
  response?: {
    data: string;
  };
}
