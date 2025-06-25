import React, { useContext, useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import { CartContext } from "../contexts/CartContext";
import { toast } from "react-toastify";
import heart from "../Images/heart.jpeg"

function Products() {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const [searchParams] = useSearchParams();
  
  const query = searchParams.get("search") || "";
  const categoryFromQuery = searchParams.get("category") || "";

  const [searchTerm, setSearchTerm] = useState(query);
  const [highlightQuery, setHighlightQuery] = useState(query);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const productRefs = useRef({});

  const categories = ["men's clothing", "women's clothing", "jewelery"];

  // Set category if found in query
  useEffect(() => {
    if (categoryFromQuery && categories.includes(categoryFromQuery)) {
      setSelectedCategory(categoryFromQuery);
    }
  }, [categoryFromQuery]);

  // Highlight searched product on mount
  useEffect(() => {
    if (query) {
      const match = products.find((p) =>
        p.title.toLowerCase().includes(query.toLowerCase())
      );
      if (match && productRefs.current[match.id]) {
        productRefs.current[match.id].scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        setHighlightQuery(query);
      }
    }
  }, [products, query]);

  // Clear highlight on click outside
  useEffect(() => {
    const handleClick = () => setHighlightQuery("");
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  const filtered = products
    .filter((p) =>
      ["men's clothing", "women's clothing", "jewelery"].includes(p.category)
    )
    .filter((p) =>
      selectedCategory === "" ? true : p.category === selectedCategory
    )
    .filter((p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "asc") return a.price - b.price;
      if (sortOrder === "desc") return b.price - a.price;
      return 0;
    });

  return (
    <div className="products-page">
      
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for Products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="products-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <h3>Categories</h3>
          {categories.map((cat) => (
            <button
              key={cat}
              className={selectedCategory === cat ? "active" : ""}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}

          <h3>Sort By Price</h3>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </aside>

        {/* Product Grid */}
        <section className="product-grid">
          {filtered.map((product) => {
            const isHighlighted =
              highlightQuery &&
              product.title.toLowerCase().includes(highlightQuery.toLowerCase());

            return (
              <div
                className={`styled-product-card ${isHighlighted ? "highlighted" : ""}`}
                key={product.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProduct(product);
                }}
                ref={(el) => (productRefs.current[product.id] = el)}
              >
                <div className="product-img-wrapper">
                  <img src={product.image} alt={product.title} />
                  <button
                    className="hover-add-to-cart"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                      toast.success("🛒 Added to cart!", {
                        className: "chic-toast",
                        bodyClassName: "chic-toast-body"
                      });
                    }}
                  >
                    Add to Cart
                  </button>
                </div>

                <div className="product-info centered-text">
                  <h4>{product.title}</h4>
                  <p>₹ {product.price}</p>
                </div>
              </div>
            );
          })}
        </section>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProduct(null)}
        >
          <div className="product-modal" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="modal-img"
            />
            <div className="modal-content">
              <h2>{selectedProduct.title}</h2>
              <p>{selectedProduct.description}</p>
              <h3>₹ {selectedProduct.price}</h3>
              <button
                onClick={() => {
                  addToCart(selectedProduct);
                  toast.success("🛒 Added to cart!", {
                    className: "chic-toast",
                    bodyClassName: "chic-toast-body"
                  });
                }}
              >
                Add to Cart
              </button>
              <button onClick={() => setSelectedProduct(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;




