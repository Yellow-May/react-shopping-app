import React, { createContext, useReducer } from "react";

// import AppReducer
import AppReducer from "./AppReducer";

// import data
import data1 from "../jsonData/asusData.json";
import data2 from "../jsonData/hpData.json";

// state initiation
const initialState = {
  shopData: {
    categories: [data1, data2],
  },
  cartData: [],
  purchaseData: [],
};

// create shop context
export const ShopContext = createContext(initialState);

// create shop provider
export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions
  const addToCart = (item) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: item,
    });
  };

  const cartQuantInc = (id, data) => {
    dispatch({
      type: "CART_QUANT_INC",
      payload: id,
      newData: data,
    });
  };

  const removeFromCart = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };

  const emptyCart = () => {
    dispatch({
      type: "EMPTY_CART",
    });
  };

  const addToPurchase = (item) => {
    dispatch({
      type: "ADD_TO_PURCHASE",
      payload: item,
    });
  };

  const clearPurchase = () => {
    dispatch({
      type: "CLEAR_PURCHASE",
    });
  };

  return (
    <ShopContext.Provider
      value={{
        shopData: state.shopData,
        cartData: state.cartData,
        purchaseData: state.purchaseData,
        addToCart,
        cartQuantInc,
        removeFromCart,
        emptyCart,
        addToPurchase,
        clearPurchase,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
