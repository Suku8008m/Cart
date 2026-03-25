import React, { useMemo } from 'react';
import Banner from './Banner';
import CategoryRow from './CategoryRow';

const Home = ({ products, setCategory, navigateTo }) => {
  // Group products by category
  const categoriesMap = useMemo(() => {
    const map = {};
    products.forEach(product => {
      if (!map[product.category]) {
        map[product.category] = [];
      }
      map[product.category].push(product);
    });
    return map;
  }, [products]);

  const categories = Object.keys(categoriesMap);

  return (
    <div className="home-container">
      <Banner setCategory={setCategory} />
      
      <div className="home-content">
        <div className="categories-stack">
          {categories.map((category) => (
            <CategoryRow 
              key={category} 
              title={category} 
              products={categoriesMap[category]} 
              setCategory={setCategory}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
