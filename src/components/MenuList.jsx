import React, { useEffect, useState } from "react";
import MenuCard from "./MenuCard";
import { motion, useScroll } from "framer-motion";

function MenuList() {
  const [menu, setMenu] = useState([]);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    // Fetch menu data from the server
    const fetchMenu = async () => {
      try {
        const response = await fetch("http://localhost:7000/menu");
        const data = await response.json();
        setMenu(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMenu();
  }, []);

  const addToLocalStorage = (id) => {
    const itemMenu = menu.find((item) => item.id === id);

    if (itemMenu) {
      const item = {
        id: itemMenu.id,
        name: itemMenu.name,
        price: itemMenu.price,
        image: itemMenu.image,
        description: itemMenu.description,
        quantity: 1,
        totalprice: itemMenu.price,
      };

      // Get the cart items from local storage or create an empty array if not present
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      // Find the index of the item in the cart
      const index = cart.findIndex((item) => item.id === id);

      if (index !== -1) {
        // If the item is already in the cart, increase the quantity and update the total price
        cart[index].quantity++;
        cart[index].totalprice = cart[index].quantity * cart[index].price;
      } else {
        // If the item is not in the cart, add it
        cart.push(item);
      }

      // Update the quantity of the item in the menu state
      const updateCart = menu.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );

      setMenu(updateCart);

      // Save the updated cart in local storage
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div>
        <div className="items-container">
          {menu.map((item, index) => (
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: index * 0.3,
                ease: [0.6, -0.05, 0.01, 0.99],
              }}
              key={index}
            >
              <MenuCard
                key={item.id}
                id={item.id}
                name={item.name}
                description={item.description}
                image={item.image}
                price={item.price}
                addToLocalStorage={addToLocalStorage}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MenuList;
