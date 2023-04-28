import { Navigate, Outlet } from "react-router-dom";

export const AuthRoute = () => {
  const localToken = localStorage.getItem("@TOKEN");

  return localToken ? <Outlet /> : <Navigate to="/" />;
};
