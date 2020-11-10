import React from "react";
import { Link, useHistory } from "react-router-dom";

export const Header = () => {
  let { goBack } = useHistory();

  return (
    <header
      style={{
        paddingTop: "1rem",
        paddingBottom: "0.5rem",
        borderBottom: "thick solid #fa0",
        height: "14vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <h1>Shopping App v2.0</h1>
      <nav>
        <Link to="/">Home</Link>|<Link to="/shop">Shop</Link>|
        <Link to="/cart">Cart</Link>
      </nav>
      <button className="btn-back" onClick={() => goBack()}>
        <svg viewBox="0 0 10 10">
          <path d="M1.5 1, l7.5 4, l-7.5 4" />
        </svg>
        Back
      </button>
    </header>
  );
};
