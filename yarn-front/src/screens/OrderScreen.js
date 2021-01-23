import React, { useEffect } from 'react';
import {
  ListGroup,
  Image,
  Button,
  Container,
  Row,
  Col,
  Card,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import {
  getOrderDetails,
  payOrder,
  deliverOrder,
  deleteOrder,
} from '../actions/orderActions';
import {
  ORDER_PAY_RESET,
  ORDER_DELIVER_RESET,
} from '../constants/orderConstants';

const OrderScreen = ({ match, history }) => {
  const orderId = match.params.id;
  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  if (!loading) {
    order.itemsPrice = order.orderItems.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    );
  }
  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    }
    if (!order || order._id !== orderId || successDeliver || successPay) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch({ type: ORDER_DELIVER_RESET });
      dispatch(getOrderDetails(orderId));
    }
  }, [dispatch, orderId, order, successDeliver, successPay, history]);

  const deliverHandler = () => {
    dispatch(deliverOrder(order));
  };
  const payHandler = () => {
    dispatch(payOrder(order._id));
  };
  const deleteHandler = () => {
    if (window.confirm('Точно удаляем заказ?')) {
      dispatch(deleteOrder(order._id));
      history.push('/admin/orderlist');
    }
  };
  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='dander'>{error}</Message>
  ) : (
    <Container>
      <h2>Детали заказа {order._id}</h2>
      <Row>
        <Col sm={4} style={{ marginTop: '24px' }}>
          <Card>
            <ListGroup>
              <ListGroup.Item>Принят в обработку ✅</ListGroup.Item>
              <ListGroup.Item>Оплачен {order.isPaid && `✅`}</ListGroup.Item>
              <ListGroup.Item>
                Доставлен {order.isFinished && `✅`}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col sm={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>Доставка</h3>
              <p>
                <strong>Пользователь: </strong> {order.user.name}
              </p>
              <p>
                <strong>Почта: </strong>{' '}
                <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
              </p>
              <p>
                <strong>Адрес : </strong>
                {order.shippingAddress.city}, {order.shippingAddress.address},{' '}
                {order.shippingAddress.zipCode}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>Вещи:</h3>
              {order.orderItems.length === 0 ? (
                <Message>Ваша корзина пуста</Message>
              ) : (
                <ListGroup variant='flush'>
                  {order.orderItems.map((item, index) => {
                    return (
                      <ListGroup.Item key={index}>
                        <Row>
                          <Col xs={3}>
                            <Image
                              src={item.image}
                              alt={item.name}
                              fluid
                              rounded
                            />
                          </Col>
                          <Col xs={4}>
                            <Link to={`/product/${item.product}`}>
                              {item.name}
                            </Link>
                          </Col>
                          <Col xs={5} style={{ fontSize: 14 }}>
                            {item.qty} x {item.price} = {item.qty * item.price}
                            〒
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    );
                  })}
                  <ListGroup.Item>
                    <Row>
                      <Col xs={4}>
                        <strong>Итого: </strong>
                      </Col>
                      <Col xs={8}>{order.itemsPrice}〒</Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
              )}
            </ListGroup.Item>
            {loadingDeliver && <Loader />}
            {loadingPay && <Loader />}
            {userInfo && userInfo.isAdmin && !order.isPaid && (
              <ListGroup.Item>
                <Button
                  type='button'
                  className='btn btn-block'
                  onClick={payHandler}
                >
                  Пометить оплаченым
                </Button>
              </ListGroup.Item>
            )}
            {userInfo && userInfo.isAdmin && order.isPaid && !order.isFinished && (
              <ListGroup.Item>
                <Button
                  type='button'
                  className='btn btn-block'
                  onClick={deliverHandler}
                >
                  Пометить доставленым
                </Button>
              </ListGroup.Item>
            )}

            {userInfo && userInfo.isAdmin && (
              <ListGroup.Item>
                <Button
                  type='button'
                  className='btn btn-block'
                  variant='danger'
                  onClick={deleteHandler}
                >
                  Удалить заказ
                </Button>
              </ListGroup.Item>
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderScreen;
