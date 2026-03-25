import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  if (products.length === 0) {
    return <div className="empty-state">No products found matching your search.</div>;
  }

  return (
    <div className="product-list-container">
      <h2 className="list-title">Search Results</h2>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
