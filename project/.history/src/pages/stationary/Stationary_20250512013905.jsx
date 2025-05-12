import React, { useContext } from 'react';
import { CartContext } from './CartContext';
...
const Stationary = () => {
  const { addToCart } = useContext(CartContext); // Use context here

  ...
  return (
    <div className='stationary-container' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '2rem' }}>
      {items.map((item) => (
        <Card key={item.id} style={{ width: '18rem', margin: '1rem' }}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <h5>Price: ₹{item.price}</h5>
            <Button variant="primary" onClick={() => addToCart(item)}>Add to Cart</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
