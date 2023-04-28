import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "./routes";
import { GlobalStyles } from "./styles/global";
import { ShopPageProvider } from "./Context/ShopContext/ShopContext";
import { FormRegisterProvider } from "./Context/RegisterContext/RegisterContext";
import { FormLoginProvider } from "./Context/LoginContext/LoginContext";

const App = () => (
  <FormLoginProvider>
    <FormRegisterProvider>
      <ShopPageProvider>
        <GlobalStyles />
        <Router />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </ShopPageProvider>
    </FormRegisterProvider>
  </FormLoginProvider>
);

export default App;
