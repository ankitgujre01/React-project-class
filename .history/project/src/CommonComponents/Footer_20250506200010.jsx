import React from 'react'

const Footer = () => {
  return (
      <>
        import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light pt-5 pb-3 mt-5 border-top">
      <Container>
        <Row>
          <Col md={2} sm={6}>
            <h6>All Categories</h6>
            <ul className="list-unstyled">
              <li>Grocery</li>
              <li>Electronics</li>
              <li>Fashion</li>
              <li>Home & Lifestyle</li>
              <li>Premium Fruits</li>
              <li>Books</li>
              <li>Furniture</li>
            </ul>
          </Col>
          <Col md={2} sm={6}>
            <h6>Popular Categories</h6>
            <ul className="list-unstyled">
              <li>Biscuits, Drinks & Packaged Foods</li>
              <li>Fruits & Vegetables</li>
              <li>Cooking Essentials</li>
              <li>Dairy & Bakery</li>
              <li>Personal Care</li>
              <li>Beauty</li>
              <li>Home Care</li>
              <li>Mom & Baby Care</li>
              <li>School, Office & Stationery</li>
            </ul>
          </Col>
          <Col md={2} sm={6}>
            <h6>Customer Account</h6>
            <ul className="list-unstyled">
              <li>My Account</li>
              <li>My Orders</li>
              <li>Wishlist</li>
              <li>Delivery Addresses</li>
              <li>JioMart Wallet</li>
            </ul>
          </Col>
          <Col md={2} sm={6}>
            <h6>Help & Support</h6>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>FAQ</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>E-waste Policy</li>
              <li>Cancellation & Return Policy</li>
              <li>Shipping & Delivery Policy</li>
              <li>AC Installation by resQ</li>
            </ul>
          </Col>
          <Col md={4} sm={12}>
            <h6>Contact Us</h6>
            <p>
              WhatsApp us: <strong>70003 70003</strong><br />
              Call us: <strong>1800 890 1222</strong><br />
              8:00 AM to 8:00 PM, 365 days
            </p>
            <p>
              Should you encounter any bugs, glitches, lack of functionality, delayed deliveries, billing errors or other problems on the website.
            </p>
            <div className="d-flex gap-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" width="120" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Download_on_the_App_Store_Badge.svg" alt="App Store" width="120" />
            </div>
          </Col>
        </Row>
        <hr />
        <div className="text-center small text-muted">
          © 2025 All rights reserved. Reliance Retail Ltd. <br />
          Best viewed on Microsoft Edge 81+, Mozilla Firefox 75+, Safari 5.1.5+, Google Chrome 80+
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
    
      </>
  )
}

export default Footer;