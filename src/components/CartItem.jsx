import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useContext(CartContext);

  return (
    <div className="cart-item-row">
      <img src={item.image} alt={item.title} className="cart-item-img" />
      <div className="cart-item-details">
        <h4 className="cart-item-title">{item.title}</h4>
        <p className="cart-item-stock">In Stock ({item.stock} available)</p>
        
        <div className="cart-item-actions">
          <div className="quantity-controls">
            <button 
              className="btn-qty" 
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <span className="qty-value">{item.quantity}</span>
            <button 
              className="btn-qty" 
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              disabled={item.quantity >= item.stock}
            >
              +
            </button>
          </div>
          <span className="separator">|</span>
          <button 
            className="btn-remove" 
            onClick={() => removeFromCart(item.id)}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="cart-item-price">
        <strong>${(item.price * item.quantity).toFixed(2)}</strong>
      </div>
    </div>
  );
};

export default CartItem;
