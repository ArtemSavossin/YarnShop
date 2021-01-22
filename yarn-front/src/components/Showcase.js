import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table, Card } from 'react-bootstrap';
import { ProductSM } from './Product';
import {
  listProductsHooks,
  listProductsYarn,
  listProductsSets,
} from '../actions/productActions';
import Loader from './Loader';

const CardMore = ({ to }) => {
  return (
    <Link to={to} style={{ color: 'black' }} className='text-decoration-none'>
      <Card border='light' className='mt-2 shadow rounded-lg'>
        <Card.Body className='m-0'>
          <Card.Text as='h5' className='p-0'>
            Ещё
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export const YarnShowcase = () => {
  const dispatch = useDispatch();

  const productListYarn = useSelector((state) => state.productListYarn);
  const { loading, yarn } = productListYarn;
  useEffect(() => {
    dispatch(listProductsYarn(1));
  }, [dispatch]);

  return (
    <>
      <h3>Пряжа</h3>
      {loading ? (
        <Loader />
      ) : (
        <Table responsive size='sm' className='pt-2'>
          <tbody>
            <tr>
              {yarn.slice(0, 5).map((y) => (
                <td key={y._id}>
                  <ProductSM product={y} table />
                </td>
              ))}
              <td style={{ verticalAlign: 'middle' }}>
                <CardMore to={'/yarn'} />
              </td>
            </tr>
          </tbody>
        </Table>
      )}
    </>
  );
};

export const HooksShowcase = () => {
  const dispatch = useDispatch();

  const productListHooks = useSelector((state) => state.productListHooks);
  const { loading, hooks } = productListHooks;
  useEffect(() => {
    dispatch(listProductsHooks(1));
  }, [dispatch]);

  return (
    <>
      <h3>Крючки</h3>
      <Table responsive size='sm' className='pt-2'>
        {loading ? (
          <Loader />
        ) : (
          <tbody>
            <tr>
              {hooks.slice(0, 5).map((h) => (
                <td key={h._id}>
                  <ProductSM product={h} table />
                </td>
              ))}
              <td style={{ verticalAlign: 'middle' }}>
                <CardMore to={'/hooks'} />
              </td>
            </tr>
          </tbody>
        )}
      </Table>
    </>
  );
};

export const SetsShowcase = () => {
  const dispatch = useDispatch();

  const productListSets = useSelector((state) => state.productListSets);
  const { loading, sets } = productListSets;
  useEffect(() => {
    dispatch(listProductsSets(1));
  }, [dispatch]);

  return (
    <>
      {sets.length ? (
        <>
          <h3>Наборы</h3>
          <Table responsive size='sm' className='pt-2'>
            {loading ? (
              <Loader />
            ) : (
              <tbody>
                <tr>
                  {sets.slice(0, 5).map((s) => (
                    <td key={s._id}>
                      <ProductSM product={s} table />
                    </td>
                  ))}
                  <td style={{ verticalAlign: 'middle' }}>
                    <CardMore to={'/sets'} />
                  </td>
                </tr>
              </tbody>
            )}
          </Table>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
