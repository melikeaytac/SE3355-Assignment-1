'use client';

import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

export default function Electronics() {
  const [products, setProducts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetch('/api/electronics')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [products]);

  if (!products.length) return null;

  const product = products[activeIndex];

  return (
    <a
      href={product.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-decoration-none text-dark"
    >
      <Card className="text-center shadow-sm rounded-4 border-0">
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.title}
          style={{
            height: '250px',
            objectFit: 'contain',
            padding: '16px'
          }}
        />
        <Card.Body>
          <Card.Title className="fs-6 fw-semibold">{product.title}</Card.Title>
          <Card.Text className="fw-bold text-success">{product.price}₺</Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
}
