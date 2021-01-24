import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col xs={4}>
            <Row>
              <Col>Miss Yarn в соцсетях:</Col>
              <Col>Instagram</Col>
              <Col>VK</Col>
            </Row>
          </Col>
          <Col xs={4} className='text-center py-3'>
            Техподдержка
          </Col>
          <Col xs={4}>
            <Row>
              <Col>Сотрудничество с разработчиками</Col>
              <Col>Дизайнер</Col>
              <Col>Разаработчик сайта</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
