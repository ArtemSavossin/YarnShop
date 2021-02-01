import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Navbar,
  Nav,
  NavDropdown,
  Row,
  Col,
  Button,
  OverlayTrigger,
  Popover,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../actions/userActions';
import { SearchBox } from './SearchBox';
import NavButton from './NavButton';
import {
  FiPackage,
  FiShoppingCart,
  FiPhone,
  FiUser,
  FiHelpCircle,
} from 'react-icons/fi';
import FaIcon from './FaIcon';

const catalogPopover = (
  <Popover id='popover-basic'>
    <Popover.Content>
      <LinkContainer className='pointer' to='/yarn'>
        <div className='p-2'>
          <h3> Пряжа</h3>
        </div>
      </LinkContainer>
      <LinkContainer className='pointer' to='/hooks'>
        <div className='p-2'>
          <h3>Крючки</h3>
        </div>
      </LinkContainer>
      <LinkContainer className='pointer' to='/bottoms'>
        <div className='p-2'>
          <h3>Донышки</h3>
        </div>
      </LinkContainer>
      <LinkContainer className='pointer' to='/sets'>
        <div className='p-2'>
          <h3>Наборы</h3>
        </div>
      </LinkContainer>
      <LinkContainer className='pointer' to='/masters'>
        <div className='p-2'>
          <h3>Мастерклассы</h3>
        </div>
      </LinkContainer>
    </Popover.Content>
  </Popover>
);

const Header = () => {
  const dispatch = useDispatch();

  const [showAdded, setShowAdded] = useState(false);
  const [showExtra, setShowExtra] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

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
            <>
              <FiShoppingCart
                style={{ paddingRight: '3px', fontSize: '28px' }}
              ></FiShoppingCart>
              {cartItems.length ? (
                <span className='cart-active-small'>*</span>
              ) : (
                <></>
              )}
            </>
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
          <>
            <OverlayTrigger
              trigger='click'
              placement='bottom'
              overlay={catalogPopover}
              show={showAdded}
              style={{
                margin: '0 20px',
                alignSelf: 'center',
                justifySelf: 'center',
              }}
            >
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
                onClick={() => {
                  setShowAdded(!showAdded);
                  setTimeout(() => setShowAdded(false), 5000);
                }}
              >
                <i
                  className='fas fa-bars'
                  style={{ paddingRight: '5px', fontSize: '22px' }}
                />
                <span style={{ fontSize: '22px' }}>Каталог</span>
              </Button>
            </OverlayTrigger>
          </>
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
            <LinkContainer className='pointer' to='/help'>
              <Nav.Link>
                <NavButton
                  name='Помощь'
                  icon={<FiHelpCircle style={{ fontSize: '35px' }} />}
                />
              </Nav.Link>
            </LinkContainer>
            <LinkContainer className='pointer' to='/contacts'>
              <Nav.Link>
                <NavButton
                  name='Контакты'
                  icon={<FiPhone style={{ fontSize: '35px' }} />}
                />
              </Nav.Link>
            </LinkContainer>
            <LinkContainer className='pointer' to='/orders'>
              <Nav.Link>
                <NavButton
                  name='Заказы'
                  icon={<FiPackage style={{ fontSize: '35px' }} />}
                />
              </Nav.Link>
            </LinkContainer>
            <LinkContainer
              to='/cart'
              className='d-none d-sm-block d-xs-block pointer'
            >
              <Nav.Link>
                <NavButton
                  name='Корзина'
                  icon={
                    <>
                      <FiShoppingCart style={{ fontSize: '35px' }} />
                      {cartItems.length ? (
                        <span className='cart-active'>*</span>
                      ) : (
                        <></>
                      )}
                    </>
                  }
                />
              </Nav.Link>
            </LinkContainer>
            {userInfo ? (
              <NavButton
                className='pointer'
                name={
                  <NavDropdown
                    title='Профиль'
                    id='username'
                    style={{ paddingTop: '0px !important' }}
                  >
                    <LinkContainer className='pointer' to='/profile'>
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
              <LinkContainer className='pointer' to='/sign-in'>
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
                    <LinkContainer className='pointer' to='/admin/userlist'>
                      <NavDropdown.Item>Пользователи</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer className='pointer' to='/admin/orderlist'>
                      <NavDropdown.Item>Заказы</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer className='pointer' to='/admin/productlist'>
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
      <Row className='d-lg-none ml-3 mr-3 mb-4 mt-xs-n3'>
        <Col xs={12}>
          <Route
            render={({ history }) => <SearchBox history={history} />}
            style={{ marginLeft: '20px' }}
          />
        </Col>
      </Row>
      <Row className='mt-n3'>
        <Col sm={1} xs={2}></Col>
        <Col xs={10} className='d-none d-sm-block'>
          <Row style={{ textAlign: 'center', opacity: '80%' }}>
            <LinkContainer className='pointer' to='/yarn'>
              <Col xs={2}>Пряжа</Col>
            </LinkContainer>
            <LinkContainer className='pointer' to='/hooks'>
              <Col xs={2}>Крючки</Col>
            </LinkContainer>
            <LinkContainer className='pointer' to='/bottoms'>
              <Col xs={2}>Донышки</Col>
            </LinkContainer>
            <LinkContainer className='pointer' to='/sets'>
              <Col xs={2}>Наборы</Col>
            </LinkContainer>
            <LinkContainer className='pointer' to='/masters'>
              <Col xs={2}>Мастер-классы</Col>
            </LinkContainer>
            <LinkContainer className='pointer' to='/help'>
              <Col xs={2}>Что делать?</Col>
            </LinkContainer>
          </Row>
        </Col>
        <Col xs={8} className='d-block d-sm-none'>
          <Row style={{ textAlign: 'center', opacity: '80%' }}>
            <Col
              xs={6}
              onClick={() => {
                setShowExtra(!showExtra);
                setTimeout(() => {
                  setShowExtra(false);
                }, 5000);
              }}
            >
              Товары &#x25BC;
            </Col>
            <LinkContainer className='pointer' to='/help'>
              <Col xs={6}>Подсказки</Col>
            </LinkContainer>
          </Row>
        </Col>
        <Col sm={1} xs={2}></Col>
        {showExtra ? (
          <Col xs={12}>
            <Row style={{ textAlign: 'center', opacity: '80%' }}>
              <LinkContainer className='pointer' to='/yarn'>
                <Col xs={2}>Пряжа</Col>
              </LinkContainer>
              <LinkContainer className='pointer' to='/hooks'>
                <Col xs={2}>Крючки</Col>
              </LinkContainer>
              <LinkContainer className='pointer' to='/bottoms'>
                <Col xs={4}>Донышки</Col>
              </LinkContainer>
              <LinkContainer className='pointer' to='/sets'>
                <Col xs={2}>Наборы</Col>
              </LinkContainer>
              <LinkContainer className='pointer' to='/masters'>
                <Col xs={2}>MK</Col>
              </LinkContainer>
            </Row>
          </Col>
        ) : (
          <></>
        )}
      </Row>
    </header>
  );
};

export default Header;
