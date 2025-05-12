// import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// import img1 from './stimages/notebook.jpg';
// import img2 from './stimages/geometrybox.jpg';
// import img3 from './stimages/pencils.jpg';
// import img4 from './stimages/eraser.jpg';
// import img5 from './stimages/sharpner.jpg';
// import img6 from './stimages/pens.jpg';
// import img7 from './stimages/scale.jpg';
// import img8 from './stimages/drawingbook.jpg';

// const Stationary = () => {
//   const items = [
//     {
//       id: 1,
//       title: "Classmate Notebook",
//       description: "High-quality ruled notebook with 200 pages.",
//       image: img1,
//       price: 60
//     },
//     {
//       id: 2,
//       title: "Camlin Geometry Box",
//       description: "Contains compass, protractor, divider, ruler, and more.",
//       image: img2,
//       price: 90
//     },
//     {
//       id: 3,
//       title: "Apsara Pencils (Pack of 10)",
//       description: "Premium graphite pencils for smooth writing.",
//       image: img3,
//       price: 35
//     },
//     {
//       id: 4,
//       title: "Natraj Eraser",
//       description: "Soft and smudge-free erasing.",
//       image: img4,
//       price: 10
//     },
//     {
//       id: 5,
//       title: "Sharpener",
//       description: "Durable plastic sharpener for all pencil sizes.",
//       image: img5,
//       price: 8
//     },
//     {
//       id: 6,
//       title: "Ball Pens (Pack of 5)",
//       description: "Smooth-flow ink pens for daily writing.",
//       image: img6,
//       price: 50
//     },
//     {
//       id: 7,
//       title: "Plastic Scale 15cm",
//       description: "Transparent ruler with clear markings.",
//       image: img7,
//       price: 12
//     },
//     {
//       id: 8,
//       title: "Drawing Book (40 pages)",
//       description: "Ideal for kids and students to sketch freely.",
//       image: img8,
//       price: 45
//     },
//   ];

//   return (
//     <>
//       <div className='stationary-container' style={{
//         display: 'flex',
//         flexWrap: 'wrap',
//         justifyContent: 'center',
//         marginTop: '2rem'
//       }}>
//         {items.map((item) => (
//           <Card key={item.id} style={{ width: '18rem', margin: '1rem' }}>
//             <Card.Img variant="top" src={item.image} />
//             <Card.Body>
//               <Card.Title>{item.title}</Card.Title>
//               <Card.Text>{item.description}</Card.Text>
//               <h5>Price: ₹{item.price}</h5>
//               <Button variant="primary">Add to Cart</Button>
//             </Card.Body>
//           </Card>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Stationary;

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
