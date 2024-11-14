import React from 'react';
import { Carousel } from 'react-bootstrap';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="image1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First Slide Label</h3>
          <p>Some description here.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="image2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second Slide Label</h3>
          <p>Some description here.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
