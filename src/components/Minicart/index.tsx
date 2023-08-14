import React from "react";
import { useCookies } from "react-cookie";

import "./styles.css";

interface IMinicart {
  open: boolean;
  setOpen: Function;
}

const Minicart: React.FC<IMinicart> = ({ open, setOpen }) => {
  const [get] = useCookies(["minicart"]);

  const product = get;

  const formatPrices = (value: number) => {
    const price = value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });

    return price;
  };

  return (
    <>
      {open ? (
        <>
          <div className="minicartContainer">
            <div className="minicartTitleWrapper">
              <span className="minicartTitle">Meu carrinho</span>
              <span
                className="minicartCloseButton"
                onClick={() => setOpen(false)}
              >
                X
              </span>
            </div>
            <div className="minicartItemWrapper"></div>
            {product?.minicart?.map((product: any, index: number) => (
              <div key={index} className={"productListContainer"}>
                <div className={"productListWrapper"}>
                  <img src={product.imageUrl} alt="product" />
                  <div className={"productListInfo"}>
                    <span className={"productListName"}>
                      {product.productName}
                    </span>
                    <span className={"productListPriceList"}>
                      {product.price < product.listPrice
                        ? `de ${formatPrices(product.listPrice / 100)}`
                        : null}
                    </span>
                    <span className={"productListPrice"}>
                      por {formatPrices(product.price / 100)}
                    </span>
                    <span className={"productListInstallments"}>
                      {product.installments.length
                        ? `ou em ${
                            product.installments[0].quantity
                          }x de ${formatPrices(
                            product.installments[0].value / 100
                          )}`
                        : null}
                    </span>
                    <span>{product.quantity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="minicartOverlay" onClick={() => setOpen(false)}></div>
        </>
      ) : null}
    </>
  );
};

export default Minicart;
