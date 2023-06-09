import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";

function Navbar() {
  return (
    <div className="navbar-container">
      <Link to="/">
        <h1 className="title-name">Burger Hub</h1>
      </Link>
      <div className="icons-container">
        <Link to="/menu">
          <AiOutlineHome size={40} className="home-icon" />
        </Link>
        <Link to="/cart">
          <AiOutlineShoppingCart size={40} className="cart-icon" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
