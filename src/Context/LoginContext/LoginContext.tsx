import { createContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LoginSchema } from "./LoginSchema";
import {
  IApiResponseLogin,
  IAxiosError,
  IFormLoginContext,
  IFormLoginProviderProps,
  IUser,
} from "./LoginTypes";
import { api } from "../../service/api";
import { toastify } from "../../components/Toast/Toast";
import { TLoginValues } from "./LoginSchema";

export const FormLoginContext = createContext<IFormLoginContext>(
  {} as IFormLoginContext
);

export const FormLoginProvider = ({ children }: IFormLoginProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<TLoginValues>({
    resolver: zodResolver(LoginSchema),
  });

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const userId = localStorage.getItem("@USER");

    const userAutoLogin = async () => {
      try {
        const { data } = await api.get<IUser>(`/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
        navigate("/shop");
      } catch (error) {
        const Ierror = error as IAxiosError;
        console.log(Ierror);
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
      }
    };
    if (token && userId) {
      userAutoLogin();
    }
  }, []);

  const submitLoginForm = async (formData: TLoginValues) => {
    try {
      const { data } = await api.post<IApiResponseLogin>("/login", formData);
      localStorage.setItem("@TOKEN", data.accessToken);
      localStorage.setItem("@USERID", JSON.stringify(data.user.id));
      setUser(data.user);
      navigate("/shop");
    } catch (error) {
      console.log(error);
    }
  };

  const logoutDashboard = () => {
    window.localStorage.clear();
    navigate("/");
  };

  return (
    <FormLoginContext.Provider
      value={{
        register,

        handleSubmit,
        submitLoginForm,
        errors,
        logoutDashboard,
      }}
    >
      {children}
    </FormLoginContext.Provider>
  );
};
