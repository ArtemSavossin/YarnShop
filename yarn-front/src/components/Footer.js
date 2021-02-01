import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiPackage, FiMail, FiTruck } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer>
      <div
        className='y-primary'
        style={{
          fontSize: '25px',
          paddingLeft: '0px !important',
          paddingRight: '0px !important',
          marginLeft: '0px !important',
          marginRight: '0px !important',
        }}
      >
        <Row>
          <Col xs={12} className='m-3 text-center'>
            Как тут все работает?
          </Col>
          <Col xs={12} className='my-3 text-center'>
            <Row>
              <Col xs={12}>
                <FiPackage style={{ fontSize: '60px' }} />
              </Col>
              <Col xs={12}>Оставляете заказ</Col>
              <Col xs={12}>
                <Row>
                  <Col xs={0} sm={1} md={2}></Col>
                  <Col
                    xs={12}
                    sm={10}
                    md={8}
                    style={{ fontWeight: '500', fontSize: '15px' }}
                  >
                    - Вы делаете заказ на сайте.
                    <br />- Выбираете товары и складываете их в корзину.
                    <br />- Указываете удобный Вам способ доставки.
                  </Col>
                  <Col xs={0} sm={1} md={2}></Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs={12} className='my-3 text-center'>
            <Row>
              <Col xs={12}>
                <FiMail style={{ fontSize: '60px' }} />
              </Col>
              <Col xs={12}>Ждете письма</Col>
              <Col xs={12}>
                <Row>
                  <Col xs={0} sm={1} md={2}></Col>
                  <Col
                    xs={12}
                    sm={10}
                    md={8}
                    style={{ fontWeight: '500', fontSize: '15px' }}
                  >
                    - Мы обрабатываем Ваш заказ.
                    <br /> - Наш менеджер связывается с вами в течение 24 часов.
                    <br /> - Вы подтверждаете заказ менеджеру.
                  </Col>
                  <Col xs={0} sm={1} md={2}></Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs={12} className='my-3 text-center'>
            <Row>
              <Col xs={12}>
                <FiTruck style={{ fontSize: '60px' }} />
              </Col>
              <Col xs={12}>Доставляем</Col>
              <Col xs={12}>
                <Row>
                  <Col xs={0} sm={1} md={2}></Col>
                  <Col
                    xs={12}
                    sm={10}
                    md={8}
                    style={{ fontWeight: '500', fontSize: '15px' }}
                  >
                    - Вы оплачиваете заказ и доставку.
                    <br />- Мы доставляем Вашу посылку по нужному адресу.
                  </Col>
                  <Col xs={0} sm={1} md={2}></Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
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
              <Col xs={12}>Техподдержка</Col>
              <Col xs={12}>Telegram</Col>
              <Col xs={12}>VK</Col>
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
