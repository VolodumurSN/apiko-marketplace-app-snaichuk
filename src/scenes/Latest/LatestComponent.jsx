import React from 'react';
// import s from './Latest.module.scss';
import ProductList from '../../components/ProductList';
import FilterPriceForm from '../../components/Forms/Search/FilterPriceForm';
import Button from '../../components/Buttons/Button';
import Spinner from '../../components/Spinners/Spinner';

const Latest = ({
  isLoadingLatest,
  isLoadingMore,
  fetchMoreLatest,
  products,
  noMore,
}) => {
  if (isLoadingLatest) {
    return <Spinner />;
  }

  return (
    <>
      <FilterPriceForm />

      <ProductList products={products} />

      {!noMore && (
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
