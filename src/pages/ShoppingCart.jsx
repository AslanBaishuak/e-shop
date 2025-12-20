import React, {useState, useEffect} from 'react';
import ShoppingCartItem from '../components/ShoppingCartItem';
import { ToastContainer, toast } from 'react-toastify';
import {getCart, updateToCart, removeFromCart} from "../services/cartService";


const ShoppingCart = () => {
    const notify = () => toast("Wow so easy!");
    const [cartItems, setCartItems] = useState([]);

    async function fetchCart() {
        const response = await getCart();
        setCartItems(response.data)
    }

    useEffect(() => {
      fetchCart();
    }, [])

    async function removeItem(index) {
        const newCartItems = cartItems.find((item, i) => i === index);
        
        await removeFromCart(newCartItems.id);
        const response = await getCart();
        setCartItems(response.data)
    }

    async function changeQuantity(index, newQuantity) {

        const item = cartItems[index];    

        setCartItems(cartItems.map((item, i) => {
            if (i === index) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        }));

       await updateToCart(item.id, newQuantity);
    }

    return (
        <div className="shopping-cart-page">
            <h1 className="shopping-cart-title">Shopping cart</h1>
             <button onClick={notify}>Notify!</button>
            {cartItems.map((item, index) => (
                <ShoppingCartItem
                    src={item.src}
                    title={item.name}
                    price={item.price}
                    quantity={item.cart_quantity}
                    key={index}
                    onRemove={() => removeItem(index)}
                    onChangeQuantity={(newQuantity) => (
                        changeQuantity(index, newQuantity)
                    )}
                />
            ))}
            <ToastContainer />
        </div>
    )
}

export default ShoppingCart;