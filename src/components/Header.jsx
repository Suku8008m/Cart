import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Header = ({
  navigateTo,
  searchTerm,
  setSearchTerm,
  category,
  setCategory,
  categories,
}) => {
  const { getCartCount } = useContext(CartContext);

  return (
    <header className="header">
      <div className="header-brand" onClick={() => navigateTo("home")}>
        <span className="logo">CartZone</span>
      </div>

      <div className="header-search">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="search-category"
        >
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button className="search-btn">🔍</button>
      </div>

      <div className="header-nav" onClick={() => navigateTo("cart")}>
        <div className="nav-item">
          <span className="nav-line-1">Returns</span>
          <span className="nav-line-2">& Orders</span>
        </div>
        <div className="cart-item">
          <span className="cart-count">{getCartCount()}</span>
          <span className="cart-label">🛒 Cart</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
