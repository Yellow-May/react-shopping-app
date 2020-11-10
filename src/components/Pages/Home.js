import React from "react";
import { Link } from "react-router-dom";

// modal
import { Modal } from "../Modal/Modal";

// import image
import bgImage from "../../images/homeBg.png";

export const Home = () => {
  return (
    <main
      className="home"
      style={{
        height: "80vh",
        background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1>Welcome to My Shop</h1>
      <Link to="/shop">
        <p>
          Begin Shopping
          <svg viewBox="0 0 10 10">
            <path d="M1.5 1, l7.5 4, l-7.5 4" />
          </svg>
        </p>
      </Link>
      <Modal />
    </main>
  );
};
