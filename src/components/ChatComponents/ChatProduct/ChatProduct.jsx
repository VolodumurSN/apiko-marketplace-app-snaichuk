import React from 'react';
import s from './ChatProduct.module.scss';
import { checkPhoto } from '../../../utils/checkPhoto';

const ChatProduct = ({ photos, title, price, isLink }) => {
  let classProduct = s.product;

  if (isLink) {
    classProduct += ` ${s.link}`;
  }

  return (
    <div className={classProduct}>
      <img src={checkPhoto(photos)} className={s.img} alt="product" />
      <div className={s.productInfo}>
        <p className={s.productName}>{title}</p>
        <span className={s.price}>${price}</span>
      </div>
    </div>
  );
};

export default ChatProduct;
