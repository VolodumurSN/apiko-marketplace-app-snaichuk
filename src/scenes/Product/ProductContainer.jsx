import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { productsOperations } from '../../modules/products';
import Product from './ProductComponent';

const ProductContainer = (props) => {
  const { id } = useParams();

  useEffect(() => {
    props.fetchProduct(id);
  }, [id]);

  return <Product {...props} />;
};

const mapStateToProps = (state) => {
  return {
    productDetails: state.products.fetchProduct.product,
    isProductLoading: state.products.fetchProduct.isLoading,
  };
};

const mapDispatchToProps = {
  fetchProduct: productsOperations.fetchProduct,
  saveProduct: productsOperations.saveProduct,
  unSaveProduct: productsOperations.unSaveProduct,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductContainer);
