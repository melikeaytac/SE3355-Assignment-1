'use client';
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Slider from './Slider';
import Electronics from './Electronics';

export default function ElectronicsSection() {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        {/* Soldaki slider */}
        <Col md={8} className="mb-4 mb-md-0">
          <Slider />
        </Col>

        {/* Sağdaki elektronik ürün önerileri */}
        <Col md={4}>
          <Card className="border-0">
            <Card.Body>
              <h3 className="fw-bold mb-4">⚡ Elektronik Fırsatlar</h3>
              <Electronics /> 
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
