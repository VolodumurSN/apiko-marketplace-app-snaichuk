import React from 'react';
import { connect } from 'react-redux';
import { productsOperations } from '../../modules/products';
import ProductItem from './ProductItemComponent';

const ProductItemContainer = (props) => {
  return <ProductItem {...props} />;
};

const mapDispatchToProps = {
  saveProduct: productsOperations.saveProduct,
  unSaveProduct: productsOperations.unSaveProduct,
};

export default connect(
  null,
  mapDispatchToProps,
)(ProductItemContainer);
