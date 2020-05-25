import React from 'react';
import { connect } from 'react-redux';
import { productsOperations } from '../../../../modules/products';
import SearchForm from './SearchFormComponent';
import { LocalStorage } from '../../../../services/LocalStorage';

const SearchFormContainer = (props) => {
  const { getLocale } = LocalStorage;

  const loadSearchProducts = async ({ search, location }) => {
    const { priceFrom, priceTo } = getLocale('price');

    if (priceFrom || priceTo) {
      await props.fetchLatest({
        search,
        location,
        priceFrom,
        priceTo,
      });
    } else {
      await props.fetchLatest({ search, location });
    }
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
