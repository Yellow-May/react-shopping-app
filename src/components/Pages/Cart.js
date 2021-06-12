import React, { useContext, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

// context
import { ShopContext } from "../../context/ShopContext";

// looped component
import { CartGoods } from "../Looped/CartGoods";

// css styling
import "../../css/cart.css";

export const Cart = () => {
  const { push } = useHistory();
  const {
    cartData,
    cartQuantInc,
    removeFromCart,
    emptyCart,
    addToPurchase,
  } = useContext(ShopContext);

  const [total, setTotal] = useState("₦0");

  const newTotal = () => {
    let x = cartData.reduce(
      (tol, data) =>
        tol + parseFloat(data.price.split(",").join("")) * data.cartQuant,
      0
    );
    setTotal(`₦${x.toLocaleString("en-GB", { maximumFractionDigits: 2 })}`);
  };

  useEffect(() => {
    if (cartData.length !== 0) {
      newTotal();
    }
    		// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartData]);

  const handleClick = (e) => {
    switch (e.target.name) {
      case "purchase":
        emptyCart();
        push("/");
        addToPurchase(cartData);
        break;
      default:
        break;
    }
  };

  return (
    <main className="cart">
      <h1>Cart</h1>
      {cartData.length !== 0 ? (
        <div className="container">
          <div className="cart-details">
            {cartData.map((goods) => {
              return (
                <CartGoods
                  key={goods.itemId}
                  {...goods}
                  event1={newTotal}
                  event2={cartQuantInc}
                  event3={removeFromCart}
                />
              );
            })}
          </div>
          <div className="cart-footer">
            <label>
              Total:
              <input type="text" value={total} readOnly />
            </label>
            <button name="purchase" onClick={(e) => handleClick(e)}>
              Purchase
            </button>
          </div>
        </div>
      ) : (
        <div className="container" style={{ textAlign: "center" }}>
          <h3 style={{ textTransform: "uppercase" }}>Cart is Empty</h3>
          <Link to="/shop" className="goto-shop">
            <p>
              <svg viewBox="0 0 10 10">
                <path d="M1.5 1, l7.5 4, l-7.5 4" />
              </svg>
              Go to Shop
            </p>
          </Link>
        </div>
      )}
    </main>
  );
};
