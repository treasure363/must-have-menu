import React from 'react';
import './MarqueeSlider.css'; // Import the CSS file for styling

const Slider = () => {
  const images = [
    "https://timber.mhmcdn.com/site/marketing/homepage/1_SimpleGridBurgerDMB.webp",
    "https://timber.mhmcdn.com/site/marketing/homepage/2_DarkBarDMB.webp",
    "https://timber.mhmcdn.com/site/marketing/homepage/3_DynamicDIYMexicanDMB.webp",
    "https://timber.mhmcdn.com/site/marketing/homepage/4_CupofCoffeeDMB.webp",
    "https://timber.mhmcdn.com/site/marketing/homepage/5_CupcakeDMB.webp",
    "https://timber.mhmcdn.com/site/marketing/homepage/1_SimpleGridBurgerDMB.webp",
    "https://timber.mhmcdn.com/site/marketing/homepage/2_DarkBarDMB.webp",
    "https://timber.mhmcdn.com/site/marketing/homepage/3_DynamicDIYMexicanDMB.webp",
    "https://timber.mhmcdn.com/site/marketing/homepage/4_CupofCoffeeDMB.webp",
    "https://timber.mhmcdn.com/site/marketing/homepage/5_CupcakeDMB.webp"
  ];  

  return (
    <div>
      <div className="marquee-container">
        <div className="fade-left"></div>
        <div className="fade-right"></div>
        <div className="marquee-content">
          {/* Duplicate images to ensure seamless looping */}
          {[...images, ...images].map((src, index) => (
            <img src={src} alt={`Slide ${index + 1}`} className="marquee-image" key={index} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Slider;
