import React, { useEffect } from "react";
import { useState } from "react";
import FavoritesItem from "../components/FavoritesItem";
import "../Favorites.css";

const Favorites = () => {
  const [favoriteItems, setFavoriteItems] = useState([]);
  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("favorite-items")) || [];
    setFavoriteItems(products);
  }, []);

  function removeFavoriteItems(index) {
    const newFavoriteItems = favoriteItems.filter((item, i) => i !== index);
    localStorage.setItem("favorite-items", JSON.stringify(newFavoriteItems));
    setFavoriteItems(newFavoriteItems);
  }
  return (
    <div className="favorites-page">
      <h1 className="favorites-title">Favorites Products</h1>
      {favoriteItems.length === 0 ? (
        <p>No favorite items found.</p>
      ) : (
        favoriteItems.map((item, index) => (
          <FavoritesItem
            key={index}
            src={item.img}  
            title={item.title}
            price={item.price}
            quantity={item.quantity}
            onRemove={() => removeFavoriteItems(index)}
          />
        ))
      )}
    </div>
  );
};
export default Favorites;
