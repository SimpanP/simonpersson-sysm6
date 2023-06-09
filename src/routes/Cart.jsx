import React, { useState, useEffect } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Load cart items from local storage on component mount
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, []);

  function deleteProduct(id) {
    // Remove the selected product from the cart
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  function decreaseQuantity(id) {
    // Decrease the quantity of the selected product in the cart
    updateCart(id, "subtract");
  }

  function increaseQuantity(id) {
    // Increase the quantity of the selected product in the cart
    updateCart(id, "add");
  }

  function updateCart(id, operator) {
    // Update the quantity and total price of the selected product in the cart
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        let quantity =
          operator === "add" ? item.quantity + 1 : item.quantity - 1;
        if (quantity < 1) {
          quantity = 1;
        }

        let price = item.price;
        if (operator === "add" && item.quantity > 0) {
          price *= 1;
        }
        return { ...item, quantity, totalprice: Math.floor(quantity * price) };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  function calculateTotalCartPrice() {
    // Calculate the total price of all items in the cart
    return cartItems.reduce((total, item) => total + item.totalprice, 0);
  }

  useEffect(() => {
    // Update the total price when the cart items change
    setTotalPrice(calculateTotalCartPrice());
  }, [cartItems]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="cart-container">
        {cartItems.map((item) => (
          <div className="card-cart" key={item.id}>
            <p>{item.name}</p>
            <span>|</span>
            <p>{item.price}$</p>
            <span>|</span>
            <em>{item.quantity}st</em>
            <span>|</span>
            <p>{item.totalprice}$</p>
            <button
              className="delete-btn"
              onClick={() => decreaseQuantity(item.id)}
            >
              -
            </button>
            <button
              className="add-btn"
              onClick={() => increaseQuantity(item.id)}
            >
              +
            </button>
            <HiOutlineTrash
              size={30}
              className="trash-can"
              onClick={() => deleteProduct(item.id)}
            />
          </div>
        ))}
        <div className="totalprice">
          <h2>TotalPrice: {totalPrice}$</h2>
        </div>
        <Link to="/checkout">
          <button className="btn-cart">Checkout</button>
        </Link>
      </div>
    </motion.div>
  );
}

export default Cart;
