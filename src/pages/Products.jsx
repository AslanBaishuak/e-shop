// Products.jsx
import React, { useState } from "react";
import ProductCard from "../components/ProductCard.jsx";
import FilterSidebar from "../components/FilterSidebar.jsx";
import SearchForm from "../components/SearchForm.jsx";
import { Heart } from "lucide-react";

const Products = () => {
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
      quantity: 1
    },
    {
      src: "https://www.jdsports.com.sg/cdn/shop/files/511342132_18067664321023187_2954913870394091478_n.jpg?v=1762486470&width=1080",
      title: "Nike Air Black Formal",
      category: "Shoes",
      definition: "Elegant sneakers for formal look.",
      price: 320,
      value: "Add to cart",
      type: "Formal",
      color: "Black",
      size: "42",
      gender: "Men",
      others: "Discounted",
      quantity: 1
    },
    {
      src: "https://www.jdsports.com.sg/cdn/shop/files/511342132_18067664321023187_2954913870394091478_n.jpg?v=1762486470&width=1080",
      title: "Nike Air White Sports",
      category: "Shoes",
      definition: "Perfect for sport activities.",
      price: 280,
      value: "Add to cart",
      type: "Sports",
      color: "White",
      size: "41",
      gender: "Women",
      others: "Seasonal",
      quantity: 1
    },
  ];

  const [filters, setFilters] = useState({
    types: [],
    colors: [],
    sizes: [],
    gender: [],
    others: []
  });

  const [searchValue, setSearchValue] = useState("");

  function onFilterHandler (filtersValue) {
    setFilters(filtersValue);
  }

  function onSearchHandler (searchValue) {
    setSearchValue(searchValue);
    console.log(searchValue)
  }

  const filteredProducts = products.filter((product) => {

    const search = searchValue.trim().toLowerCase();
    const matchesSearch = search === "" || product.title.toLowerCase().includes(search);

    if (!matchesSearch) return false;

    const matchType = filters.types.length === 0 || filters.types.includes(product.type);
    const matchColor = filters.colors.length === 0 || filters.colors.includes(product.color);
    const matchSize = filters.sizes.length === 0 || filters.sizes.includes(product.size);
    const matchGender = filters.gender.length === 0 || filters.gender.includes(product.gender);
    const matchOthers = filters.others.length === 0 || filters.others.includes(product.others);

    return matchType && matchColor && matchSize && matchGender && matchOthers;
  })

  function addToCart(index) {
    const product = filteredProducts.find((el, i) => i === index);
    
    const products = JSON.parse(localStorage.getItem("cart-items")) || [];
    products.push(product);

    localStorage.setItem("cart-items", JSON.stringify(products));
  }

  function addToFavorite(index) {
    const product = filteredProducts.find((el, i) => i === index);
    const favorites = JSON.parse(localStorage.getItem("favorite-items")) || [];
    favorites.push(product);

    localStorage.setItem("favorite-items", JSON.stringify(favorites));
  }

  
  return (
    <div className="products-page">
      <h1>Products Page</h1>
        <SearchForm onSearchHandler={onSearchHandler}  />

      <div className="products-content">

        <FilterSidebar onFilterHandler={onFilterHandler} />
        <div className="products-grid">
            {filteredProducts.map((product, index) => (
                <ProductCard
                    key={index}
                    src={product.src}
                    title={product.title}
                    category={product.category}
                    definition={product.definition}
                    price={product.price}
                    value={product.value}
                    favorite={<Heart />}
                    type={product.type}
                    color={product.color}
                    size={product.size}
                    gender={product.gender}
                    others={product.others}
                    onAdd={() => addToCart(index)}
                    onAddToFavorite={() => addToFavorite(index)}
                />
            ))}
        </div>

      </div>

       
    </div>
  );
};

export default Products;
