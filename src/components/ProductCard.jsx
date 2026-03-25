import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart, cart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();
  
  // Checking if product is in cart and its quantity
  const cartItem = cart.find(item => item.id === product.id);
  const inCart = !!cartItem;

  const handleAddToCart = () => {
    if (product.stock > 0) {
      addToCart(product);
    }
  };

  return (
    <div className="product-card">
      <img 
        src={product.image} 
        alt={product.title} 
        className="product-image" 
        onClick={() => navigate(`/product/${product.id}`)}
        style={{ cursor: 'pointer' }}
      />
      <div className="product-info">
        <h3 className="product-title" onClick={() => navigate(`/product/${product.id}`)}>{product.title}</h3>
        <span className="product-rating">{'⭐'.repeat(Math.round(product.rating))} ({product.rating})</span>
        <p className="product-price">${product.price.toFixed(2)}</p>
        
        {product.stock === 0 ? (
          <p className="out-of-stock-msg">Out of Stock</p>
        ) : (
          <div className="product-actions">
            {!inCart ? (
              <button className="btn-add-to-cart" onClick={handleAddToCart}>
                Add to Cart
              </button>
            ) : (
              <div className="quantity-controls inline-controls">
                <button 
                  className="btn-qty" 
                  onClick={() => updateQuantity(product.id, cartItem.quantity - 1)}
                >
                  -
                </button>
                <span className="qty-value">{cartItem.quantity}</span>
                <button 
                  className="btn-qty" 
                  onClick={() => updateQuantity(product.id, cartItem.quantity + 1)}
                  disabled={cartItem.quantity >= product.stock}
                >
                  +
                </button>
              </div>
            )}
            <p className="stock-info">Only {product.stock} left in stock</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
