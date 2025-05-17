'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import ProductCard from '@/components/ProductCard';

export default function VisitedProducts() {
  const visited = useSelector(state => state.visited.products);

  if (!visited.length) return null;

  return (
    <div className="container mt-5">
      <h3 className="mb-4 fw-bold">🧭 Gezilen Ürünler</h3>

      <Row className="g-3">
        {visited.map((item, index) => (
          <Col xs={6} sm={4} md={3} lg={2} key={index}>
            <ProductCard item={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
