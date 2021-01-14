import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';
import Message from '../components/Message';
import { addToCart, removeFromCart } from '../actions/cartActions';

const CartScreen = ({ history, match, location }) => {
  const productId = match.params.id;
  console.log(match.params);
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  const checkoutHandler = () => {
    history.push(`/sign-in?redirect=shipping`);
  };
  return (
    <Row>
      <Col sm={8}>
        <h2>Корзина</h2>
        {cartItems.length === 0 ? (
          <Message>Вы еще не добавили не одной вещи в корзину</Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map((item) => {
              console.log(item);
              return (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col xs={6} sm={2}>
                      <Image src={item.image} rounded fluid />
                    </Col>
                    <Col xs={6} sm={3} style={{ verticalAlign: 'middle' }}>
                      <Link
                        to={`/product/${item.product}`}
                        style={{ color: 'black' }}
                      >
                        {item.name || 'Пряжа'}
                      </Link>
                    </Col>
                    <Col
                      xs={4}
                      sm={2}
                      style={{ textAlign: 'center', verticalAlign: 'middle' }}
                    >
                      {item.price * item.qty || 1800 * item.qty}〒
                    </Col>
                    <Col xs={6} sm={3}>
                      <Form.Control
                        as='select'
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col xs={1}>
                      <Button
                        type='button'
                        variant='light'
                        onClick={() => {
                          removeFromCartHandler(item.product);
                        }}
                      >
                        <i className='fas fa-trash'></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        )}
      </Col>
      <Col sm={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>
                Итого:{' '}
                {cartItems.reduce(
                  (acc, item) => acc + item.qty * item.price,
                  0
                )}
                〒
              </h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type='button'
                className='btn-block y-primary'
                disabled={cartItems.lendth === 0}
                onClick={checkoutHandler}
              >
                Оформить заказ
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};
export default CartScreen;
