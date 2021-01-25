import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetails } from '../actions/orderActions';
import {
  ORDER_PAY_RESET,
  ORDER_DELIVER_RESET,
} from '../constants/orderConstants';

const PostedOrderScreen = ({ match }) => {
  const orderId = match.params.id;

  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const { success: successPay } = orderPay;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { success: successDeliver } = orderDeliver;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    }
    if (!order || order._id !== orderId || successDeliver || successPay) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch({ type: ORDER_DELIVER_RESET });
      dispatch(getOrderDetails(orderId));
    }
  }, [dispatch, orderId, order, successDeliver, successPay, history, userInfo]);

  return (
    <Row>
      <Col xs={12}>
        <Row>
          <Col xs={1} sm={3}></Col>
          <Col>
            <h2 style={{ textAlign: 'center' }}>Твой заказ успешно создан.</h2>
          </Col>
          <Col xs={1} sm={3}></Col>
        </Row>
        <Row>
          <Col xs={1} sm={3}></Col>
          <Col style={{ textAlign: 'center' }}>
            Спасибо, что оставил заказ на нашем сайте!
          </Col>
          <Col xs={1} sm={3}></Col>
        </Row>
        <Row>
          <Col xs={1} sm={3}></Col>
          <Col style={{ textAlign: 'center' }}>
            На твою почту придет подтверждение заказа и инструкция по оплате,
            детали заказа можно найти в разделе заказы и по ссылке снизу.
          </Col>
          <Col xs={1} sm={3}></Col>
        </Row>
        <br />
      </Col>
      <Col xs={12} className='my-3'>
        <Row>
          <Col xs={1} sm={3}></Col>
          <Col xs={10} sm={6}>
            <LinkContainer to={`/orders/${orderId}`}>
              <Button className='d-block y-primary'>К заказу</Button>
            </LinkContainer>
          </Col>
          <Col xs={1} sm={3}></Col>
        </Row>
      </Col>
      <Col xs={12} className='my-3'>
        <Row>
          <Col xs={1} sm={3}></Col>
          <Col xs={10} sm={6}>
            <LinkContainer to='/main'>
              <Button
                className='d-block pb-3'
                style={{
                  fontWeight: '700',
                  paddingBottom: '0.375rem !important',
                }}
              >
                На главную
              </Button>
            </LinkContainer>
          </Col>
          <Col xs={1} sm={3}></Col>
        </Row>
      </Col>
    </Row>
  );
};

export default PostedOrderScreen;
