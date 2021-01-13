import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { listProducts } from '../actions/productActions';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import Message from '../components/Message';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  console.log(match.params.type);
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);
  return (
    <>
      <Meta title={'Miss Yarn'} />
      {keyword ? (
        <Link to='/' className='btn btn-dark my-3'>
          Назад
        </Link>
      ) : (
        <></>
      )}
      {!keyword && pageNumber === 1 && (
        <>
          <ProductCarousel />
        </>
      )}
      <h3></h3>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger' children={error} />
      ) : (
        <>
          <h3>Пряжа</h3>
          <h3>Крючки</h3>
          <h3>Наборы</h3>
        </>
      )}
    </>
  );
};

export default HomeScreen;
