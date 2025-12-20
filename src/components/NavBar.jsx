import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Search } from 'lucide-react'; // icons

const NavBar = () => {

    return (
        <nav>
            <div className="nav-brand">
                <Link to="/">Eshop</Link>
            </div>
            <div className="nav-links">
                <Link className="nav-link" to="/products">New</Link>
                <Link className="nav-link" to="/products">Men</Link>
                <Link className="nav-link" to="/products">Women</Link>
                <Link className="nav-link" to="/products">Sport</Link>
                <Link className="nav-link" to="/add-product">Add product</Link>
            </div>
            <div className="nav-buttons">
                <Link to="/cart"><ShoppingCart className="nav-icon" /></Link>
                <Link to="/favorites"><Heart className="nav-icon" /></Link>
                <Search className="nav-icon" />
                <Link to="/login" className='nav-login' > Login</Link>
                <Link to="/register" className='nav-login' >Register</Link>
            </div>
        </nav>
    )
}

export default NavBar;