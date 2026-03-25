import React, { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import CategoryRow from './CategoryRow';

const ProductDetails = ({ products, setCategory }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, cart, updateQuantity } = useContext(CartContext);
  
  const product = products.find(p => p.id === parseInt(id));
  
  // Scroll to top when product changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return <div style={{ padding: '20px' }}><h2>Product not found</h2></div>;
  }

  const cartItem = cart.find(item => item.id === product.id);
  const inCart = !!cartItem;

  const handleAddToCart = () => {
    if (product.stock > 0) {
      addToCart(product);
    }
  };

  const similarProducts = products.filter(p => p.category === product.category && p.id !== product.id);

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <button 
        onClick={() => navigate(-1)} 
        style={{ marginBottom: '20px', background: 'none', border: 'none', color: 'var(--amz-link)', cursor: 'pointer', fontSize: '1rem' }}
      >
        &larr; Back to results
      </button>

      <div className="product-details">
        <div className="product-details-image-container">
          <img src={product.image} alt={product.title} className="product-details-image" />
        </div>
        
        <div className="product-details-info">
          <h1 className="product-details-title">{product.title}</h1>
          <div className="product-details-rating">{'⭐'.repeat(Math.round(product.rating))} ({product.rating})</div>
          <hr className="separator" style={{ margin: '10px 0' }} />
          <div className="product-details-price">${product.price.toFixed(2)}</div>
          <div style={{ color: product.stock > 0 ? '#007600' : '#B12704', fontWeight: 'bold', margin: '10px 0' }}>
            {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
          </div>

          <div className="product-details-actions">
            {product.stock === 0 ? (
              <p className="out-of-stock-msg">Currently unavailable.</p>
            ) : (
              <>
                <p className="stock-info" style={{ marginBottom: '15px' }}>Only {product.stock} left in stock - order soon.</p>
                {!inCart ? (
                  <button className="btn-add-to-cart" onClick={handleAddToCart} style={{ padding: '12px', fontSize: '1rem' }}>
                    Add to Cart
                  </button>
                ) : (
                  <div className="quantity-controls inline-controls" style={{ height: '40px' }}>
                    <button 
                      className="btn-qty" 
                      onClick={() => updateQuantity(product.id, cartItem.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="qty-value" style={{ width: '40px', fontSize: '1.2rem' }}>{cartItem.quantity}</span>
                    <button 
                      className="btn-qty" 
                      onClick={() => updateQuantity(product.id, cartItem.quantity + 1)}
                      disabled={cartItem.quantity >= product.stock}
                    >
                      +
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {similarProducts.length > 0 && (
        <div style={{ marginTop: '40px' }}>
          <hr className="separator" style={{ marginBottom: '20px' }} />
          <h2 style={{ marginBottom: '20px' }}>Similar products you might like</h2>
          <CategoryRow title={`More items in ${product.category}`} categoryName={product.category} products={similarProducts} setCategory={setCategory} />
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
