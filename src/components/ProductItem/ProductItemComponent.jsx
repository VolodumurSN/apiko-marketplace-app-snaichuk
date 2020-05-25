import React from 'react';
import { checkPhoto } from '../../utils/checkPhoto';
import s from './ProductItem.module.scss';
import IconBookmark from '../Icons/IconBookmark';
import { generatePath, Link } from 'react-router-dom';
import { routes } from '../../routes/BaseRoutes';

const ProductItem = (props) => {
  const {
    id,
    photos,
    title,
    price,
    handleBookmark,
    isBookmark,
  } = props;

  return (
    <>
      <Link to={generatePath(routes.PRODUCT, { id })}>
        <img
          src={checkPhoto(photos)}
          className={s.productImg}
          alt="product"
        />
        <h4 className={s.productTitle}>{title}</h4>
        <p className={s.productPrice}>${price}</p>
      </Link>

      <div onClick={handleBookmark} className={s.bookmark}>
        {isBookmark ? (
          <IconBookmark fill="#349A89" painted />
        ) : (
          <IconBookmark fill="#B7B7B7" />
        )}
      </div>
    </>
  );
};

export default ProductItem;
