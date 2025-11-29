import { useState } from "react";
import React from "react";
import ProductCard from "../components/ProductCard";
import FilterSideBar from "../components/Filtersidebar";
import SearchForm from "../components/SearchForm";

const ProductsPage = () => {
    const [products, setProducts] = useState([
        {
            img: "https://www.jdsports.com.sg/cdn/shop/files/511342132_18067664321023187_2954913870394091478_n.jpg?v=1762486470&width=1080",
            title: "Nike Air",
            category: "Shoes",
            text: "Lightweight, stylish, cushioned sneakers.",
            price: "299",
            value:"Add to cart",
            type:"Running",
            color:"Red",
            size: "36",
            gender: "Male",
            other: "New arrivals"
        },
             {
            img: "https://www.jdsports.com.sg/cdn/shop/files/511342132_18067664321023187_2954913870394091478_n.jpg?v=1762486470&width=1080",
            title: "Nike Air",
            category: "Shoes",
            text: "Lightweight, stylish, cushioned sneakers.",
            price: "299",
            value:"Add to cart",
            type:"Sports",
            color:"White",
            size: "36",
            gender: "Female",
            other: "Bestsellers"
        },
             {
            img: "https://www.jdsports.com.sg/cdn/shop/files/511342132_18067664321023187_2954913870394091478_n.jpg?v=1762486470&width=1080",
            title: "Nike Air",
            category: "Shoes",
            text: "Lightweight, stylish, cushioned sneakers.",
            price: "299",
            value:"Add to cart",
            type:"Formal",
            color:"Black",
            size: "41",
            gender: "Male",
            other: "Seasonal"
        },
             {
            img: "https://www.jdsports.com.sg/cdn/shop/files/511342132_18067664321023187_2954913870394091478_n.jpg?v=1762486470&width=1080",
            title: "Nike Air",
            category: "Shoes",
            text: "Lightweight, stylish, cushioned sneakers.",
            price: "299",
            value:"Add to cart",
            type:"Sports",
            color:"Blue",
            size: "40",
            gender: "Male",
            other: "Seasonal"
        },
             {
            img: "https://www.jdsports.com.sg/cdn/shop/files/511342132_18067664321023187_2954913870394091478_n.jpg?v=1762486470&width=1080",
            title: "Nike Air",
            category: "Shoes",
            text: "Lightweight, stylish, cushioned sneakers.",
            price: "299",
            value:"Add to cart",
            type:"Formal",
            color:"Red",
            size: "37",
            gender: "Female",
            other: "Bestsellers"
        },
             {
            img: "https://www.jdsports.com.sg/cdn/shop/files/511342132_18067664321023187_2954913870394091478_n.jpg?v=1762486470&width=1080",
            title: "Nike Air",
            category: "Shoes",
            text: "Lightweight, stylish, cushioned sneakers.",
            price: "299",
            value:"Add to cart",
            type:"Casual",
            color:"Blue",
            size: "39",
            gender: "Female",
            other: "New arrivals"
        },
    ]);

    const [filters,setFilters] = useState({
        types:[],
        colors:[],
        sizes:[],
        genders:[],
        others:[]
    })
    const [searchValue, setSearchValue] = useState("");
    function onFilterHandler (filtersValue) {
        setFilters(filtersValue);
    };

    function onSearchHandler(searchValue) { 
        setSearchValue(searchValue);
    };

    const filteredProducts = products.filter((product) => {

        const search = searchValue.trim().toLowerCase();

        const matchesSearch = search === "" || product.title.toLowerCase().includes(search);

        if (!matchesSearch) return false;

        const matchType = filters.types.length === 0 || filters.types.includes(product.type);
        const matchColor = filters.colors.length === 0 || filters.colors.includes(product.color);
        const matchSize = filters.sizes.length === 0 || filters.sizes.includes(product.size);
        const matchGender = filters.genders.length === 0 || filters.genders.includes(product.gender);
        const matchOthers = filters.others.length === 0 || filters.others.includes(product.other);  

        return matchType && matchColor && matchSize && matchGender && matchOthers;    
    })
    return(
        <div className="products-page">
            <h1 className="products-title">Products Page</h1>
            <div className="products-content">
                <FilterSideBar onFilterHandler={onFilterHandler}/>
                <SearchForm onSearchHandler={onSearchHandler}/>
                <div className="products-grid">
                    {filteredProducts.map((product,index) => (
                        <ProductCard 
                        key={index}
                        src={product.img}
                        title={product.title}
                        category={product.category}
                        text={product.text}
                        price={product.price}
                        value={product.value}
                        type={product.type}
                        color={product.color}
                        size={product.size}
                        gender={product.gender}
                        other={product.other}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
}

export default ProductsPage;