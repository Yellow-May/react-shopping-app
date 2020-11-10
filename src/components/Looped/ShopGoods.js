import React from "react";
import { useHistory } from "react-router-dom";

export const ShopGoods = (props) => {
  const { image, name, price } = props;
  const { push } = useHistory();
  return (
    <div className="shop-goods">
      <div className="goods-img">
        <img src={image} alt="" />
      </div>
      <div className="goods-details">
        <p>{name.slice(0, 20)}</p>
        <p>₦{price}</p>
        <button
          onClick={() => {
            push(`/shop/${name}`, props);
          }}
        >
          More
          <svg viewBox="0 0 10 10">
            <path d="M1.5 1, l7.5 4, l-7.5 4" />
          </svg>
        </button>
      </div>
    </div>
  );
};
