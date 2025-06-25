import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";

function Navbar() {
  const { cartItems } = useContext(CartContext);
  const { products } = useContext(ProductContext);

  const [showSearch, setShowSearch] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [showPagesDropdown, setShowPagesDropdown] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);


  const navigate = useNavigate();

  const filteredResults = products.filter(
    (p) =>
      ["men's clothing", "women's clothing", "jewelery"].includes(
        p.category.toLowerCase()
      ) &&
      p.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/" onClick={() => setShowMenu(false)}>SHOPCART</Link>
        </div>

        <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
          ☰
        </div>

        <ul className={`nav_links ${showMenu ? "open" : ""}`}>
          <li>
            <NavLink to="/" onClick={() => setShowMenu(false)}>HOME</NavLink>
          </li>
          <li>
            <NavLink to="/products" onClick={() => setShowMenu(false)}>PRODUCTS</NavLink>
          </li>

          {/* Dropdown */}
          <li className="dropdown" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
  <span className="dropdown-toggle">PAGES ▾</span>
  <ul className={`dropdown-menu ${showDropdown ? "open" : ""}`}>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/products">Products</NavLink></li>
    <li><NavLink to="/blog">Blog</NavLink></li>
    <li><NavLink to="/cart">Cart</NavLink></li>
  </ul>
</li>


          <li>
            <NavLink to="/blog" onClick={() => setShowMenu(false)}>BLOG</NavLink>
          </li>
          <li>
            <NavLink to="/cart" onClick={() => setShowMenu(false)}>
              CART ({cartItems.length})
            </NavLink>
          </li>
          <li>
            <button
              className="search_btn"
              onClick={() => {
                setShowSearch(true);
                setShowMenu(false);
              }}
              aria-label="Search"
            >
              <img
                src="https://img.icons8.com/metro/26/search.png"
                alt="search"
                width="20"
                height="20"
              />
            </button>
          </li>
        </ul>
      </nav>

      {/* Search Overlay */}
      {showSearch && (
        <div className="search-overlay">
          <div className="search-box">
            <button className="close-search" onClick={() => setShowSearch(false)}>
              &times;
            </button>

            <input
              type="text"
              placeholder="Search products"
              autoFocus
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && filteredResults.length > 0) {
                  navigate(`/products?search=${encodeURIComponent(searchInput)}`);
                  setShowSearch(false);
                }
              }}
            />

            <div className="browse-categories">
              <h4>BROWSE CATEGORIES</h4>
              <div className="category-links">
                <Link to={`/products?category=men's clothing`} onClick={() => setShowSearch(false)}>Men's</Link>
                <span> / </span>
                <Link to={`/products?category=women's clothing`} onClick={() => setShowSearch(false)}>Women's</Link>
                <span> / </span>
                <Link to={`/products?category=jewelery`} onClick={() => setShowSearch(false)}>Jewelry</Link>
              </div>
            </div>

            {searchInput && (
              <div className="search-results">
                {filteredResults.length > 0 ? (
                  filteredResults.map((item) => (
                    <Link
                      to={`/products?search=${encodeURIComponent(item.title)}`}
                      key={item.id}
                      onClick={() => setShowSearch(false)}
                    >
                      <p>{item.title}</p>
                    </Link>
                  ))
                ) : (
                  <p>No results found.</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;




