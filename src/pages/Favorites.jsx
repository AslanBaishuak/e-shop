import React, { useEffect } from "react";
import { useState } from "react";
import FavoritesItem from "../components/FavoritesItem";
import "./Favorites.css";
import {getFavorite,deleteFavorites,} from "../services/favoritesService";


const Favorites = () => {
  const [favoriteItems, setFavoriteItems] = useState([]);
  async function fetchFavorite() {
    const response = await getFavorite();
    setFavoriteItems(response.data);
  }
  useEffect( () =>{
    fetchFavorite()
  },[]);

  async function removeFavoriteItems(index) {
    const newFavoriteItems  = favoriteItems.find((item,i) => i===index);

    await deleteFavorites(newFavoriteItems.id);
    const response = await getFavorite();
    setFavoriteItems(response.data);
  }



  return (
    <div className="favorites-page">
      <h1 className="favorites-title">Favorites Products</h1>
      {favoriteItems.length === 0 ? (
        <p>No favorite items found.</p>
      ) : (
        favoriteItems.map((item, index) => (
          <FavoritesItem
            key={item.id}
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
