
import React, { useState } from 'react';
import Plx from 'react-plx';
import { Carousel } from 'react-bootstrap';
import './imageslider.css'; 

function ImageSlider() {
  const [images, setImage] = useState([
    { image: 'http://localhost:3000/image-1.jpg' },
    { image: 'http://localhost:3000/image-2.jpg' },
    { image: 'http://localhost:3000/image-3.jpg' },
    { image: 'http://localhost:3000/image-4.jpg' },
    { image: 'http://localhost:3000/image-5.jpg' },
    { image: 'http://localhost:3000/image-6.jpg' },
    { image: 'http://localhost:3000/image-7.jpg' },
  ]);

  return (
    <div className='para'>
      <Plx
        className='parallax-background' 
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 1.18,
                property: 'scale',
              },
            ],
          },
        ]}
        
      >
        <img
          style={{ width: '100%' }}
          src='https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80'
          alt='background'
        />
      </Plx>

      <div className='main'>
        <Carousel className='carosal'>
          {images.map((item, index) => (
            <Carousel.Item key={index}>
              <img
                className='d-block carousalimage'
                src={item.image}
                alt={`Slide ${index + 1}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default ImageSlider;
