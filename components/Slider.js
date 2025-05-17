'use client';

import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';

export default function Slider () {

  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch('/api/slider')
      .then(res => res.json())
      .then(data => {
        console.log('Slider verisi:', data); // test 
        setSlides(data);
      });
  }, []);

  return (
    <div className="container mt-4">
      <Carousel>
        {
          Array.isArray(slides) && slides.map((item, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={item.image}
                alt={item.title}
                style={{
                  maxHeight: 400,
                  objectFit: 'cover'
                }}
              />
              <Carousel.Caption>
                <h5>{item.title}</h5>
              </Carousel.Caption>
            </Carousel.Item>
          ))
        }
      </Carousel>
    </div>
  );
}
