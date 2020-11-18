import React, { useState, useEffect } from "react"
import axios from "axios"
import { Row, Col } from "react-bootstrap"
import Product from "../components/Product"
const HomeScreen = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("/api/products")
      setProducts(res.data)
    }
    fetchProducts()
  }, [])
  return (
    <>
      <h3>Доступная пряжа</h3>
      <Row>
        {products.map((p) => (
          <Col xs={6} sm={6} md={4} lg={3} xl={3} className='p-1'>
            <Product product={p} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
