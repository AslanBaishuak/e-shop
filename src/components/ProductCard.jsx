import React from "react";

const ProductCard = ({
  src,
  title,
  category,
  definition,
  price,
  value,
  favorite,
  type,
  color,
  size,
  gender,
  others,
  onAdd,
  onAddToFavorite,
  onDelete,
}) => {
  const colors = [
    { name: "Red", code: "red" },
    { name: "Blue", code: "blue" },
    { name: "Green", code: "green" },
    { name: "Black", code: "black" },
    { name: "White", code: "white" },
  ];

  return (
    <>
      <div className="product-item">
        <img src={src} className="product-image" />
        <h1 className="product-title">{title}</h1>
        <p className="product-category">
          {category} {type}
        </p>
        <p className="product-definition">{definition}</p>
        <span className="product-definition">
          <span
            className="product-color"
            style={{
              backgroundColor: colors.find((c) => c.name === color)?.code,
            }}
          ></span>
          {size} / {gender} / {others}
        </span>
        <div className="product-footer">
          <span className="product-price">{price}$</span>
          <button className="add-to-card-button pink" onClick={onAddToFavorite}>
            {favorite}
          </button>
          <button className="add-to-card-button" onClick={onAdd}>
            {value}
          </button>
   
        </div>
        <button className="delete-product" onClick={onDelete}>
            {" "}
            Delete{" "}
        </button>
      </div>
    </>
  );
};

export default ProductCard;
