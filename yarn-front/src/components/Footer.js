import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col xs={12} sm={4} className='text-center py-3'>
            <Row className='text-center py-3'>
              <Col xs={12}>Miss Yarn в соцсетях:</Col>
              <Col xs={12}>Instagram</Col>
              <Col xs={12}>VK</Col>
            </Row>
          </Col>
          <Col xs={12} sm={4} className='text-center py-3'>
            <Row className='text-center py-3'>
              <Col>Техподдержка</Col>
            </Row>
          </Col>
          <Col xs={12} sm={4} className='text-center py-3'>
            <Row className='text-center py-3'>
              <Col xs={12}>Сотрудничество с разработчиками</Col>
              <Col xs={12}>Дизайнер</Col>
              <Col xs={12}>Разаработчик сайта</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
