import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';

const CartPage = () => {
  const { cart, getCartTotal, getCartCount, emptyCart } = useContext(CartContext);
  const [showBill, setShowBill] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const navigate = useNavigate();

  const handleCheckout = () => {
    const orderId = 'ORD-' + Math.floor(Math.random() * 1000000);
    const date = new Date().toLocaleString();
    const subtotal = parseFloat(getCartTotal());
    const tax = subtotal * 0.08;
    const shipping = subtotal > 50 ? 0 : 5.99;
    const total = subtotal + tax + shipping;

    setOrderDetails({
      orderId,
      date,
      subtotal,
      tax,
      shipping,
      total,
      items: [...cart]
    });
    
    setShowBill(true);
  };

  const handleCloseBill = () => {
    setShowBill(false);
    emptyCart();
    navigate('/');
  };

  const handlePrint = () => {
    window.print();
  };

  if (cart.length === 0) {
    return (
      <div className="cart-page empty">
        <div className="cart-empty-message">
          <h2>Your AmazonCore Cart is empty.</h2>
          <p>Check your Saved for later items below or continue shopping.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-main">
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <span className="cart-price-header">Price</span>
        </div>
        <div className="cart-items-list">
          {cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="cart-subtotal-footer">
          <button className="empty-cart-btn" onClick={emptyCart}>Empty Cart</button>
          <h3>Subtotal ({getCartCount()} items): <strong>${getCartTotal()}</strong></h3>
        </div>
      </div>
      
      <div className="cart-sidebar">
        <div className="checkout-card">
          <div className="subtotal-info">
            <p>Subtotal ({getCartCount()} items):</p>
            <p className="checkout-price"><strong>${getCartTotal()}</strong></p>
          </div>
          <button className="btn-checkout" onClick={handleCheckout}>Proceed to checkout</button>
        </div>
      </div>
      
      {showBill && orderDetails && (
        <div className="bill-modal-overlay">
          <div className="bill-modal-content">
            <div className="bill-header">
              <div className="bill-logo">AmazonCore Receipt</div>
              <p>Thank you for your purchase!</p>
            </div>
            
            <div className="bill-details">
              <div>
                <strong>Order ID:</strong> {orderDetails.orderId}<br/>
                <strong>Date:</strong> {orderDetails.date}
              </div>
              <div style={{ textAlign: 'right' }}>
                <strong>Billed To:</strong><br/>
                Guest Customer
              </div>
            </div>

            <table className="bill-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th className="qty">Qty</th>
                  <th className="price">Price</th>
                </tr>
              </thead>
              <tbody>
                {orderDetails.items.map(item => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td className="qty">{item.quantity}</td>
                    <td className="price">${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="bill-summary">
              <div className="bill-summary-row">
                <span>Subtotal:</span>
                <span>${orderDetails.subtotal.toFixed(2)}</span>
              </div>
              <div className="bill-summary-row">
                <span>Estimated Tax (8%):</span>
                <span>${orderDetails.tax.toFixed(2)}</span>
              </div>
              <div className="bill-summary-row">
                <span>Shipping:</span>
                <span>{orderDetails.shipping === 0 ? 'Free' : `$${orderDetails.shipping.toFixed(2)}`}</span>
              </div>
              <div className="bill-summary-row total">
                <span>Grand Total:</span>
                <span>${orderDetails.total.toFixed(2)}</span>
              </div>
            </div>

            <div className="bill-actions">
              <button className="bill-btn bill-btn-secondary" onClick={handlePrint}>
                Print Receipt
              </button>
              <button className="bill-btn bill-btn-primary" onClick={handleCloseBill}>
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
