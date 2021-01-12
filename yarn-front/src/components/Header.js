import React from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../actions/userActions";
import { SearchBox } from "./SearchBox";
import NavButton from "./NavButton";

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <header>
      <Navbar expand="md" className="m-md-3 m-0">
        <LinkContainer
          to="/cart"
          className="d-md-none"
          style={{ color: "black" }}
        >
          <Nav.Link>
            <NavButton
              name=""
              icon={
                <i
                  className="fas fa-shopping-cart fa-lg"
                  style={{ paddingRight: "3px" }}
                ></i>
              }
            />
          </Nav.Link>
        </LinkContainer>
        <LinkContainer
          to="/"
          style={{
            margin: "0 15px",
            alignSelf: "center",
            justifySelf: "center",
          }}
        >
          <Navbar.Brand>
            <h1>
              <strong>Miss Yarn</strong>
            </h1>
          </Navbar.Brand>
        </LinkContainer>
        {window.innerWidth >= 1074 ? (
          <Button
            style={{
              margin: "0 20px",
              alignSelf: "center",
              justifySelf: "center",
              display: "flex",
              flexDirection: "row",
              height: "60px",
              width: "140px",
              textAlign: "center",
            }}
            className="d-none d-lg-block y-primary"
          >
            <i
              className="fas fa-bars"
              style={{ paddingRight: "5px", fontSize: "22px" }}
            />
            <a style={{ fontSize: "22px" }}>Каталог</a>
          </Button>
        ) : (
          <></>
        )}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border-0"
          style={{ color: "black" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="d-none d-sm-block">
            <Route
              render={({ history }) => <SearchBox history={history} />}
              style={{ marginLeft: "20px" }}
            />
          </div>
          <Nav className="ml-3">
            {/*<LinkContainer to="/cart">
              <Nav.Link>
                <NavButton
                  name="Заказы"
                  icon={
                    <i
                      className="fas fa-boxes fa-2x"
                      style={{ paddingRight: "3px" }}
                    ></i>
                  }
                />
              </Nav.Link>
            </LinkContainer>
                */}
            <LinkContainer to="/cart">
              <Nav.Link>
                <NavButton
                  name="Контакты"
                  icon={
                    <i
                      className={`fas fa-phone fa-${
                        window.innerWidth >= 600 ? "lg" : "2x"
                      }`}
                      style={{ paddingRight: "3px" }}
                    ></i>
                  }
                />
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart" className="d-none d-sm-block d-xs-block">
              <Nav.Link>
                <NavButton
                  name="Корзина"
                  icon={
                    <i
                      className={`fas fa-shopping-cart fa-${
                        window.innerWidth >= 600 ? "lg" : "2x"
                      }`}
                      style={{ paddingRight: "3px" }}
                    ></i>
                  }
                />
              </Nav.Link>
            </LinkContainer>
            {userInfo ? (
              <NavButton
                name={
                  <NavDropdown
                    title="Профиль"
                    id="username"
                    style={{ paddingTop: "0px !important" }}
                  >
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>Личный кабинет</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Выйти
                    </NavDropdown.Item>
                  </NavDropdown>
                }
                icon={
                  <i
                    className={`fas fa-user fa-${
                      window.innerWidth >= 600 ? "lg" : "2x"
                    }`}
                    style={{ paddingRight: "3px" }}
                  ></i>
                }
              />
            ) : (
              <LinkContainer to="/sign-in">
                <Nav.Link>
                  <NavButton
                    name="Аккаунт"
                    icon={
                      <i
                        className={`fas fa-user fa-${
                          window.innerWidth >= 600 ? "lg" : "2x"
                        }`}
                        style={{ paddingRight: "3px" }}
                      ></i>
                    }
                  />
                </Nav.Link>
              </LinkContainer>
            )}
            {userInfo && userInfo.isAdmin ? (
              <NavButton
                name={
                  <NavDropdown title="Администрирование" id="admin">
                    <LinkContainer to="/admin/userlist">
                      <NavDropdown.Item>Пользователи</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/orderlist">
                      <NavDropdown.Item>Заказы</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/productlist">
                      <NavDropdown.Item>Товары</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                }
                icon={
                  <i
                    className="fas fa-user-shield"
                    style={{ paddingRight: "3px" }}
                  ></i>
                }
              />
            ) : (
              <></>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="d-sm-none ml-3 mr-3 mb-4">
        <Route
          render={({ history }) => <SearchBox history={history} />}
          style={{ marginLeft: "20px" }}
        />
      </div>
      <Row>
        <Col sm={3} xs={2}></Col>
        <Col sm={6} xs={8}>
          <Row style={{ textAlign: "center", opacity: "80%" }}>
            <Col xs={4}>Пряжа</Col>
            <Col xs={4}>Крючки</Col>
            <Col xs={4}>Наборы</Col>
          </Row>
        </Col>
        <Col sm={3} xs={2}></Col>
      </Row>
    </header>
  );
};

export default Header;
