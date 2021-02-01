import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { listProductsMasters } from '../actions/productActions';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import Message from '../components/Message';
import Meta from '../components/Meta';

const BottomsScreen = ({ match }) => {
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productListMasters = useSelector((state) => state.productListMasters);
  const { loading, error, masters, page, pages } = productListMasters;

  useEffect(() => {
    dispatch(listProductsMasters(pageNumber));
  }, [dispatch, pageNumber]);

  return (
    <>
      <Meta title={'Miss Yarn'} />
      <h3>Мастерклассы</h3>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger' children={error} />
      ) : (
        <>
          <Row>
            {masters &&
              masters.map((p) => (
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

export default BottomsScreen;
