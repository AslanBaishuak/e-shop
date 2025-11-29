import { useState } from 'react'
import ProductCard from './components/ProductCard'
import './App.css'

function App() {
  
  return (
    <>
     <div>
      <ProductCard 
        src="https://www.jdsports.com.sg/cdn/shop/files/511342132_18067664321023187_2954913870394091478_n.jpg?v=1762486470&width=1080" 
        title="Nike Air" 
        category="Shoes" 
        text="Lightweight, stylish, cushioned sneakers." 
        price="299" 
        value="Add to cart"/>
     </div>
    </>
  )
}

export default App
