import React, {useState} from 'react';
import FavoriteItem from '../components/FavoriteItem.jsx';

const FavoriteProducts = () => {

    const favoriteProductsdata = [
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
        }
    ];

    const [favoriteProducts, setFavoriteProducts] = useState(favoriteProductsdata);

    React.useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorite-items")) || [];
        setFavoriteProducts(storedFavorites);
    }, []);

    function addToCart(index) {
        const product = favoriteProducts.find((el, i) => i === index);
        const cartItems = JSON.parse(localStorage.getItem("cart-items")) || [];
        cartItems.push(product);
        localStorage.setItem("cart-items", JSON.stringify(cartItems));
    }

    return (
        <div className="favorite-products-page">
            <h1 className="favorite-products-title">Favorite Products</h1>
            {favoriteProducts.map((item, index) => (
                <FavoriteItem
                    src={item.src}
                    title={item.title}
                    category={item.category}
                    definition={item.definition}
                    price={item.price}
                    value={item.value}
                    type={item.type}
                    color={item.color}
                    size={item.size}
                    gender={item.gender}
                    others={item.others}
                    quantity={item.quantity}
                    onAdd={() => addToCart(index)}
                    onRemove={() => {
                        const updatedFavorites = favoriteProducts.filter((_, i) => i !== index);
                        setFavoriteProducts(updatedFavorites);
                    }}
                />
            ))
        }
        </div>
    );
}   

export default FavoriteProducts;