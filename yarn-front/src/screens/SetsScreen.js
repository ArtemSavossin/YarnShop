import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { listProductsSets } from '../actions/productActions';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import Message from '../components/Message';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';

const SetsScreen = ({ match }) => {
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productListSets = useSelector((state) => state.productListSets);
  const { loading, error, sets, page, pages } = productListSets;

  useEffect(() => {
    dispatch(listProductsSets(pageNumber));
  }, [dispatch, pageNumber]);

  return (
    <>
      <Meta title={'Miss Yarn'} />
      <h3>Наборы</h3>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger' children={error} />
      ) : (
        <>
          <Row>
            {sets &&
              sets.map((p) => (
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
          <Paginate page={page} pages={pages} keyword={''} />
        </>
      )}
    </>
  );
};

export default SetsScreen;
