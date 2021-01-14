import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';

const Product = ({ product, notYarn }) => {
  const pathname = window.location.pathname;
  return (
    <>
      <Link
        to={`/product/${product._id}${pathname}`}
        style={{ color: 'black' }}
        className='text-decoration-none'
      >
        <Card border='light' className='my-3 m-2 shadow-lg rounded-lg'>
          <Card.Body>
            <Link to={`/product/${product._id}${pathname}`}>
              <Card.Img src={product.image} variant='top' />
            </Link>
            <Card.Title as='div' className='pt-2 m-0'>
              <strong>{product.price}〒</strong>
            </Card.Title>
            {notYarn ? (
              <Rating
                rating={product.rating}
                text={`${product.numRev} отзывов`}
              />
            ) : (
              <></>
            )}
            <Card.Text as='div'>{product.name}</Card.Text>
            <Button className='y-primary' size='sm' type='button'>
              В корзину
            </Button>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
};

export const ProductSM = ({ product }) => {
  const pathname = window.location.pathname;
  return (
    <>
      <Link
        to={`/product/${product._id}${pathname}`}
        style={{ color: 'black' }}
        className='text-decoration-none'
      >
        <Card border='light' className='mt-2 shadow rounded-lg'>
          <Card.Body>
            <Link to={`/product/${product._id}${pathname}`}>
              <Card.Img
                src={product.image}
                variant='top'
                style={{
                  width: `${window.innerWidth >= 600 ? '200px' : '100px'}`,
                  height: 'auto',
                }}
              />
            </Link>
            <Card.Title as='div' className='pt-2 m-0'>
              <strong>{product.price}〒</strong>
            </Card.Title>
            <Card.Text as='div'>{product.name}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
};
export default Product;
