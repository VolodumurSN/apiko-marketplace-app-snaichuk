import React from 'react';
import s from './Bookmarks.module.scss';
import ProductList from '../../components/ProductList';
import Spinner from '../../components/Spinners/Spinner';

const Bookmarks = (props) => {
  return (
    <>
      <h2 className={s.title}>SAVED ITEMS</h2>
      <span className={s.count}>( {props.products.length} )</span>

      {props.isLoading ? <Spinner /> : <ProductList {...props} />}
    </>
  );
};

export default Bookmarks;
