import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
const Header = () => {
  return (
    <header>
      <Navbar expand='md' style={{ backgroundColor: "#9696ea" }}>
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

              <LinkContainer to='/sign-in'>
                <Nav.Link>
                  <i
                    className='fas fa-user'
                    style={{ paddingRight: "3px" }}
                  ></i>
                  Аккаунт
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
