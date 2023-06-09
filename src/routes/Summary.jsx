import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Summary() {
  const [randomTime, setRandomTime] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  // Retrieve cart items from localStorage on component mount
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
    localStorage.clear();
  }, []);

  // Generate a random delivery time on component mount
  useEffect(() => {
    deliveryTime();
  }, []);

  // Generate a random delivery time
  const deliveryTime = () => {
    const minMinutes = 1;
    const maxMinutes = 60;
    const randomMinutes = Math.floor(
      Math.random() * (maxMinutes - minMinutes + 1) + minMinutes
    );
    setRandomTime(randomMinutes);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="summary-container">
        <h2>Thank you for your order at Burger Hub</h2>
        {randomTime !== null && (
          <h2>Your order will arrive in {randomTime} min</h2>
        )}

        {cartItems.map((item) => (
          <div className="card-summary" key={item.id}>
            <p>~ {item.name}</p>
            <p>~ {item.quantity} pcs</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Summary;
