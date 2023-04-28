import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ShopPage from "./pages/ShopPage";
import { AuthLogin } from "./components/ProtectedRoutes/AuthLogin/AuthLogin";
import { AuthRoute } from "./components/ProtectedRoutes/AuthRoute/AuthRoute";

const Router = () => (
  <Routes>
    <Route path="/" element={<AuthLogin />}>
      <Route index element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Route>

    <Route path="/shop" element={<AuthRoute />}>
      <Route path="/shop" element={<ShopPage />} />
    </Route>
  </Routes>
);
export default Router;
