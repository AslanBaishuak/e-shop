import React, {useState, useEffect} from 'react';
import ShoppingCartItem from '../components/ShoppingCartItem';


const ShoppingCart = () => {

    const products = [
    {
      src: "https://www.jdsports.com.sg/cdn/shop/files/511342132_18067664321023187_2954913870394091478_n.jpg?v=1762486470&width=1080",
      title: "Nike Air Red Running",
      category: "Shoes",
      definition: "Lightweight, stylish, cushioned sneakers.",
      price: 299,
      value: "Add to cart",
      type: "Running",
      color: "Red",
      size: "36",
      gender: "Men",
      others: "New Arrivals",
      quantity: 1
    },
    {
      src: "https://www.jdsports.com.sg/cdn/shop/files/511342132_18067664321023187_2954913870394091478_n.jpg?v=1762486470&width=1080",
      title: "Nike Air Blue Casual",
      category: "Shoes",
      definition: "Everyday casual sneakers.",
      price: 259,
      value: "Add to cart",
      type: "Casual",
      color: "Blue",
      size: "37",
      gender: "Kids",
      others: "Best Sellers",
      quantity: 2
    }];

  

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const products = JSON.parse(localStorage.getItem("cart-items")) || [];
        setCartItems(products)
    }, [])

    function removeItem(index) {
        const newCartItems = cartItems.filter((item, i) => i !== index);
        
        localStorage.setItem("cart-items", JSON.stringify(newCartItems));

        setCartItems(newCartItems);
    }

    return (
        <div className="shopping-cart-page">
            <h1 className="shopping-cart-title">Shopping cart</h1>
            {cartItems.map((item, index) => (
                <ShoppingCartItem
                    src={item.src}
                    title={item.title}
                    price={item.price}
                    quantity={item.quantity}
                    key={index}
                    onRemove={() => removeItem(index)}
                />
            ))}
        </div>
    )
}

export default ShoppingCart;