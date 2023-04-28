import { useNavigate } from "react-router-dom";
import { createContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { RegisterSchema, TRegisterValues } from "./RegisterSchema";

import {
  IFormRegisterContext,
  IFormRegisterProviderProps,
} from "./RegisterTypes";
import { api } from "../../service/api";
import { toastify } from "../../components/Toast/Toast";

export const FormRegisterContext = createContext<IFormRegisterContext>(
  {} as IFormRegisterContext
);

export const FormRegisterProvider = ({
  children,
}: IFormRegisterProviderProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterValues>({
    resolver: zodResolver(RegisterSchema),
  });

  const navigate = useNavigate();

  const submitRegisterForm: SubmitHandler<TRegisterValues> = async (data) => {
    const sendData = {
      email: data.email,
      password: data.password,
      name: data.name,
    };
    try {
      await api.post("/users", sendData);
      navigate("/");
      toastify("Usuário cadastrado com sucesso", "success");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toastify(error.response?.data, "error");
      }
    }
  };

  return (
    <FormRegisterContext.Provider
      value={{ register, handleSubmit, errors, submitRegisterForm }}
    >
      {children}
    </FormRegisterContext.Provider>
  );
};
