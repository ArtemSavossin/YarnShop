import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Row, Col } from "react-bootstrap"
import Product from "../components/Product"
import { listProducts } from "../actions/productActions"
import Loader from "../components/Loader"
import Message from "../components/Message"

const HomeScreen = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList
  console.log(products)
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])
  return (
    <>
      <h3>Доступная пряжа</h3>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger' children={error} />
      ) : (
        <Row>
          {products &&
            products.map((p) => (
              <Col
                xs={6}
                sm={6}
                md={4}
                lg={3}
                xl={3}
                className='p-1'
                key={p.name}
              >
                <Product product={p} />
              </Col>
            ))}
        </Row>
      )}
    </>
  )
}

export default HomeScreen
