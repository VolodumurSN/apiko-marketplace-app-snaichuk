import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { productsOperations } from '../../modules/products';
import User from './UserComponent';

const UserContainer = (props) => {
  const { id } = useParams();

  useEffect(() => {
    props.fetchSeller(id);
    props.fetchProducts(id);
  }, [id]);

  return <User {...props} />;
};

const mapStateToProps = (state) => {
  return {
    seller: state.products.fetchSeller.seller,
    isSellerLoading: state.products.fetchSeller.isLoading,
    products: state.products.userProducts.items,
    isProductsLoading: state.products.userProducts.isLoading,
  };
};

const mapDispatchToProps = {
  fetchProducts: productsOperations.fetchSellerProducts,
  fetchSeller: productsOperations.fetchSeller,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserContainer);
