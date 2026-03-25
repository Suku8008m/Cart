import React, { useRef } from 'react';
import ProductCard from './ProductCard';

const CategoryRow = ({ title, categoryName, products, setCategory }) => {
  const rowRef = useRef(null);

  const scrollLeft = () => {
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="category-row-container">
      <div className="category-row-header">
        <h2 className="category-title">{title}</h2>
        <span 
          className="view-more" 
          onClick={() => { 
            setCategory(categoryName || title); 
            window.scrollTo(0,0); 
          }}
        >
          Shop now
        </span>
      </div>
      
      <div className="category-scroll-wrapper">
        <button className="scroll-btn left" onClick={scrollLeft}>&#10094;</button>
        
        <div className="category-row" ref={rowRef}>
          {products.map(product => (
            <div className="row-item" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        
        <button className="scroll-btn right" onClick={scrollRight}>&#10095;</button>
      </div>
    </div>
  );
};

export default CategoryRow;
