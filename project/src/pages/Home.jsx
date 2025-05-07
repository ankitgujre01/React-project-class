import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import b1 from './images/b1.jpg';
import b2 from './images/b2.jpg';
import { motion } from 'framer-motion';
import Category from './category/Category';

const Home = () => {
  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={b1} alt="First slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={b2} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
    </motion.div>
      <Category />
      </>
  );
};

export default Home;
