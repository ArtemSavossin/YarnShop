import React, {useState, useEffect} from "react"
import {Link} from 'react-router-dom'
import {Container,Form, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
//import FormContainer from '../components/FormContainer.js'
import {register} from '../actions/userActions'


const RegisterScreen = ({history,location}) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const redirect = location.search ? location.search.split('=')[1] : '/'

  const dispatch = useDispatch()

  const userRegister = useSelector(state => state.userRegister)
  const {loading, error, userInfo} = userRegister

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e)=> {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Пароли не совпадают')
    } else {
      dispatch(register(name, email, password))
    }
  }
  return (
    //swipe to formContainer from FormContainerJS
    <Container>
      <h2>Регистрация</h2>
      {message && <Message variant='danger' children={message} />}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger' children={error} />
      ) : (
        <>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Введите ваше Имя</Form.Label>
          <Form.Control
          type='name'
          placeholder='Айгуль Муратова'
          value={name}
          onChange={(e) => setName(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>Введите адрес электронной почты</Form.Label>
          <Form.Control
          type='email'
          placeholder='yarn@mail.ru'
          value={email}
          onChange={(e) => setEmail(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>Пароль</Form.Label>
          <Form.Control
          type='password'
          placeholder='****'
          value={password}
          onChange={(e) => setPassword(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId='confirmPassword'>
          <Form.Label>Повторите пароль</Form.Label>
          <Form.Control
          type='password'
          placeholder='****'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control>
        </Form.Group>

      <Button type='submit' variant='primary'>
        Зарегистрироваться
      </Button>
      </Form>
      <Row className = 'py-3'>
        <Col>
          Уже есть аккаунт? <Link to={redirect? `/login?redirect=${redirect}`: '/login'}>Войти</Link>
        </Col>
      </Row>
      </>
      )}
    </Container>
  )}
export default RegisterScreen
