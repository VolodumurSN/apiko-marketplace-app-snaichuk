import React from 'react';
import { checkPhoto } from '../../utils/checkPhoto';
import s from './ProductItem.module.scss';
import { generatePath, Link } from 'react-router-dom';
import { routes } from '../../routes/BaseRoutes';
import ButtonBookmark from '../Buttons/ButtonBookmark';
import OptimisticHOC from '../HOCs/OptimisticHOC';

const OptimisticBookmarkBtn = OptimisticHOC(ButtonBookmark);

const ProductItem = (props) => {
  const {
    id,
    photos,
    title,
    price,
    saved,
    saveProduct,
    unSaveProduct,
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

      <OptimisticBookmarkBtn
        tiny
        id={id}
        isActive={saved}
        activate={saveProduct}
        deactivate={unSaveProduct}
      />
    </>
  );
};

export default ProductItem;
