import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="home-container">
        <div className="text-container">
          <h2 className="title">
            Welcome to BurgerHub: Revolutionizing Burger Delivery!
          </h2>
          <p className="description">
            At BurgerHub, we're redefining convenience and flavor. Experience a
            new era of burger delivery where your cravings are met with
            extraordinary taste and efficiency. Picture a world where the most
            delectable burgers are just a few clicks away, swiftly delivered to
            your doorstep by our state-of-the-art fleet of delivery partners.
          </p>
          <div className="btn-container">
            <Link to="/menu">
              <button className="btn-menu">Explore Our Menu</button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Home;
