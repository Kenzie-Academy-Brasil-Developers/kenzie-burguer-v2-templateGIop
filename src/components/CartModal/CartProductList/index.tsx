import { useContext } from "react";
import CartProductCard from "./CartProductCard";
import { StyledCartProductList } from "./style";
import { StyledButton } from "../../../styles/button";
import { StyledParagraph } from "../../../styles/typography";
import { ShopPageContext } from "../../../Context/ShopContext/ShopContext";

const CartProductList = () => {
  const { cart, removeAll } = useContext(ShopPageContext);

  const totalPrice = cart.reduce((acc, cur) => acc + cur.price, 0);

  return (
    <StyledCartProductList>
      <ul>
        {cart.map((productCart) => (
          <CartProductCard key={productCart.id} productCart={productCart} />
        ))}
      </ul>
      <div className="totalBox">
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className="total">
          {totalPrice.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </StyledParagraph>
      </div>
      <StyledButton
        $buttonSize="default"
        $buttonStyle="gray"
        onClick={removeAll}
      >
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
};

export default CartProductList;
