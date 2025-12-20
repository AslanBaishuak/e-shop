import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from "./components/NavBar";

import { Link } from 'react-router-dom'
import Products from './pages/Products.jsx'
import ShoppingCart from './pages/ShoppingCart.jsx'
import Favorites from './pages/Favorites.jsx'
import AddProduct from './pages/AddProduct.jsx'
import ProductPage from './pages/ProductPage.jsx'

import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
