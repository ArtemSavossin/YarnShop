import React, { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listOrders } from '../actions/orderActions';

const OrderListScreen = ({ history }) => {
  const dispatch = useDispatch();

  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
    } else {
      history.push('/');
    }
  }, [dispatch, history, userInfo]);
  return (
    <>
      <h2>Заказы</h2>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table stripped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Пользователь</th>
              <th>Дата</th>
              <th>Сумма</th>
              <th>Оплачено</th>
              <th>Доставлено</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map((order) => {
                order.itemsPrice = order.orderItems.reduce(
                  (acc, item) => acc + item.price * item.qty,
                  0
                );
                return (
                  <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{order.user ? order.user.name : 'Нет имени'}</td>
                    <td>{order.createdAt.substring(0, 10)}</td>
                    <td>{order.itemsPrice}</td>
                    <td>{order.isPaid ? '✅' : '❌'}</td>
                    <td>{order.isFinished ? '✅' : '❌'}</td>
                    <td>
                      <LinkContainer to={`/orders/${order._id}`}>
                        <Button className='btn-sm' variant='light'>
                          Подробнее
                        </Button>
                      </LinkContainer>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default OrderListScreen;
