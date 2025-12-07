import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from "./components/NavBar";

import { Link } from 'react-router-dom'
import Products from './pages/Products.jsx'
import ShoppingCart from './pages/ShoppingCart.jsx'
import FavoriteProducts from './pages/FavoriteProducts.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/favorites" element={<FavoriteProducts />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
