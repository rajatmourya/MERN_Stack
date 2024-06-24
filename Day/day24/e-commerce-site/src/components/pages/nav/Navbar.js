import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

function Navbar() {
  const cart = useSelector((state) => state.CartReducer.cart);
  let quant = 0;
  cart.forEach((item) => {quant += item.quantity});
  return (
    <nav>
      <div className="rigthLayout">
        <Link to="./" style={{ color: "white", textDecoration: "none" }}>
          <h2 className="banner">My Mantra</h2>
        </Link>
      </div>
      <div className="cardLayout">
        <Link to="./Home > Shipping Cart" style={{ color: "white", textDecoration: "none" }}>
          <AiOutlineShoppingCart />
          </Link>
        <h3>{quant}</h3>
      </div>
    </nav>
  );
}

export default Navbar;
