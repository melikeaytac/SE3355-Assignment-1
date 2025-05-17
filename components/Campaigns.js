'use client';

import React, { useEffect, useState } from 'react';
import {
  Container,
  Card
} from 'react-bootstrap';

export default function Campaigns() {

  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetch('/api/campaigns')
      .then((res) => res.json())
      .then(data => {
        setCampaigns(data); // gelen veriyi state'e at
      });
  }, []);

  return (
    <Container className="py-5" style={{ position: 'relative', zIndex: 1 }}>
      <div className="d-flex flex-wrap justify-content-center gap-2">
        {
          campaigns.map((item) => {
            return (
              <Card
                key={item.id}
                className="text-center border-0 shadow-sm rounded-3 overflow-hidden p-0"
                style={{
                  width: '110px',
                  fontSize: '11px',
                  flex: '0 0 auto'
                }}
              >
                <div className="bg-primary text-white fw-bold py-1">
                  {item.badge}
                </div>

                <div style={{
                  background: 'linear-gradient(#ff9100, #ff6700)',
                  padding: 4
                }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      height: 50,
                      objectFit: 'contain',
                      maxWidth: '100%'
                    }}
                  />
                </div>

                <div className="bg-warning fw-bold py-1 text-dark">
                  {item.title}
                </div>

                <div className="py-1 text-secondary fw-semibold">
                  {item.category}
                </div>
              </Card>
            );
          })
        }
      </div>
    </Container>
  );
}
