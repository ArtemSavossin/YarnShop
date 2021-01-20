import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button, Row, Col, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
//import FormContainer from '../components/FormContainer.js'
import { getUserDetails, updateUserProfile } from '../actions/userActions';
import { listMyOrders } from '../actions/orderActions';
import {
  USER_UPDATE_PROFILE_RESET,
  USER_UPDATE_PROFILE_SUCCESS,
} from '../constants/userConstants';

const UserOrdersScreen = ({ history, location }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

  useEffect(() => {
    if (!userInfo) {
      history.push('/sign-in');
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET });
        dispatch(getUserDetails('profile'));
        dispatch(listMyOrders());
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [history, userInfo, dispatch, user, success]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Пароли не совпадают');
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
    }
  };
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
