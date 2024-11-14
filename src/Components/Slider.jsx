import React from 'react';
import './MarqueeSlider.css'; // Import the CSS file for styling

const Slider = () => {
  const images = [
    'https://via.placeholder.com/150x100/FF0000/FFFFFF?text=Image+1',
    'https://via.placeholder.com/150x100/00FF00/FFFFFF?text=Image+2',
    'https://via.placeholder.com/150x100/0000FF/FFFFFF?text=Image+3',
    'https://via.placeholder.com/150x100/FFFF00/FFFFFF?text=Image+4',
    'https://via.placeholder.com/150x100/FF00FF/FFFFFF?text=Image+5',
    'https://via.placeholder.com/150x100/00FFFF/FFFFFF?text=Image+6',
  ];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {/* Display images twice to ensure a seamless loop */}
        {[...images, ...images].map((src, index) => (
          <img src={src} alt={`Slide ${index + 1}`} className="marquee-image" key={index} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
