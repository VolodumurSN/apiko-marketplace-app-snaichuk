import React from 'react';
import ProductItem from '../ProductItem';
import s from './ProductList.module.scss';

const ProductList = ({ products }) => {
  return (
    <ul className={s.list}>
      {products.map((product) => {
        return (
          <li key={product.id} className={s.item}>
            <ProductItem {...product} />
          </li>
        );
      })}
    </ul>
  );
};

export default ProductList;
