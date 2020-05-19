import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { productsOperations } from '../../modules/products';
import Bookmarks from './BookmarksComponent';

const BookmarksContainer = (props) => {
  useEffect(() => {
    props.fetchBookmarks();
  }, []);

  return <Bookmarks {...props} />;
};

const mapStateToProps = (state) => {
  return {
    products: state.products.saved.items,
    isLoading: state.products.saved.isLoading,
  };
};

const mapDispatchToProps = {
  fetchBookmarks: productsOperations.fetchSaved,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookmarksContainer);
