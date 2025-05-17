'use client';

import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import Link from 'next/link';

export default function ProductCard({ item, onAddToCart }) {
  return (
    <Card className="h-100 shadow-sm rounded-4 border-0">
      <Link href={`/product/${item.id}`} className="text-decoration-none text-dark">
        <div className="position-relative">
          <Card.Img
            variant="top"
            src={item.image}
            style={{
              height: 150,
              objectFit: 'contain',
              padding: 12
            }}
          />
          {item.badge && (
            <Badge
              bg="danger"
              className="position-absolute top-0 start-0 m-2"
            >
              {item.badge}
            </Badge>
          )}
        </div>
      </Link>

      <Card.Body className="pt-2 pb-3 px-3">
        <Card.Title style={{ fontSize: 14, minHeight: '3em' }}>
          {item.title}
        </Card.Title>
        <div className="fw-bold text-success mb-1">
          {item.price}₺
        </div>
        <div className="text-warning small mb-2">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i}>{i < Math.round(Number(item.rating)) ? '⭐' : '☆'}</span>
          ))}
        </div>


        <Button
          variant="outline-success"
          size="sm"
          onClick={() => onAddToCart?.(item)}
        >
          Sepete Ekle
        </Button>
      </Card.Body>
    </Card>
  );
}
