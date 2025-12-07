import React from 'react';

const FavoriteItem = ({src,title,category,definition,price,value,type,color,size,gender,others, quantity, onRemove, onAdd}) => {

    const colors = [
        { name: "Red", code: "red" },
        { name: "Blue", code: "blue" },
        { name: "Green", code: "green" },
        { name: "Black", code: "black" },
        { name: "White", code: "white" },
    ]   

    return (
        <div className="favorite-item">
            <img src={src} className="favorite-item-image"/>
            <div className="favorite-item-details">
                <h2 className="favorite-item-title">{title}</h2>
                <p className="favorite-item-category">{category} {type}</p>
                <p className="favorite-item-definition">{definition}</p>
                <span className="favorite-item-info">
                    Color <span className="favorite-item-color" style={{backgroundColor: colors.find(c => c.name=== color)?.code}}></span>

                    <span className="favorite-subitem">
                        Size: {size}
                    </span>

                    <span className="favorite-subitem">
                        Gender: {gender}
                    </span>

                    <span className="favorite-subitem">
                        Collection (other): {others}
                    </span>
                </span>
                <div className="favorite-item-footer">
                    <span className="favorite-item-price">Price: {price} $</span>
                    <br />
                    <div className="favorite-footer-buttons">
                        <button className="add-to-cart-favorite-button" onClick={onAdd}>Add to cart</button>
                        <button className="remove-favorite-button" onClick={onRemove}>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
}   

export default FavoriteItem;