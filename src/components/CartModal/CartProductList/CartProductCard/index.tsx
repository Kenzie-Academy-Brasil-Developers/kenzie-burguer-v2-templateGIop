import { MdDelete } from "react-icons/md";
import { StyledCartProductCard } from "./style";
import { StyledTitle } from "../../../../styles/typography";
import { useContext } from "react";
import { ShopPageContext } from "../../../../Context/ShopContext/ShopContext";
import { IProducts } from "../../../../Context/ShopContext/ShopTypes";

interface IProductCartProps {
  productCart: IProducts;
}

const CartProductCard = ({ productCart }: IProductCartProps) => {
  const { removeBurguer } = useContext(ShopPageContext);

  return (
    <StyledCartProductCard>
      <div className="imageBox">
        <img src={productCart.img} alt={productCart.name} />
      </div>
      <div className="contentBox">
        <StyledTitle tag="h3" $fontSize="three">
          {productCart.name}
        </StyledTitle>
        <button
          type="button"
          aria-label="Remover"
          onClick={() => removeBurguer(productCart)}
        >
          <MdDelete size={24} />
        </button>
      </div>
    </StyledCartProductCard>
  );
};

export default CartProductCard;
