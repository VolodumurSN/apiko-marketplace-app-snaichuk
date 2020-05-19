import React, { useState } from 'react';
import { connect } from 'react-redux';
import { productsOperations } from '../../modules/products';
import ProductItem from './ProductItemComponent';

const ProductItemContainer = (props) => {
  const { id, saved, saveProduct, unSaveProduct } = props;
  const [isBookmark, setIsBookmark] = useState(saved);

  const handleBookmark = () => {
    setIsBookmark(!isBookmark);

    isBookmark ? unSaveProduct(id) : saveProduct(id);
  };

  return (
    <ProductItem
      {...props}
      isBookmark={isBookmark}
      handleBookmark={handleBookmark}
    />
  );
};

const mapDispatchToProps = {
  saveProduct: productsOperations.saveProduct,
  unSaveProduct: productsOperations.unSaveProduct,
};

export default connect(
  null,
  mapDispatchToProps,
)(ProductItemContainer);
