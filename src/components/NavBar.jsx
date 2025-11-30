import React from "react";
import { Link } from "react-router-dom";
import { Heart, Search, ShoppingCart } from "lucide-react";

const NavBar = () => {
  return (
    <nav>
      <div className="Nav-brand">
        <Link to="/">Eshop</Link>
      </div>
      <div className="nav-links">
        <Link className="nav-link" to="/products">
          New
        </Link>
        <Link className="nav-link" to="/">
          Men
        </Link>
        <Link className="nav-link" to="/">
          Women
        </Link>
        <Link className="nav-link" to="/">
          Sport
        </Link>
      </div>
      <div className="nav-buttons">
        <Link to="/cart">
          <ShoppingCart className="nav-icon" />
        </Link>
        <Link to="/favorites">
          <Heart className="nav-icon" />
        </Link>
        <Search className="nav-icon" />
        <button className="nav-login">login</button>
      </div>
    </nav>
  );
};

export default NavBar;
