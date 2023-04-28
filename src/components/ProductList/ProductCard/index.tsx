import { useContext } from "react";
import { StyledProductCard } from "./style";
import { StyledButton } from "../../../styles/button";
import { StyledParagraph, StyledTitle } from "../../../styles/typography";
import { IProducts } from "../../../Context/ShopContext/ShopTypes";
import { ShopPageContext } from "../../../Context/ShopContext/ShopContext";

interface IProductProps {
  product: IProducts;
}

const ProductCard = ({ product }: IProductProps) => {
  const { AddeBurguer } = useContext(ShopPageContext);

  return (
    <StyledProductCard key={product.id}>
      <div className="imageBox">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="content">
        <StyledTitle tag="h3" $fontSize="three">
          {product.name}
        </StyledTitle>
        <StyledParagraph className="category">
          {product.category}
        </StyledParagraph>
        <StyledParagraph className="price">
          {product.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </StyledParagraph>
        <StyledButton
          $buttonSize="medium"
          $buttonStyle="green"
          onClick={() => {
            AddeBurguer(product);
          }}
        >
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
