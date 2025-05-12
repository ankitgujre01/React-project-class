import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import Card from 'react-bootstrap/Card';

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cartItems.map((item, index) => (
          <Card key={index} style={{ margin: '1rem 0' }}>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <h5>₹{item.price}</h5>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
};

export default Cart;
