import React from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../actions/userActions';
import { SearchBox } from './SearchBox';
import NavButton from './NavButton';
import { FiBox, FiShoppingCart, FiPhone, FiUser } from 'react-icons/fi';
import FaIcon from './FaIcon';

const Header = () => {
  console.log(window.innerWidth);
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <header>
      <Navbar expand='md' className='m-md-3 m-0 d-flex justify-content-lg-end'>
        <LinkContainer
          to='/cart'
          className='d-md-none justify-conent-end'
          style={{ color: 'black', opacity: '80%' }}
        >
          <Nav.Link className='d-flex justify-conent-end'>
            <i
              className='fas fa-shopping-cart fa-lg'
              style={{ paddingRight: '3px' }}
            ></i>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer
          to='/'
          style={{
            display: 'flex',
            justifyItems: 'flex-bottom',
            margin: '0 15px',
            alignSelf: 'center',
            textAlign: 'center',
          }}
        >
          <Navbar.Brand>
            <h1>
              <strong>Miss Yarn</strong>
            </h1>
          </Navbar.Brand>
        </LinkContainer>
        {window.innerWidth >= 1300 ? (
          <Button
            style={{
              margin: '0 20px',
              alignSelf: 'center',
              justifySelf: 'center',
              display: 'flex',
              flexDirection: 'row',
              height: '60px',
              width: '140px',
              textAlign: 'center',
            }}
            className='d-none d-lg-block y-primary'
          >
            <i
              className='fas fa-bars'
              style={{ paddingRight: '5px', fontSize: '22px' }}
            />
            <a style={{ fontSize: '22px' }}>Каталог</a>
          </Button>
        ) : (
          <></>
        )}
        <div className='d-none d-lg-block flex-grow-1'>
          <Route
            render={({ history }) => <SearchBox history={history} />}
            style={{ marginLeft: '20px' }}
          />
        </div>
        <Navbar.Toggle
          aria-controls='basic-navbar-nav'
          className='border-0'
          style={{ color: 'black' }}
        />
        <Navbar.Collapse
          id='basic-navbar-nav'
          className='align-self-end justify-content-around'
        >
          <Nav className='ml-3'>
            <LinkContainer to='/orders'>
              <Nav.Link>
                <NavButton
                  name='Заказы'
                  icon={<FiBox style={{ fontSize: '35px' }} />}
                />
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/cart'>
              <Nav.Link>
                <NavButton
                  name='Контакты'
                  icon={<FiPhone style={{ fontSize: '35px' }} />}
                />
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/cart' className='d-none d-sm-block d-xs-block'>
              <Nav.Link>
                <NavButton
                  name='Корзина'
                  icon={<FiShoppingCart style={{ fontSize: '35px' }} />}
                />
              </Nav.Link>
            </LinkContainer>
            {userInfo ? (
              <NavButton
                name={
                  <NavDropdown
                    title='Профиль'
                    id='username'
                    style={{ paddingTop: '0px !important' }}
                  >
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>Личный кабинет</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Выйти
                    </NavDropdown.Item>
                  </NavDropdown>
                }
                icon={<FiUser style={{ fontSize: '35px' }} />}
              />
            ) : (
              <LinkContainer to='/sign-in'>
                <Nav.Link>
                  <NavButton
                    name='Аккаунт'
                    icon={<FiUser style={{ fontSize: '35px' }} />}
                  />
                </Nav.Link>
              </LinkContainer>
            )}
            {userInfo && userInfo.isAdmin ? (
              <NavButton
                name={
                  <NavDropdown title='Администрирование' id='admin'>
                    <LinkContainer to='/admin/userlist'>
                      <NavDropdown.Item>Пользователи</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/orderlist'>
                      <NavDropdown.Item>Заказы</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/productlist'>
                      <NavDropdown.Item>Товары</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                }
                icon={<FaIcon icon='fa-user-shield' />}
              />
            ) : (
              <></>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Row className='d-lg-none ml-3 mr-3 mb-4'>
        <Col xs={12}>
          <Route
            render={({ history }) => <SearchBox history={history} />}
            style={{ marginLeft: '20px' }}
          />
        </Col>
      </Row>
      <Row>
        <Col sm={3} xs={2}></Col>
        <Col sm={6} xs={8}>
          <Row style={{ textAlign: 'center', opacity: '80%' }}>
            <LinkContainer to='/yarn'>
              <Col xs={4}>Пряжа</Col>
            </LinkContainer>
            <LinkContainer to='/hooks'>
              <Col xs={4}>Крючки</Col>
            </LinkContainer>
            <LinkContainer to='/sets'>
              <Col xs={4}>Наборы</Col>
            </LinkContainer>
          </Row>
        </Col>
        <Col sm={3} xs={2}></Col>
      </Row>
    </header>
  );
};

export default Header;
