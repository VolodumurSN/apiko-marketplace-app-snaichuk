import React from 'react';
import FilterPrice from './FilterPriceComponent';
import * as Yup from 'yup';
import { productsOperations } from '../../modules/products';
import { connect } from 'react-redux';

const FilterPriceContainer = (props) => {
  const loadProductsByPrice = async (queries) => {
    try {
      await props.fetchLatest(queries);
    } catch (err) {
      console.error(err);
    }
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
