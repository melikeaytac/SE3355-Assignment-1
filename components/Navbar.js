'use client';

import React from 'react';
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Form,
  FormControl
} from 'react-bootstrap';
import Link from 'next/link';
import {
  FaUser,
  FaShoppingCart,
  FaTruck,
  FaClock,
  FaLock,
  FaSearch
} from 'react-icons/fa';
import { useSelector } from 'react-redux';
import {
  OverlayTrigger,
  Popover
} from 'react-bootstrap';

export default function MainNavbar() {

  const cartItems = useSelector(state => state.cart.items); // ürün listesi
  const totalCount = useSelector(state => state.cart.totalCount); // toplam ürün sayısı

  const cartPopover = (
    <Popover id="cart-popover" style={{ maxWidth: 300 }}>
      <Popover.Header as="h3">🛒 Sepetim</Popover.Header>
      <Popover.Body>
        {
          cartItems.length === 0 ? (
            <div className="text-muted">Sepetiniz boş</div>
          ) : (
            <ul className="list-unstyled mb-0">
              {
                cartItems.map((item, idx) => (
                  <li key={idx} className="mb-2 border-bottom pb-1">
                    <div className="fw-semibold" style={{ fontSize: 13 }}>{item.title}</div>
                    <div className="text-success" style={{ fontSize: 12 }}>{item.price}₺</div>
                  </li>
                ))
              }
            </ul>
          )
        }
      </Popover.Body>
    </Popover>
  );

  return (
    <>
      {/* Üst bilgi çubuğu */}
      <div
        style={{
          backgroundColor: '#f26d21',
          color: '#fff',
          fontSize: '14px',
          padding: '6px 0',
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1040
        }}
      >
        <Container className="d-flex justify-content-between">
          <div><FaTruck className="me-2" />Ücretsiz Kargo</div>
          <div><FaClock className="me-2" />7/24 Destek</div>
          <div><FaLock className="me-2" />Güvenli Ödeme</div>
        </Container>
      </div>

      {/* Ana navbar */}
      <Navbar
        expand="lg"
        bg="light"
        className="border-bottom shadow-sm"
        style={{
          position: 'fixed',
          top: 32,
          width: '100%',
          zIndex: 1039
        }}
      >
        <Container fluid className="px-3">
          <Navbar.Brand as={Link} href="/" className="fw-bold text-primary fs-4">
            E-Commerce-Site
          </Navbar.Brand>

          <Form className="d-none d-md-flex flex-grow-1 mx-md-4 my-2 my-md-0">
            <FormControl
              type="search"
              placeholder="Ürün, kategori veya marka ara"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-warning">
              <FaSearch />
            </Button>
          </Form>

          <div className="d-flex align-items-center">
            <Button variant="danger" className="me-2">
              <FaUser className="me-1" /> Hesabım
            </Button>

            <OverlayTrigger
              trigger={['hover', 'focus']}
              placement="bottom"
              overlay={cartPopover}
              delay={{ show: 200, hide: 100 }}
            >
              <Button variant="secondary">
                <FaShoppingCart className="me-1" /> Sepetim ({totalCount})
              </Button>
            </OverlayTrigger>
          </div>
        </Container>
      </Navbar>

      {/* Renkli çizgi */}
      <div
        className="d-block d-md-block"
        style={{
          position: 'fixed',
          top: 88,
          width: '100%',
          height: '4px',
          zIndex: 1041,
          pointerEvents: 'none'
        }}
      >
        <div style={{ display: 'flex', height: '100%' }}>
          <div style={{ flex: 1, backgroundColor: '#f26d21' }}></div>
          <div style={{ flex: 1, backgroundColor: '#6f42c1' }}></div>
          <div style={{ flex: 1, backgroundColor: '#20c997' }}></div>
          <div style={{ flex: 1, backgroundColor: '#0dcaf0' }}></div>
        </div>
      </div>

      {/* Kategoriler barı */}
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        className="border-bottom"
        style={{
          position: 'fixed',
          top: 92,
          width: '100%',
          zIndex: 1037
        }}
      >
        <Container fluid className="px-3" style={{ overflow: 'visible' }}>
          <Navbar.Toggle aria-controls="category-navbar" />
          <Navbar.Collapse id="category-navbar" className="justify-content-center">
            <Nav className="mx-auto fw-semibold text-nowrap justify-content-center">
              <NavDropdown title="Elektronik" id="elektronik-dropdown">
                <NavDropdown.Item href="#">Bilgisayar</NavDropdown.Item>
                <NavDropdown.Item href="#">Telefon</NavDropdown.Item>
                <NavDropdown.Item href="#">Tablet</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Moda" id="moda-dropdown">
                <NavDropdown.Item href="#">Kadın Giyim</NavDropdown.Item>
                <NavDropdown.Item href="#">Erkek Giyim</NavDropdown.Item>
                <NavDropdown.Item href="#">Aksesuar</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#">Ev, Yaşam, Kırtasiye, Ofis</Nav.Link>
              <Nav.Link href="#">Oto, Bahçe, Yapı Market</Nav.Link>
              <Nav.Link href="#">Anne, Bebek, Oyuncak</Nav.Link>
              <Nav.Link href="#">Spor, Outdoor</Nav.Link>
              <Nav.Link href="#">Kozmetik, Kişisel Bakım</Nav.Link>
              <Nav.Link href="#">Süpermarket, Pet Shop</Nav.Link>
              <Nav.Link href="#">Kitap, Müzik, Film, Hobi</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
