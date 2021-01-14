import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
//import FormContainer from '../components/FormContainer.js'
import { login } from '../actions/userActions';

const LoginScreen = ({ history, location }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const redirect = location.search ? location.search.split('=')[1] : '/';

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    //swipe to formContainer from FormContainerJS
    <Container>
      <h2>Вход</h2>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger' children={error} />
      ) : (
        <>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='email'>
              <Form.Label>Введите адрес электронной почты</Form.Label>
              <Form.Control
                type='email'
                placeholder='yarn@mail.ru'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='password'>
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                type='password'
                placeholder='****'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type='submit' className='y-primary'>
              Войти
            </Button>
          </Form>
          <Row className='py-3'>
            <Col>
              Новый пользователь?{' '}
              <Link
                to={redirect ? `/register?redirect=${redirect}` : '/register'}
              >
                Регистрируйся!
              </Link>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};
export default LoginScreen;
