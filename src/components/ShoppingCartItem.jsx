import React from "react";
import {Trash} from "lucide-react";

const ShoppingCartItem = ({ src, title, price, quantity, onRemove, onChangeQuantity }) => {


    return (
        <div className="shopping-cart-item">
            <div className="shopping-cart-details">
                <img src={src} className="shopping-cart-image" />
                <div>
                    <h2 className="shopping-cart-title">{title}</h2>
                    <span className="shopping-cart-price">{price}</span>
                    <span className="shopping-cart-quantity">
                        <button onClick={() => onChangeQuantity(quantity - 1)}>-</button>
                        Quantity: {quantity}
                        <button onClick={() => onChangeQuantity(quantity + 1)}>+</button>
                    </span>
                </div>
            </div>
            <div className="shopping-cart-controll">
                <p>Total: {price * quantity}</p>
                <button className="remove-button" onClick={onRemove}><Trash /></button>
            </div>
        </div>
    )
}

export default ShoppingCartItem;