'use client';

import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/cartSlice';
import ProductCard from '@/components/ProductCard';

export default function Recommendations() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('/api/recommendations')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="container mt-5">
      <h3 className="mb-4 fw-bold">🛍️ Sana Özel Öneriler</h3>

      <Row className="g-3">
        {products.map((item, index) => (
          <Col xs={6} sm={4} md={3} lg={2} key={index}>
            <ProductCard
              item={item}
            
              onAddToCart={(product) => dispatch(addToCart(product))}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}
