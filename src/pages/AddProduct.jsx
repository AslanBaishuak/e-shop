import React, { useState } from "react";
import {createProduct} from "../services/productService";

const AddProduct =() => {

    const [title,setTitle]=useState("");
    const [img,setImg]=useState("");
    const [price,setPrice]=useState(0);
    const [category,setCategory]=useState("");
    const [gender,setGender]=useState("");
    const [color,setColor]=useState("");
    const [size,setSize]=useState("");
    const [description,setDescription]=useState("");

    function handleSubmit (event) {
        event.preventDefault();
        

        const newProduct = {
            id: Date.now().toString(),
            title,
            src: img,
            price,
            category,
            gender, 
            color,
            definition: description,
        }

        const products = JSON.parse(localStorage.getItem("products")) || [];
        products.push(newProduct);
        localStorage.setItem("products",JSON.stringify(products))

        createProduct(newProduct).then((response) => console.log(response))

    }

    return (
        <div className="add-product-page page">
            <h1>Add Products</h1>
            <form className="add-product-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Product Image</label>
                    <input type="text" className="form-input" value={img} onChange={(e) => setImg(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label className="form-label">Product name</label>
                    <input type="text" className="form-input" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label className="form-label">Product price</label>
                    <input type="number" className="form-input" value={price} onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label className="form-label">Product category</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} className="form-input">
                        <option value="">Select a category</option>
                        <option value="running">Running</option>
                        <option value="casual">Casual</option>
                        <option value="formal">Formal</option>
                        <option value="sports">Sports</option>
                    </select>
                </div> 
                <div className="form-group">
                    <label className="form-label">Product gender</label>
                    <select value={gender} onChange={(e) => setGender(e.target.value)} className="form-input">
                        <option value="">Select a gender</option>
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                        <option value="kids">Kids</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="form-label">Product colors</label>
                    <select value={color} onChange={(e) => setColor(e.target.value)} className="form-input">
                        <option value="">Select a colors</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="black">Black</option>
                        <option value="white">White</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="form-label">Product sizes</label>
                    <select value={size} onChange={(e) => setSize(e.target.value)} className="form-input">
                        <option value="">Select a size</option>
                        <option value="36">36</option>
                        <option value="39">39</option>
                        <option value="40">40</option>
                        <option value="42">42</option>         
                    </select>
                </div>
                <div className="form-group">
                    <label className="form-label">Product description</label>
                    <input type="text" className="form-input" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <button type="submit" className="form-button">Add a product</button>
            </form>
        </div>
    );
};

export default AddProduct;