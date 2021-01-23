import React, { useEffect } from 'react';
import { ListGroup, Image, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../actions/orderActions';
import Message from '../components/Message';
import CheckoutSteps from '../components/CheckoutSteps';

const PaymentScreen = ({ history }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  cart.itemsPrice = cart.cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  if (!shippingAddress) {
    history.push('/shipping');
  }
  const orderCreate = useSelector((state) => state.orderCreate);

  const { order, success, error } = orderCreate;

  useEffect(() => {
    if (success) {
      history.push(`/orders/${order._id}`);
    }
    // eslint-disable-next-line
  }, [success, history]);
  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        itemsPrice: cart.itemsPrice,
      })
    );
  };
  return (
    <Container>
      <CheckoutSteps step1 step2 step3 />
      <h2>Подтверждение заказа</h2>
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>Доставка</h3>
              <p>
                <strong>Адрес : </strong>
                {cart.shippingAddress.city}, {cart.shippingAddress.address},{' '}
                {cart.shippingAddress.zipCode}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>Вещи:</h3>
              {cart.cartItems.length === 0 ? (
                <Message>Ваша корзина пуста</Message>
              ) : (
                <ListGroup variant='flush'>
                  {cart.cartItems.map((item, index) => {
                    return (
                      <ListGroup.Item key={index}>
                        <Row>
                          <Col xs={6} sm={3} className='mb-3'>
                            <Image
                              src={item.image}
                              alt={item.name}
                              fluid
                              rounded
                            />
                          </Col>
                          <Col xs={6} sm={4} className='mb-3'>
                            <Link
                              to={`/product/${item.product}`}
                              style={{ color: 'black' }}
                            >
                              {item.name}
                            </Link>
                          </Col>
                          <Col
                            xs={12}
                            sm={5}
                            className='mb-3'
                            style={{ fontSize: 14 }}
                          >
                            {item.qty} x {item.price} = {item.qty * item.price}
                            〒
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    );
                  })}
                  <ListGroup.Item>
                    <Row>
                      <strong>Итого: </strong>
                      {cart.itemsPrice}〒
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              {error && <Message variant='danger'>{error}</Message>}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      <Button
        type='button'
        className='mt-3 y-primary'
        disabled={cart.cartItems === 0}
        onClick={placeOrderHandler}
      >
        Подвтердить заказ
      </Button>
    </Container>
  );
};

export default PaymentScreen;
