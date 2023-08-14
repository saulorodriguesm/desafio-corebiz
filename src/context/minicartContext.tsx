import React, { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

interface IMinicartContext {
  minicart: any;
  setMinicart: Function;
  addToCart: Function;
}

const MinicartContext = createContext<IMinicartContext>({
  minicart: [],
  setMinicart: () => {},
  addToCart: () => {},
});

const MinicartProvider: React.FC<{}> = ({ children }) => {
  const [minicart, setMinicart] = useState<any>([]);
  const [cookies, setCookie] = useCookies(["minicart"]);

  useEffect(() => {
    if (Object.keys(cookies).length === 0) {
      setCookie("minicart", minicart);
    }
  });

  const addToCart = (item: any) => {
    const validateQty = minicart.find(
      (currentItem: any) => currentItem.productId === item.productId
    );
    if (validateQty) {
      setMinicart(
        minicart.map((cartItem: any) =>
          cartItem.productId === item.productId
            ? {
                ...validateQty,
                quantity: validateQty.quantity + 1,
              }
            : cartItem
        )
      );
      setCookie("minicart", minicart);
    } else {
      setMinicart([...minicart, { ...item, quantity: 1 }]);
      setCookie("minicart", minicart);
    }
  };
  return (
    <MinicartContext.Provider value={{ minicart, setMinicart, addToCart }}>
      {children}
    </MinicartContext.Provider>
  );
};

export function useMinicartProvider() {
  const context = useContext(MinicartContext);
  if (!context) {
    throw new Error(
      "Esse contexto não pode ser usado fora do MinicartProvider"
    );
  }
  return context;
}

export default MinicartProvider;
