import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

export const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [deliveryType, setDeliveryType] = useState(
    shippingAddress.deliveryType
  );

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, deliveryType }));
    history.push('/payment');
  };
  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs={12} sm={10} md={8} lg={6}>
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
            <fieldset>
              <Form.Group>
                <Form.Label as='legend'>Способ доставки</Form.Label>

                <Form.Check
                  type='radio'
                  label='самовывоз с ул.Дукенулы'
                  name='formHorizontalRadios'
                  id='самовывоз с ул.Дукенулы'
                  onClick={(e) => {
                    setDeliveryType(e.target.id);
                  }}
                />
                <Form.Check
                  type='radio'
                  label='доставка по Нур-султану (700-1200 тг)'
                  name='formHorizontalRadios'
                  id='доставка по Нур-султану'
                  onClick={(e) => {
                    setDeliveryType(e.target.id);
                  }}
                />
                <Form.Check
                  type='radio'
                  label='Казпочта до 2кг - от 1 до 5 матков (по всему Казахстану - 1000тг)'
                  name='formHorizontalRadios'
                  id='Казпочта до 2кг'
                  onClick={(e) => {
                    setDeliveryType(e.target.id);
                  }}
                />

                <Form.Check
                  type='radio'
                  label='Казпочта до 5кг - от 6 до 15 матков (по всему Казахстану - 1400тг)'
                  name='formHorizontalRadios'
                  id='Казпочта до 5кг'
                  onClick={(e) => {
                    setDeliveryType(e.target.id);
                  }}
                />
                <Form.Check
                  type='radio'
                  label='Казпочта до 7кг - от 16 до 20 матков (по всему Казахстану - 1900тг)'
                  name='formHorizontalRadios'
                  id='Казпочта до 7кг'
                  onClick={(e) => {
                    setDeliveryType(e.target.id);
                  }}
                />
                <Form.Check
                  type='radio'
                  label='Казпочта EMS до двери - до 6кг 2000тг'
                  name='formHorizontalRadios'
                  id='EMS'
                  onClick={(e) => {
                    setDeliveryType(e.target.id);
                  }}
                />
                <Form.Check
                  type='radio'
                  label='Трансопртная компания ( для оптовиков )'
                  name='formHorizontalRadios'
                  id='Транспортная компания'
                  onClick={(e) => {
                    setDeliveryType(e.target.id);
                  }}
                />
                <Form.Check
                  type='radio'
                  label='Другая страна ( индивидуальный расчет )'
                  name='formHorizontalRadios'
                  id='Другая страна'
                  onClick={(e) => {
                    setDeliveryType(e.target.id);
                  }}
                />
              </Form.Group>
            </fieldset>
            <Button type='submit' className='y-primary'>
              Вперед
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ShippingScreen;
