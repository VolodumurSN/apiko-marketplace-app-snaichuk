import React from 'react';
import s from './User.module.scss';
import ProductList from '../../components/ProductList';
import ProfileAvatar from '../../components/ProfileAvatar';
import Spinner from '../../components/Spinners/Spinner';

const User = (props) => {
  const {
    seller,
    isSellerLoading,
    products,
    isProductsLoading,
  } = props;

  if (isSellerLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className={s.sellerHead}>
        <ProfileAvatar
          border
          size="x4"
          user={seller}
          photo={seller.avatar}
        />

        <h3 className={s.name}>{seller.fullName}</h3>
        <p className={s.location}>{seller.location}</p>
      </div>

      <div className={s.tabs}>
        <div className={s.tab}>
          <p className={s.tabContent}>0%</p>
          <h4 className={s.tabName}>Positive feedback</h4>
        </div>

        <div className={s.tab}>
          <p className={s.tabContent}>0</p>
          <h4 className={s.tabName}>Sales</h4>
        </div>

        <div className={`${s.tab} ${s.active}`}>
          <p className={s.tabContent}>{products.length}</p>
          <h4 className={s.tabName}>Active listings</h4>
        </div>
      </div>

      {isProductsLoading ? (
        <Spinner />
      ) : (
        <ProductList products={products} />
      )}
    </>
  );
};

export default User;
