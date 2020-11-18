import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#e6e6fa" }}>
      <Container>
        <Row>
          <Col className='text-center py-3'>created by Artyom Savossin</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
