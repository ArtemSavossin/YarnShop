import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Row, Col, Image, ListGroup, Card, Button, Form } from "react-bootstrap"

import { listProductsDetails } from "../actions/productActions"
import Loader from "../components/Loader"
import Message from "../components/Message"

const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1)
  const id = match.params.id
  const dispatch = useDispatch()
  const productDetail = useSelector((state) => state.productDetail)
  const { loading, error, product } = productDetail
  useEffect(() => {
    dispatch(listProductsDetails(match.params.id))
  }, [dispatch, match])
  const addToCartHandler = (match) => {
    history.push(`/cart/${id}?qty=${qty}`)
  }
  return (
    <>
      <Link className='btn btn-dark my-3' to='/'>
        К пряже
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger' children={error} />
      ) : (
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
              <ListGroup.Item>{product.description}</ListGroup.Item>
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
                  {product.countInStock ? (
                    <Row>
                      <Col>Количество:</Col>
                      <Col>
                        <Form.Control
                          as='select'
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  ) : (
                    "Нет на складе"
                  )}
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className='btn-block'
                    type='button'
                    disabled={!product.countInStock}
                    onClick={addToCartHandler}
                  >
                    Добавить в корзину
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  )
}

export default ProductScreen
