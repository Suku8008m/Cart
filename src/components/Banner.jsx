import React, { useState, useEffect } from 'react';
import { banners } from '../data/products';

const Banner = ({ setCategory }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // auto scroll every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="banner-carousel">
      <button className="banner-btn prev" onClick={goToPrevious}>&#10094;</button>
      
      <div className="banner-slide" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {banners.map((banner) => (
          <div key={banner.id} className="banner-item">
            <img src={banner.image} alt={banner.title} />
            <div className="banner-content">
              <h2>{banner.title}</h2>
              <p>{banner.subtitle}</p>
              <a 
                href={banner.link} 
                className="banner-cta" 
                onClick={(e) => {
                  e.preventDefault();
                  if (banner.targetCategory) {
                    setCategory(banner.targetCategory);
                    window.scrollTo(0,0);
                  }
                }}
              >
                {banner.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>

      <button className="banner-btn next" onClick={goToNext}>&#10095;</button>
      <div className="banner-fade-bottom"></div>
    </div>
  );
};

export default Banner;
