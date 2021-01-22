import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader';
import Message from './Message';
import { showRoomProducts } from '../actions/productActions';

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const productShowRoom = useSelector((state) => state.productShowRoom);
  const { loading, error, products } = productShowRoom;

  useEffect(() => {
    dispatch(showRoomProducts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <>
      <Carousel pause='hover' className='bg-light'>
        {products &&
          products.map((product) => (
            <Carousel.Item
              key={product._id}
              style={{
                height: `${
                  window.innerWidth <= 768
                    ? '35vw'
                    : window.innerWidth <= 1200
                    ? '20vw'
                    : '250px'
                }`,
              }}
            >
              <Link to={`/product/${product._id}`}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fluid
                  className='d-block w-100 p-0 m-0'
                  style={{
                    height: `${
                      window.innerWidth <= 768
                        ? '35vw'
                        : window.innerWidth <= 1200
                        ? '20vw'
                        : '250px'
                    }`,
                  }}
                />
              </Link>
              <Carousel.Caption>
                <h3>{product.name}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
    </>
  );
};

export default ProductCarousel;
