import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';
import img1 from './stimages/notebook.jpg';
import img2 from './stimages/geometrybox.jpg';
import img3 from './stimages/'
const Stationary = () => {
    const items = [
        {
          id: 1,
          title: "Classmate Notebook",
          description: "High-quality ruled notebook with 200 pages.",
          image: img1,
          price: 60
        },
        {
          id: 2,
          title: "Camlin Geometry Box",
          description: "Contains compass, protractor, divider, ruler, and more.",
          image: img2,
          price: 90
        },

      ];
  return (
      <>
        <div className='stationary-container'>
        {items.map((item) => (
          <Card key={item.id} style={{ width: '18rem', margin: '1rem' }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <h5>Price: ₹{item.price}</h5>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      </>
  )
}

export default Stationary;