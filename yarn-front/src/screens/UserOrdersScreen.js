import React, { useEffect } from 'react';
import { Button, Row, Col, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
//import FormContainer from '../components/FormContainer.js'
import { listMyOrders } from '../actions/orderActions';

const UserOrdersScreen = ({ history, location }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

  useEffect(() => {
    if (!userInfo) {
      history.push('/sign-in');
    } else {
      dispatch(listMyOrders());
    }
  }, [history, userInfo, dispatch, success]);

  return (
    <Row>
      <Col xs={0} md={1}></Col>
      <Col xs={12} md={10}>
        <h3>Мои заказы</h3>
        {loadingOrders ? (
          <Loader />
        ) : errorOrders ? (
          <Message variant='danger'>{errorOrders}</Message>
        ) : (
          <Table
            striped
            bordered
            hover
            responsive
            className='table-sm'
            size='sm'
          >
            <thead>
              <tr>
                <th></th>
                <th>Дата</th>
                <th>Сумма</th>
                <th>Оплачено</th>
                <th>Доставлено</th>
                <th>ID</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => {
                order.itemsPrice = order.orderItems.reduce(
                  (acc, item) => acc + item.price * item.qty,
                  0
                );
                return (
                  <tr key={order._id}>
                    <td>
                      <LinkContainer to={`/orders/${order._id}`}>
                        <Button className='btn-sm' variant='light'>
                          Подробнее
                        </Button>
                      </LinkContainer>
                    </td>
                    <td>{order.createdAt.substring(0, 10)}</td>
                    <td>{order.itemsPrice}</td>
                    <td>{order.isPaid ? '✅' : '❌'}</td>
                    <td>{order.isFinished ? '✅' : '❌'}</td>
                    <td>{order._id}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
      </Col>
      <Col xs={0} md={1}></Col>
    </Row>
  );
};
export default UserOrdersScreen;
