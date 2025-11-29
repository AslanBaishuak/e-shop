import React from "react";

const ProductCard = ({src, title, category, text, price, value, type , color , size , gender, other}) => {
    return (
        <>
            <div className="product-item">
                <img src={src} className="product-image" alt={title}/>
                <div className="product-body">
                    <h1 className="product-title">{title}</h1>
                    <p className="product-category">{category} </p>
                    <p className="product-text">{text}</p>
                    <span className="product-text">{color} / {size}</span>
                </div>
                <div className="product-footer">
                    <span className="product-price">{price}$</span>
                    <button className="add-to-card-button">{value}</button>
                </div>
            </div>
        </>
    );
}

export default ProductCard;