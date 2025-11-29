import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Routes , Route } from "react-router-dom";
import NavBar from './components/NavBar.jsx';
import ProductsPage from './pages/ProductsPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/products' element={<ProductsPage/>}/>  
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
