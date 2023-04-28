import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { FieldValues, SubmitHandler } from "react-hook-form";
import {
  IProducts,
  IShopPageProvider,
  IShopPageProviderProps,
} from "./ShopTypes";
import { api } from "../../service/api";
import { toastify } from "../../components/Toast/Toast";

export const ShopPageContext = createContext<IShopPageProvider>(
  {} as IShopPageProvider
);

export const ShopPageProvider = ({ children }: IShopPageProviderProps) => {
  const [modalCart, setModalCart] = useState(false);
  const [products, setProducts] = useState<IProducts[]>([] as IProducts[]);

  const [allProducts, setAllProducts] = useState<IProducts[]>(
    [] as IProducts[]
  );
  const [cart, setCart] = useState<IProducts[]>([] as IProducts[]);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const getProducts = async () => {
      try {
        const response = await api.get<IProducts[]>("/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAllProducts(response?.data);
        setProducts(response?.data);
      } catch (error) {
        if (
          axios.isAxiosError(error) &&
          error.response?.data === "jwt expired"
        ) {
          toastify("Seu login expirou! Faça login novamente", "error");
        }
      }
    };
    getProducts();
  }, []);

  const submitSearch: SubmitHandler<FieldValues> = ({ search }) => {
    if (search !== "") {
      const filterProduct = allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.category.toLowerCase().includes(search.toLowerCase())
      );
      setProducts(filterProduct);
    } else {
      setProducts(allProducts);
    }
  };

  const AddeBurguer = (productAdded: IProducts) => {
    const oldProducts = cart.find(
      (productCart) => productCart === productAdded
    );

    if (oldProducts === undefined) {
      setCart([...cart, productAdded]);
      toastify(`${productAdded.name} adicionado com sucesso!`, "success");
    } else {
      toastify(`${productAdded.name} já adicionado!`, "error");
    }
  };

  const removeBurguer = (product: IProducts) => {
    const data = cart.filter((ProductCart) => ProductCart.id !== product.id);
    setCart(data);
  };

  const removeAll = () => {
    setCart([]);
  };

  return (
    <ShopPageContext.Provider
      value={{
        modalCart,
        setModalCart,
        products,
        cart,
        setCart,
        AddeBurguer,
        removeAll,
        removeBurguer,
        setProducts,
        submitSearch,
      }}
    >
      {children}
    </ShopPageContext.Provider>
  );
};
