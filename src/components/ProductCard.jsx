import { Heart } from "lucide-react";
import React from "react";

const ProductCard = ({
  src,
  title,
  category,
  text,
  price,
  value,
  type,
  color,
  size,
  gender,
  other,
  onAdd,
  onFavorite,
}) => {
  const colors = [
    {
      name: "Red",
      code: "red",
    },
    {
      name: "Blue",
      code: "blue",
    },
    {
      name: "Green",
      code: "green",
    },
    {
      name: "Black",
      code: "black",
    },
    {
      name: "White",
      code: "white",
    },
  ];
  return (
    <>
      <div className="product-item">
        <img src={src} className="product-image" alt={title} />
        <div className="product-body">
          <h1 className="product-title">{title}</h1>
          <p className="product-category">{category} </p>
          <p className="product-text">{text}</p>
          <span className="product-text">
            <span
              className="product-color"
              style={{
                backgroundColor: colors.find((c) => c.name === color)?.code,
              }}
            ></span>
            {size}
          </span>
        </div>
        <div className="product-footer">
          <span className="product-price">{price}$</span>
          <button onClick={onFavorite} className="favorite-button">
            <Heart className="favorite-icon" />
          </button>
          <button className="add-to-card-button" onClick={onAdd}>
            {value}
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
