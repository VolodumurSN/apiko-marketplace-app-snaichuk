import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { productsOperations } from '../../modules/products';
import Latest from './LatestComponent';

const LatestContainer = (props) => {
  useEffect(() => {
    props.fetchLatest();
  }, []);

  return <Latest {...props} />;
};

const mapStateToProps = (state) => {
  return {
    noMore: state.products.noMore,
    products: state.products.latestItems,
    isLoadingLatest: state.products.latest.isLoading,
    isLoadingMore: state.products.moreLatest.isLoading,
  };
};

const mapDispatchToProps = {
  fetchLatest: productsOperations.fetchLatest,
  fetchMoreLatest: productsOperations.fetchMoreLatest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LatestContainer);
