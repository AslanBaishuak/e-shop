import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({id,src,title,category,definition,price,value, favorite ,type,color,size,gender,others, onAdd, onAddToFavorite, onDelete}) => {

    const colors = [
        { name: "Red", code: "red" },
        { name: "Blue", code: "blue" },
        { name: "Green", code: "green" },
        { name: "Black", code: "black" },
        { name: "White", code: "white" },
    ]

    return(
        <>
            <div className="product-item">
                <img src={src} className="product-image"/>
                <Link to={"/product/" + id}><h1 className="product-title">{title}</h1></Link>
                <p className="product-category">{category} {type}</p>
                <p className="product-definition">{definition}</p>
                <span className="product-definition">
                <span className="product-color" style={{backgroundColor: colors.find( (c) => c.name === color )?.code}}></span>
                     {size} / {gender} / {others}
               </span>
                <div className="product-footer">
                    <span className="product-price">{price} $</span>
                    <button className="add-to-card-button pink" onClick={onAddToFavorite}>{favorite}</button>
                    <button className="add-to-card-button" onClick={onAdd}>{value}</button>
                </div>
                <button className="delete-product" onClick={onDelete}>Удалить</button>
            </div>
        </>
    );
}

export default ProductCard;