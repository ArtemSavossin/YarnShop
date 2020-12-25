import React, {useState, useEffect} from "react"
import {Link} from 'react-router-dom'
import {Container,Form, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
//import FormContainer from '../components/FormContainer.js'
import { getUserDetails, updateUserProfile } from '../actions/userActions'


const ProfileScreen = ({history,location}) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector(state => state.userUpdateProfile)
  const { success } = userUpdateProfile

  const userDetails = useSelector(state => state.userDetails)
  const {loading, error, user} = userDetails

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
      if (!user.name) {
        dispatch(getUserDetails('profile'))
      } else {
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [history, userInfo, dispatch, user])

  const submitHandler = (e)=> {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Пароли не совпадают')
    } else {
      dispatch(updateUserProfile({id: user._id, name, email, password}))
    }
  }
  return (
    <Row>
      <Col md = {3}>
      <h2>Профиль</h2>
      {message && <Message variant='danger' children={message} />}
      {success && <Message variant='success'>Профиль обновлен.</Message>}
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
        Обновить
      </Button>
      </Form>
      </>
      )}
      </Col>
      <Col md = {9}>

      </Col>
    </Row>
  )}
export default ProfileScreen
