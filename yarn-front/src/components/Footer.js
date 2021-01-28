import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container style={{ opacity: '0.7' }}>
        <Row>
          <Col xs={12} sm={4} className='text-center py-3'>
            <Row className='text-center'>
              <Col xs={12}>Miss Yarn в соцсетях:</Col>
              <Col xs={12}>
                <a
                  href='https://www.instagram.com/miss.yarn/'
                  target='_blank'
                  rel='noreferrer'
                >
                  {' '}
                  Instagram
                </a>
              </Col>
              <Col xs={12}>VK</Col>
            </Row>
          </Col>
          <Col xs={12} sm={4} className='text-center py-3'>
            <Row className='text-center'>
              <Col>Техподдержка</Col>
            </Row>
          </Col>
          <Col xs={12} sm={4} className='text-center py-3'>
            <Row className='text-center'>
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
