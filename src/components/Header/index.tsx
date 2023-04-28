import { MdShoppingCart, MdLogout } from "react-icons/md";
import { useContext } from "react";
import SearchForm from "./SearchForm";
import { StyledHeader } from "./style";
import LogoKenzieBurguer from "../../assets/LogoKenzieBurguer.svg";
import { StyledContainer } from "../../styles/grid";
import { ShopPageContext } from "../../Context/ShopContext/ShopContext";
import { FormLoginContext } from "../../Context/LoginContext/LoginContext";

const Header = () => {
  const { setModalCart, cart } = useContext(ShopPageContext);
  const { logoutDashboard } = useContext(FormLoginContext);

  return (
    <StyledHeader>
      <StyledContainer containerWidth={1300}>
        <div className="flexGrid">
          <img
            src={LogoKenzieBurguer}
            alt="Kenzie Burguer Logo"
            className="logo"
          />

          <nav className="nav" role="navigation">
            <SearchForm />
            <div className="buttons">
              <button
                className="cart"
                type="button"
                onClick={() => {
                  setModalCart(true);
                }}
              >
                <p>{cart.length}</p>
                <MdShoppingCart size={28} />
              </button>
              <button type="button" onClick={logoutDashboard}>
                <MdLogout size={28} />
              </button>
            </div>
          </nav>
        </div>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
