import React, { useEffect } from 'react';
// import s from './Latest.module.scss';
import ProductList from '../../components/ProductList';
import FilterPrice from '../../components/FilterPrice';
import Button from '../../components/Buttons/Button';
import Spinner from '../../components/Spinners/Spinner';

const Latest = ({
  isLoadingLatest,
  isLoadingMore,
  fetchMoreLatest,
  products,
}) => {
  const isMore = products[products.length - 1]?.id !== 1;

  if (isLoadingLatest) {
    return <Spinner />;
  }

  return (
    <>
      <FilterPrice />

      <ProductList products={products} />

      {isMore && (
        <Button
          onClick={() => {
            fetchMoreLatest({
              from: products[products.length - 1].id,
              limit: 20,
            });
          }}
          label="More"
          isLoading={isLoadingMore}
          color="#349A89"
          width={300}
        />
      )}
    </>
  );
};

export default Latest;
