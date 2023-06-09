import React from "react";

const MenuCard = ({
  id,
  name,
  description,
  image,
  price,
  category,
  addToLocalStorage,
}) => {
  const imagePath = `/assets/${image}`;

  // Function to handle the "Add to cart" button click
  const handleAddToCart = () => {
    addToLocalStorage(id);
  };

  return (
    <div className="card">
      <img src={imagePath} alt="empty" className="card-img" />
      <div className="card-body">
        <h2 className="product-name">{name}</h2>
        <h2 className="product-description">{description}</h2>
        <p className="product-category">{category}</p>
        <p className="product-price">${price}</p>
        <button className="btn-addtocart" onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
