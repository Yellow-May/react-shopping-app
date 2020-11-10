import React, { useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";

// context
import { ShopContext } from "../../context/ShopContext";

// css styling
import "../../css/goods.css";

export const Goods = () => {
  const { state } = useLocation();
  const { push } = useHistory();

  const { addToCart } = useContext(ShopContext);

  const handleClick = () => {
    push("/cart");
    addToCart({
      itemId: state.itemId,
      name: state.name,
      price: state.price,
      image: state.image,
      quantity: state.quantity,
      cartQuant: 1,
    });
  };

  return (
    <main className="goods">
      <h1>Item</h1>
      <div className="container">
        <div className="goods-content">
          <div className="goods-img">
            <img src={state.image} alt="" />
          </div>
          <div className="goods-details">
            <div className="section">
              <p>{state.name}</p>
              <p>{state.brand}</p>
              <p>${state.price}</p>
              <p>{state.quantity} left in stock</p>
            </div>
            <div className="section">
              <h2>Specifications</h2>
              {Object.keys(state.spec).map((spec, index) => (
                <div className="spec" key={index}>
                  <p>
                    <span>{spec}:</span>
                    {state.spec[spec]}
                  </p>
                </div>
              ))}
            </div>
            <button onClick={handleClick}>Add to cart</button>
          </div>
        </div>
      </div>
    </main>
  );
};
