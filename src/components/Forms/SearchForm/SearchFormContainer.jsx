import React from 'react';
import { connect } from 'react-redux';
import { productsOperations } from '../../../modules/products';
import SearchForm from './SearchFormComponent';

const SearchFormContainer = (props) => {
  const loadSearchProducts = async (queries) => {
    await props.fetchLatest(queries);
  };

  const formikProps = {
    initialValues: {
      search: '',
      location: '',
    },
    onSubmit: loadSearchProducts,
  };

  return <SearchForm {...props} formikProps={formikProps} />;
};

const mapDispatchToProps = {
  fetchLatest: productsOperations.fetchLatest,
};

export default connect(null, mapDispatchToProps)(SearchFormContainer);
