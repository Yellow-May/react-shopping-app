import React, { useContext } from "react";

// context
import { ShopContext } from "../../context/ShopContext";

// css styling
import "../../css/modal.css";

export const Modal = () => {
  const { purchaseData, clearPurchase } = useContext(ShopContext);

  const actModal = () => {
    if (purchaseData.length === 0) {
      return {
        display: "none",
      };
    }
  };

  return (
    <div className="modal" style={actModal()}>
      <div className="alert">
        <div className="content">
          <ul>
            {purchaseData.map((item) => {
              return (
                <li key={item.itemId}>
                  {item.name} <span>x{item.cartQuant}</span>
                </li>
              );
            })}
          </ul>
          <h3>
            Your Total is{" "}
            <span>
              {"₦" +
                purchaseData
                  .reduce(
                    (tol, data) =>
                      tol +
                      parseFloat(data.price.split(",").join("")) *
                        data.cartQuant,
                    0
                  )
                  .toLocaleString("en-GB", { maximumFractionDigits: 2 })}
            </span>
          </h3>
          <h2>Thank You For Shopping With Us!!!</h2>
        </div>
        <button className="close" onClick={() => clearPurchase()}>
          Okay
        </button>
      </div>
    </div>
  );
};
