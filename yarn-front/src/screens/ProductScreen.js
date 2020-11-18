import React, { useState, useEffect } from "react"
import axios from "axios"

import { Link } from "react-router-dom"
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap"
import Rating from "../components/Rating"

const ProductScreen = ({ match }) => {
  console.log(match.params.id)
  const [product, setProduct] = useState({})

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`/api/products/${match.params.id}`)
      setProduct(res.data)
    }
    fetchProduct()
  }, [])

  return (
    <>
      <Link className='btn btn-dark my-3' to='/'>
        К пряже
      </Link>
      <Row>
        <Col sm={12} md={5}>
          <Image
            src={product.image}
            alt={product.name}
            style={{ maxHeight: "60vh", maxWidth: "90vw" }}
          />
        </Col>
        <Col sm={6} md={4}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h4>{product.name}</h4>
            </ListGroup.Item>
            <ListGroup.Item>{product.descript}</ListGroup.Item>
            <ListGroup.Item>Цена: {product.price}〒</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={6} md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Цена:</Col>
                  <Col>{product.price}〒</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {product.countInStock
                  ? `Доступно : ${product.countInStock} штук`
                  : "Нет на складе"}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={!product.countInStock}
                >
                  Добавить в корзину
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
