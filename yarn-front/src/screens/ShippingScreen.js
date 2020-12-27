import React, { useState } from "react"
import { Form, Button, Container } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { saveShippingAddress } from "../actions/cartActions"
import CheckoutSteps from "../components/CheckoutSteps"

export const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [zipCode, setZipCode] = useState(shippingAddress.zipCode)

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city, zipCode }))
    history.push("/payment")
  }
  return (
    <Container>
      <CheckoutSteps step1 step2 />
      <h2>Доставка</h2>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='address'>
          <Form.Label>Адрес</Form.Label>
          <Form.Control
            type='text'
            placeholder='улица 187, дом 4'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='city'>
          <Form.Label>Город</Form.Label>
          <Form.Control
            type='text'
            placeholder='Нур-султан'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='zip'>
          <Form.Label>Почтовый код</Form.Label>
          <Form.Control
            type='text'
            placeholder='01000'
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary'>
          Вперед
        </Button>
      </Form>
    </Container>
  )
}

export default ShippingScreen
