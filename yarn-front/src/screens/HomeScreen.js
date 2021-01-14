import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
import {
  HooksShowcase,
  YarnShowcase,
  SetsShowcase,
} from '../components/Showcase';
import { listProducts } from '../actions/productActions';

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const error = false;
  const loading = false;
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
          <YarnShowcase />
          <HooksShowcase />
          <SetsShowcase />
        </>
      )}
    </>
  );
};

export default HomeScreen;
