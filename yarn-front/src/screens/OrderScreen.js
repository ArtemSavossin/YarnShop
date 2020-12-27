import React, { useEffect } from "react"
import {
  ListGroup,
  Image,
  Button,
  Container,
  Row,
  Col,
  Card,
} from "react-bootstrap"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { saveShippingAddress } from "../actions/cartActions"
import { getOrderDetails } from "../actions/orderActions"
import Message from "../components/Message"
import Loader from "../components/Loader"

const OrderScreen = ({ match }) => {
  const orderId = match.params.id
  const dispatch = useDispatch()

  const orderDetails = useSelector((state) => state.orderDetails)
  const { order, loading, error } = orderDetails
  if (!loading) {
    order.itemsPrice = order.orderItems.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    )
  }
  useEffect(() => {
    if (!order || order._id !== orderId) {
      dispatch(getOrderDetails(orderId))
    }
  }, [dispatch, orderId, order])
  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='dander'>{error}</Message>
  ) : (
    <Container>
      <h2>Детали заказа {order._id}</h2>
      <Row>
        <Col sm={4} style={{ marginTop: "24px" }}>
          <Card>
            <ListGroup>
              <ListGroup.Item>Принят в обработку ✅</ListGroup.Item>
              <ListGroup.Item>Оплачен {order.isPaid && `✅`}</ListGroup.Item>
              <ListGroup.Item>
                Доставлен {order.isDelivered && `✅`}
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
                <strong>Почта: </strong>{" "}
                <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
              </p>
              <p>
                <strong>Адрес : </strong>
                {order.shippingAddress.city}, {order.shippingAddress.address},{" "}
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
                    )
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
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default OrderScreen
