import React from 'react'
import cat1 from './images/sweetsand-dryfruit.jpg';
import cat2 from './images/teacofeee.jpg';
import cat3 from './images/beverages.jpg';
import cat4 from './images/snacks.jpg';
import cat5 from './images/biscuitandcookies.jpg';
import cat6 from './images/diapers.jpg';
import cat7 from './images/frozenproduct.jpg';
import cat8 from './images/gheecookingoil.jpg';
import cat9 from './images/groceries.jpg';
import cat10 from './images/homeutilities.jpg';
import cat11 from './images/ketchups.jpg';
import cat12 from './images/pastanoodles.jpg';
import cat13 from './images/personalcare.jpg';
import cat14 from './images/readytocook.jpg';
import cat15 from './images/schoolsupllies.jpg';
import cat16 from './images/tissueplates.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';
const Category = () => {
  return (
    <>
      <center style={{marginTop:'20px'}}>
        <h1 className='category-heading'>Categories</h1>
      <p className='category-subheading'>Explore our wide range of categories</p>
      </center>
      <div className='category-container'> 
        
        <Card style={{ width: '18rem' }} className='category'>
      <Card.Img variant="top" src={cat1} />
      <Card.Body>
        <Card.Title>Sweets and Dry Fruits</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to="/sweets-and-dry-fruits">
      <Button variant="primary">Explore</Button>
    </Link>
      </Card.Body>
          </Card>
          
          <Card style={{ width: '18rem' }} className='category'>
      <Card.Img variant="top" src={cat15} />
      <Card.Body>
        <Card.Title>Stationary Items</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to='/stationary'>
      <Button variant="primary">Explore</Button>
    </Link>
      </Card.Body>
          </Card>
          
          <Card style={{ width: '18rem' }} className='category'>
      <Card.Img variant="top" src={cat2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
          </Card>
          
          <Card style={{ width: '18rem' }} className='category'>
      <Card.Img variant="top" src={cat3} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
          </Card>
          
          <Card style={{ width: '18rem' }} className='category'>
      <Card.Img variant="top" src={cat14} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
          </Card>
          
          <Card style={{ width: '18rem' }} className='category'>
      <Card.Img variant="top" src={cat4} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
          </Card>
          
          <Card style={{ width: '18rem' }} className='category'>
      <Card.Img variant="top" src={cat5} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
          </Card>
          
          <Card style={{ width: '18rem' }} className='category'>
      <Card.Img variant="top" src={cat6} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
          </Card>
          
          <Card style={{ width: '18rem' }} className='category'>
      <Card.Img variant="top" src={cat16} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
          </Card>
          
          <Card style={{ width: '18rem' }} className='category'>
      <Card.Img variant="top" src={cat7} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
          </Card>
          
          <Card style={{ width: '18rem' }} className='category'>
      <Card.Img variant="top" src={cat8} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
          </Card>
          
          <Card style={{ width: '18rem' }} className='category'>
      <Card.Img variant="top" src={cat9} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
          </Card>
          
          <Card style={{ width: '18rem' }} className='category'>
      <Card.Img variant="top" src={cat10} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
          </Card>
          
          <Card style={{ width: '18rem' }} className='category'>
      <Card.Img variant="top" src={cat11} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
          </Card>
          
          <Card style={{ width: '18rem' }} className='category'>
      <Card.Img variant="top" src={cat12} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
          </Card>
          
          <Card style={{ width: '18rem' }} className='category'>
      <Card.Img variant="top" src={cat13} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
              </Card>
             </div>
      </>
  )
}

export default Category;