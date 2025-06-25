import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import emptyCart from "../Images/empty-cart.png";
import confirmImg from "../Images/confirm-order.jpg";
import teddyBear from "../Images/teddyBear.jpeg";
import blog1 from "../Images/blog1.jpeg";

function CartPage() {
  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart,
  } = useContext(CartContext);

  const [showForm, setShowForm] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", address: "", phone: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = parseFloat((subtotal * 0.1).toFixed(2));
  const grandTotal = subtotal + tax;

  const validate = () => {
    const errs = {};
    if (!formData.name || formData.name.trim().split(" ").length < 2) {
      errs.name = "Please enter your full name";
    }
    if (!formData.address.trim()) {
      errs.address = "Address is required";
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      errs.phone = "Enter a valid 10-digit phone number";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleOrder = (e) => {
    e.preventDefault();
    if (!validate()) return;

    toast.success("🎉 Order placed successfully!", {
      className: "chic-toast",
      bodyClassName: "chic-toast-body",
    });

    setOrderSubmitted(true);
    clearCart();
    setFormData({ name: "", address: "", phone: "" });
  };

  return (
    <div className="cart-page">
      {/* EMPTY CART */}
      {!showForm && !orderSubmitted && cartItems.length === 0 && (
        <div className="empty-cart">
          <img src={emptyCart} alt="Empty Cart" />
          <h3>Your cart is empty</h3>
          <p>Add something cool to get started!</p>
        </div>
      )}

      {/* CART LIST */}
      {!showForm && !orderSubmitted && cartItems.length > 0 && (
        <div className="cart-wrapper">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="item-info">
                    <img src={item.image} alt={item.title} />
                    <div>
                      <strong>{item.title}</strong>
                    </div>
                  </td>
                  <td>₹ {item.price.toFixed(2)}</td>
                  <td className="qty-control">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      disabled={item.quantity <= 1}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </td>
                  <td>₹ {(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* SUMMARY + IMAGE SIDE BY SIDE */}
          <div className="cart-summary-banner-wrapper">
            <div className="summary-image-container">
              <div className="summary-image">
                <img src={blog1} alt="Visual Summary" />
              </div>
              <div className="summary">
                <p><strong>Subtotal:</strong> ₹ {subtotal.toFixed(2)}</p>
                <p><strong>Sales Tax:</strong> ₹ {tax.toFixed(2)}</p>
                <p className="grand-total"><strong>Grand Total:</strong> ₹ {grandTotal.toFixed(2)}</p>
                <button className="checkout-btn" onClick={() => setShowForm(true)}>Check Out</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ORDER FORM */}
      {showForm && !orderSubmitted && (
        <div
          className="order-form-background"
          style={{ backgroundImage: `url(${confirmImg})` }}
        >
          <div className="order-form-section">
            <h2>Enter Delivery Details</h2>
            <form onSubmit={handleOrder}>
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              {errors.name && <p className="error">{errors.name}</p>}

              <input
                type="text"
                placeholder="Address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
              {errors.address && <p className="error">{errors.address}</p>}

              <input
                type="text"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              {errors.phone && <p className="error">{errors.phone}</p>}

              <button type="submit">Confirm Order</button>
              <button type="button" className="back-btn" onClick={() => setShowForm(false)}>Back to Cart</button>
            </form>
          </div>
        </div>
      )}

      {/* THANK YOU PAGE */}
      {orderSubmitted && (
        <div className="thank-you-wrapper">
          <img src={teddyBear} alt="teddy" className="teddy-left" />
          <div className="thank-you-section">
            <h2>Thank you for your order!</h2>
            <p>Your items will be shipped soon.</p>
            <button onClick={() => navigate("/products")}>Shop More</button>
          </div>
          <img src={teddyBear} alt="teddy" className="teddy-right" />
        </div>
      )}
    </div>
  );
}

export default CartPage;
