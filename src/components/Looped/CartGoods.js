import React from "react";

export const CartGoods = ({
  itemId,
  image,
  name,
  price,
  quantity,
  cartQuant,
  event1,
  event2,
  event3,
}) => {
  const handleClick = (e) => {
    switch (e.target.name) {
      case "add":
        if (cartQuant <= quantity) {
          event1();
          event2(itemId, cartQuant + 1);
        }
        break;

      case "minus":
        if (cartQuant >= 1) {
          event1();
          event2(itemId, cartQuant - 1);
        }
        break;

      case "remove":
        event1();
        event3(itemId);
        break;

      default:
        break;
    }
  };

  return (
    <div className="cart-goods">
      <div className="goods-img">
        <img src={image} alt="" />
      </div>
      <div className="goods-details">
        <p>{name.slice(0, 20)}</p>
        <p>₦{price}</p>
        <div className="quantity">
          <button name="minus" onClick={(e) => handleClick(e)}>
            &minus;
          </button>
          <input type="number" value={cartQuant} readOnly />
          <button name="add" onClick={(e) => handleClick(e)}>
            +
          </button>
        </div>
      </div>
      <button name="remove" className="remove" onClick={(e) => handleClick(e)}>
        &times;
      </button>
    </div>
  );
};
