import React, { useEffect, useState } from "react";
import ShoppingCartItem from "../components/ShoppingCartItem";

const ShoppingCart = () => {
  const products = [
    {
      img: "https://www.jdsports.com.sg/cdn/shop/files/511342132_18067664321023187_2954913870394091478_n.jpg?v=1762486470&width=1080",
      title: "Nike Air",
      category: "Shoes",
      text: "Lightweight, stylish, cushioned sneakers.",
      price: 299,
      value: "Add to cart",
      type: "Running",
      color: "Red",
      size: "36",
      gender: "Male",
      other: "New arrivals",
      quantity: 1,
    },
    {
      img: "https://www.jdsports.com.sg/cdn/shop/files/511342132_18067664321023187_2954913870394091478_n.jpg?v=1762486470&width=1080",
      title: "Nike Air",
      category: "Shoes",
      text: "Lightweight, stylish, cushioned sneakers.",
      price: 299,
      value: "Add to cart",
      type: "Sports",
      color: "White",
      size: "36",
      gender: "Female",
      other: "Bestsellers",
      quantity: 2,
    },
  ];

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("cart-items")) || [];
    setCartItems(products);
  }, []);

  function removeItems(index) {
    const newCartItems = cartItems.filter((item, i) => i !== index);
    localStorage.setItem("cart-items", JSON.stringify(newCartItems));

    setCartItems(newCartItems);
  }
  return (
    <div className="shopping-cart-page">
      <h1 className="shopping-cart-title">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        cartItems.map((item, index) => (
          <ShoppingCartItem
            key={index}
            src={item.img}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
            onRemove={() => removeItems(index)}
          />
        ))
      )}
    </div>
  );
};

export default ShoppingCart;
