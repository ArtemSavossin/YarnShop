import React from 'react';
import { Card, Container, ListGroup, Row, Col } from 'react-bootstrap';

const HelpScreen = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={9}>
            <Row className='wiki-nav'>
              <Col xs={12} md={6}>
                <Card>
                  <div style={{ padding: '15px', textAlign: 'center' }}>
                    <h5 style={{ paddingBottom: '0', marginBottom: '0' }}>
                      Навигация
                    </h5>
                  </div>
                  <ListGroup>
                    <ListGroup.Item>
                      <a href='#shipping'>Доставка</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <a href='#payment'>Оплата</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <a href='#about'>О нас</a>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
            <div style={{ padding: '20px 0' }}>
              <h3 id='shipping'>Доставка</h3>
              <span className='helpscreen-text'>
                У нас есть несколько способов привезти вам нужные ниточки:
              </span>
              <ul className='list-doted'>
                <li>
                  По городу Нур-Султан доставляем нитки службой "Яндекс", цена
                  зависит от района и оговаривается отдельно. В среднем, это
                  700-1200 тг. Посылку получите на следующий день после оплаты.
                </li>
                <li>
                  По Казахстану отправляем нитки АО "Казпочтой" и стоимость
                  доставки зависит от веса посылки:
                  <ul
                    style={{ paddingLeft: '20px' }}
                    className='list-doted__inside'
                  >
                    <li>до 1 кг (это 3 мотка) = 1000 тг</li>
                    <li>от 1 кг до 5 кг (до 16 мотков) = 1500 тг</li>
                    <li>от 5 до 10 кг (до 30 мотков) = 1800 тг.</li>
                    <li>Посылка придет в течение 5-7 рабочих дней.</li>
                  </ul>
                </li>
                <li>
                  Если нужно доставить оптовую партию ниток (от 30 шт), то будем
                  искать выгодный именно вам вариант доставки: "КазПочта",
                  куръерские службы "AVIS LOGISTIC", "EXLine" и др.
                </li>
                <li>
                  За пределы Казахстана отправляем “КазПочтой” или курьерскими
                  службами “СДЭК”, “КИТ”, “Энергия”.{' '}
                </li>
              </ul>
              <span className='helpscreen-text'>
                Удобный вам способ доставки можно выбрать в "Корзине" при
                оформлении заказа. Приятных покупок!
              </span>
            </div>
            <div style={{ marginTop: '20px' }}>
              <h3 id='payment'>Оплата</h3>
              <span className='helpscreen-text'>
                После оформления заказа наш менеджер свяжется с вами и подберет
                удобный безналичной способ оплаты.
              </span>
            </div>

            <div style={{ marginTop: '20px' }}>
              <h3 id='about'>О нас</h3>
              <span className='helpscreen-text'>О нас</span>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HelpScreen;
