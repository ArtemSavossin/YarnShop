import React from "react"
import { Nav } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
const CheckoutSteps = ({ step1, step2, step3 }) => {
  return (
    <Nav className='justify-content-center md-4'>
      <Nav.Item>
        {step1 ? (
          <LinkContainer to='/cart'>
            <Nav.Link>Корзина</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Корзина</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step2 ? (
          <LinkContainer to='/shipping'>
            <Nav.Link>Доставка</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Доставка</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step3 ? (
          <LinkContainer to='/payment'>
            <Nav.Link>Оплата</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Оплата</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  )
}

export default CheckoutSteps
