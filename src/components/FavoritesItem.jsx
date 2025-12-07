import React from "react";
import { Trash } from "lucide-react";

const FavoritesItem = ({ src, title, price, quantity, onRemove }) => {
  return (
    <div className="favorites-item">
        <img src={src} alt={title} className="favorites-item-image" />
        <div className="favorites-item-details">
                    
        <h2 className="favorites-item-title">{title}</h2>
        <p className="favorites-item-price">{price}</p>
        <p className="favorites-item-quantity">Quantity: {quantity}</p>
                    
            <div className="favorites-item-actions">
                <p className="favorites-item-total">price: {price}</p> 
                <button className="favorites-item-remove-button" onClick={onRemove}>
                    <Trash />
                </button> 
            </div>
        </div>
    </div>
  );
}

export default FavoritesItem;