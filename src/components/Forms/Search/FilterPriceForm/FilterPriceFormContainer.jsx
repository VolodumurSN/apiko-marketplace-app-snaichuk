import React from 'react';
import FilterPrice from './FilterPriceFormComponent';
import { LocalStorage } from '../../../../services/LocalStorage';
import * as Yup from 'yup';
import { productsOperations } from '../../../../modules/products';
import { connect } from 'react-redux';

const FilterPriceContainer = () => {
  const { storeLocale } = LocalStorage;

  const loadProductsByPrice = (price) => {
    storeLocale('price', price);
  };

  const formikProps = {
    validationSchema: Yup.object().shape({
      priceFrom: Yup.number(),
      priceTo: Yup.number(),
    }),
    initialValues: {
      priceFrom: '',
      priceTo: '',
    },
    onSubmit: loadProductsByPrice,
  };

  return <FilterPrice {...{ formikProps }} />;
};

const mapDispatchToProps = {
  fetchLatest: productsOperations.fetchLatest,
};

export default connect(
  null,
  mapDispatchToProps,
)(FilterPriceContainer);
