import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
  Toast,
} from 'react-bootstrap';
import { addToCart } from '../actions/cartActions';

import { listProductsDetails } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Meta from '../components/Meta';

const ProductScreen = ({ history, match }) => {
  const dispatch = useDispatch();

  const [qty, setQty] = useState(1);
  const [from, setFrom] = useState('/');
  const [page, setPage] = useState('/');
  const [showAdded, setShowAdded] = useState(false);
  const id = match.params.id;
  const productDetail = useSelector((state) => state.productDetail);
  const { loading, error, product } = productDetail;
  const [sending, setSending] = useState(false);

  useEffect(() => {
    dispatch(listProductsDetails(match.params.id));
  }, [dispatch, match, sending]);

  useEffect(() => {
    setFrom(match.params.from);
    setPage(match.params.page);
  }, [match]);

  const addToCartHandler = () => {
    setShowAdded(true);
    setTimeout(() => setShowAdded(false), 5000);
    setSending(true);
    if (id) {
      dispatch(addToCart(id, 1));
    }
  };
  return (
    <>
      <Meta title={`${product.name}`} />
      <Link
        className='btn btn-dark my-3'
        to={`/${from ? (page ? `${from}/${page}` : from) : ''}`}
      >
        Назад
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger' children={error} />
      ) : (
        <Row>
          <Col sm={12} md={6} lg={4} style={{ width: '100%' }} className='mb-5'>
            <Image
              src={product.image}
              alt={product.name}
              style={{ height: 'auto%', width: '100%' }}
            />
          </Col>
          <Col sm={12} md={6} lg={4} className='mb-5'>
            <Card
              className='shadow-lg rounded-lg p-4 d-flex'
              border='light'
              style={{ height: '100%' }}
            >
              <Card.Title as='h3' className='pt-3 pl-2'>
                <strong>{product.price}〒</strong>
              </Card.Title>
              <Card.Text className='my-auto pl-2'>
                <ul>
                  <li>
                    <div className='mb-2'>✅ Доставка</div>
                  </li>
                  <li>
                    <div>✅ Самовывоз</div>
                  </li>
                </ul>
              </Card.Text>
              {/*product.countInStock ? (
                <Row>
                  <Col>Количество:</Col>
                  <Col>
                    <Form.Control
                      as='select'
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                    >
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                </Row>
              ) : (
                'Нет на складе'
              )*/}
              <Button
                className='y-primary y-primary-border mt-auto mb-2'
                type='button'
                disabled={!product.countInStock}
                onClick={addToCartHandler}
              >
                Добавить в корзину
              </Button>
            </Card>
          </Col>
          <Col sm={12} lg={4}>
            <Toast show={showAdded} style={{ display: 'float' }}>
              <Toast.Header>
                <strong className='mr-auto'>
                  Вы добавили товар в корзину!
                </strong>
              </Toast.Header>
              <Toast.Body>
                Перейдите в корзину, чтобы выбрать количества товара и оформить
                заявку
              </Toast.Body>
            </Toast>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h4>О товаре</h4>
              </ListGroup.Item>
              <ListGroup.Item>
                <ul>
                  {product.description &&
                    product.description.split('\n').map((item, key) => {
                      return (
                        <li>
                          <span key={key}>
                            {<strong>{item.split(':')[0]}:</strong>}
                            {item.split(':')[1]}
                            <br />
                          </span>
                        </li>
                      );
                    })}
                </ul>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;
