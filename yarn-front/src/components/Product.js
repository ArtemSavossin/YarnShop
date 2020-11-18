import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import Rating from "../components/Rating"
const Product = ({ product, notYarn }) => {
  return (
    <Link
      to={`/product/${product._id}`}
      style={{ color: "black" }}
      class='text-decoration-none'
    >
      <Card className='my-3 p-3 rounded'>
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant='top' />
        </Link>
        <Card.Title as='div' className='pt-2'>
          <strong>{product.name}</strong>
        </Card.Title>
        <Card.Text as='div'>{product.descript}</Card.Text>
        {notYarn ? (
          <Rating rating={product.rating} text={`${product.numRev} отзывов`} />
        ) : (
          <></>
        )}
        <Card.Text as='h5'>{product.price}〒</Card.Text>
      </Card>
    </Link>
  )
}

export default Product
