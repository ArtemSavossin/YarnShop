import React, { useState } from 'react';
import { Button, Card, OverlayTrigger, Popover } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../actions/cartActions';

const popover = (
  <Popover id='popover-basic'>
    <Popover.Title as='h3'>Вы добавили товар в корзину!</Popover.Title>
    <Popover.Content>
      Перейдите в корзину, чтобы выбрать количества товара и оформить заявку
    </Popover.Content>
  </Popover>
);

const Product = ({ product, notYarn }) => {
  const dispatch = useDispatch();
  const [showAdded, setShowAdded] = useState(false);

  const pathname = window.location.pathname;
  return (
    <>
      <Link
        to={`/product/${product._id}${pathname}`}
        style={{ color: 'black' }}
        className='text-decoration-none'
      >
        <Card border='light' className='my-3 m-2 shadow-lg rounded-lg'>
          <Card.Body className='d-flex flex-column'>
            <Link
              to={`/product/${product._id}${pathname}`}
              className='justify-self-center align-self-center'
            >
              <Card.Img
                src={product.image}
                variant='top'
                style={{
                  width: `${window.innerWidth >= 600 ? '200px' : '100px'}`,
                  height: `${window.innerWidth >= 600 ? '200px' : '100px'}`,
                }}
              />
            </Link>
            <Card.Title as='div' className='pt-2 m-0'>
              <strong>{product.price}〒</strong>
            </Card.Title>
            <Card.Text as='div'>{product.name}</Card.Text>
            <OverlayTrigger
              trigger='click'
              placement='bottom'
              overlay={popover}
              show={showAdded}
            >
              <Button
                className='y-primary'
                size='sm'
                type='button'
                disabled={product.countInStock === 0}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(addToCart(product._id, 1));
                  setShowAdded(true);
                  setTimeout(() => setShowAdded(false), 3000);
                }}
              >
                {product.countInStock === 0 ? 'Нет на складе' : 'В корзину'}
              </Button>
            </OverlayTrigger>
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
            <Card.Img
              src={product.image}
              variant='top'
              style={{
                width: `${window.innerWidth >= 600 ? '200px' : '100px'}`,
                height: `${window.innerWidth >= 600 ? '200px' : '100px'}`,
              }}
            />
            <Card.Title as='p' className='pt-2 m-0'>
              <strong>{product.price}〒</strong>
            </Card.Title>
            <Card.Text as='p'>{product.name}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
};
export default Product;
