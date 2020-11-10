import React, { useContext } from "react";

// context
import { ShopContext } from "../../context/ShopContext";

// looped component
import { ShopGoods } from "../Looped/ShopGoods";

// css styling
import "../../css/shop.css";

export const Shop = () => {
  const { shopData } = useContext(ShopContext);

  return (
    <main className="shop">
      <h1>Shop</h1>
      <div className="container">
        {shopData.categories.map((category, index) => {
          return (
            <div className="category" key={index}>
              <h2>{category[0].brand}</h2>
              <div className="category-contents">
                {category.map((goods) => {
                  return <ShopGoods key={goods.itemId} {...goods} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};
