import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { logout } from "../actions/userActions"
const Header = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <header>
      <Navbar expand='md'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Miss Yarn</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i
                    className='fas fa-shopping-cart'
                    style={{ paddingRight: "3px" }}
                  ></i>
                  Корзина
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Профиль</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Выйти
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/sign-in'>
                  <Nav.Link>
                    <i
                      className='fas fa-user'
                      style={{ paddingRight: "3px" }}
                    ></i>
                    Аккаунт
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
