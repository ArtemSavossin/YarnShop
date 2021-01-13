import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { listProductsYarn } from '../actions/productActions';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import Message from '../components/Message';
import Meta from '../components/Meta';

const YarnScreen = ({ match }) => {
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productListYarn = useSelector((state) => state.productListYarn);
  const { loading, error, yarn, page, pages } = productListYarn;

  useEffect(() => {
    dispatch(listProductsYarn(pageNumber));
  }, [dispatch, pageNumber]);

  return (
    <>
      <Meta title={'Miss Yarn'} />
      <h3>Пряжа</h3>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger' children={error} />
      ) : (
        <>
          <Row>
            {yarn &&
              yarn.map((p) => (
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

export default YarnScreen;
