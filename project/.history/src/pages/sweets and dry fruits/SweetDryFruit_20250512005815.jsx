// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// import sdf1 from './images/sweet1.jpg';
// import sdf2 from './images/sweet2.jpg';
// import sdf3 from './images/sweet3.jpg';
// import sdf4 from './images/sweet4.jpg';
// import sdf5 from './images/sweet5.jpg';
// import sdf6 from './images/sweet6.jpg';
// import sdf7 from './images/sweet7.jpg';
// import sdf8 from './images/sweet8.jpg';


// const SweetDryFruit = () => {
//   return (
//       <>
//           <div className='sweets'>
//       <Card style={{ width: '18rem' }} className='sweets-card-container'>
//         <Card.Img variant="top" src={sdf1} />
//         <Card.Body>
//           <Card.Title>Asha Sweets - Premium Dry Fruit Mix</Card.Title>
//           <Card.Text>
//             Indulge in the rich taste of our handcrafted Asha Sweets, made with a premium selection of almonds, cashews, pistachios, raisins, and saffron-infused syrup. Perfect for celebrations or gifting, this 500g pack brings together tradition and flavor in every bite.
//           </Card.Text>
//           <h5>Price: ₹500</h5>
//           <Button variant="primary">Add to Cart</Button>
//         </Card.Body>
//           </Card>
          
//           <Card style={{ width: '18rem' }} className='sweets-card-container'>
//         <Card.Img variant="top" src={sdf2} />
//         <Card.Body>
//           <Card.Title>Asha Sweets - Premium Dry Fruit Mix</Card.Title>
//           <Card.Text>
//             Indulge in the rich taste of our handcrafted Asha Sweets, made with a premium selection of almonds, cashews, pistachios, raisins, and saffron-infused syrup. Perfect for celebrations or gifting, this 500g pack brings together tradition and flavor in every bite.
//           </Card.Text>
//           <h5>Price: ₹500</h5>
//           <Button variant="primary">Add to Cart</Button>
//         </Card.Body>
//           </Card>
          
//           <Card style={{ width: '18rem' }} className='sweets-card-container'>
//         <Card.Img variant="top" src={sdf3} />
//         <Card.Body>
//           <Card.Title>Asha Sweets - Premium Dry Fruit Mix</Card.Title>
//           <Card.Text>
//             Indulge in the rich taste of our handcrafted Asha Sweets, made with a premium selection of almonds, cashews, pistachios, raisins, and saffron-infused syrup. Perfect for celebrations or gifting, this 500g pack brings together tradition and flavor in every bite.
//           </Card.Text>
//           <h5>Price: ₹500</h5>
//           <Button variant="primary">Add to Cart</Button>
//         </Card.Body>
//           </Card>
          
//           <Card style={{ width: '18rem' }} className='sweets-card-container'>
//         <Card.Img variant="top" src={sdf4} />
//         <Card.Body>
//           <Card.Title>Asha Sweets - Premium Dry Fruit Mix</Card.Title>
//           <Card.Text>
//             Indulge in the rich taste of our handcrafted Asha Sweets, made with a premium selection of almonds, cashews, pistachios, raisins, and saffron-infused syrup. Perfect for celebrations or gifting, this 500g pack brings together tradition and flavor in every bite.
//           </Card.Text>
//           <h5>Price: ₹500</h5>
//           <Button variant="primary">Add to Cart</Button>
//         </Card.Body>
//           </Card>
          
//           <Card style={{ width: '18rem' }} className='sweets-card-container'>
//         <Card.Img variant="top" src={sdf5} />
//         <Card.Body>
//           <Card.Title>Asha Sweets - Premium Dry Fruit Mix</Card.Title>
//           <Card.Text>
//             Indulge in the rich taste of our handcrafted Asha Sweets, made with a premium selection of almonds, cashews, pistachios, raisins, and saffron-infused syrup. Perfect for celebrations or gifting, this 500g pack brings together tradition and flavor in every bite.
//           </Card.Text>
//           <h5>Price: ₹500</h5>
//           <Button variant="primary">Add to Cart</Button>
//         </Card.Body>
//           </Card>
          
//           <Card style={{ width: '18rem' }} className='sweets-card-container'>
//         <Card.Img variant="top" src={sdf6} />
//         <Card.Body>
//           <Card.Title>Asha Sweets - Premium Dry Fruit Mix</Card.Title>
//           <Card.Text>
//             Indulge in the rich taste of our handcrafted Asha Sweets, made with a premium selection of almonds, cashews, pistachios, raisins, and saffron-infused syrup. Perfect for celebrations or gifting, this 500g pack brings together tradition and flavor in every bite.
//           </Card.Text>
//           <h5>Price: ₹500</h5>
//           <Button variant="primary">Add to Cart</Button>
//         </Card.Body>
//           </Card>
          
//           <Card style={{ width: '18rem' }} className='sweets-card-container'>
//         <Card.Img variant="top" src={sdf7} />
//         <Card.Body>
//           <Card.Title>Asha Sweets - Premium Dry Fruit Mix</Card.Title>
//           <Card.Text>
//             Indulge in the rich taste of our handcrafted Asha Sweets, made with a premium selection of almonds, cashews, pistachios, raisins, and saffron-infused syrup. Perfect for celebrations or gifting, this 500g pack brings together tradition and flavor in every bite.
//           </Card.Text>
//           <h5>Price: ₹500</h5>
//           <Button variant="primary">Add to Cart</Button>
//         </Card.Body>
//           </Card>
          
//           <Card style={{ width: '18rem' }} className='sweets-card-container'>
//         <Card.Img variant="top" src={sdf8} />
//         <Card.Body>
//           <Card.Title>Asha Sweets - Premium Dry Fruit Mix</Card.Title>
//           <Card.Text>
//             Indulge in the rich taste of our handcrafted Asha Sweets, made with a premium selection of almonds, cashews, pistachios, raisins, and saffron-infused syrup. Perfect for celebrations or gifting, this 500g pack brings together tradition and flavor in every bite.
//           </Card.Text>
//           <h5>Price: ₹500</h5>
//           <Button variant="primary">Add to Cart</Button>
//         </Card.Body>
//               </Card>
              
//               </div>
//     </>
//   );
// };

// export default SweetDryFruit;


import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice';


import sdf1 from './images/sweet1.jpg';
import sdf2 from './images/swee'


const SweetDryFruit = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const sweetItems = [
    { id: 1, name: "Asha Sweets", image: sdf1, price: 500 },
    { id: 2, name: "Asha Sweets", image: sdf2, price: 500 },
    { id: 3, name: "Asha Sweets", image: sdf3, price: 500 },
    { id: 4, name: "Asha Sweets", image: sdf4, price: 500 },
    { id: 5, name: "Asha Sweets", image: sdf5, price: 500 },
    { id: 6, name: "Asha Sweets", image: sdf6, price: 500 },
    { id: 7, name: "Asha Sweets", image: sdf7, price: 500 },
    { id: 8, name: "Asha Sweets", image: sdf8, price: 500 },
  ];

  return (
    <div className='sweets'>
      {sweetItems.map((sweet) => (
        <Card key={sweet.id} style={{ width: '18rem' }} className='sweets-card-container'>
          <Card.Img variant="top" src={sweet.image} />
          <Card.Body>
            <Card.Title>{sweet.name} - Premium Dry Fruit Mix</Card.Title>
            <Card.Text>
              Indulge in the rich taste of our handcrafted Asha Sweets...
            </Card.Text>
            <h5>Price: ₹{sweet.price}</h5>
            <Button variant="primary" onClick={() => handleAddToCart(sweet)}>
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default SweetDryFruit;
