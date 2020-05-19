import React from 'react';
import { Form, Formik } from 'formik';
import s from './FilterPrice.module.scss';
import Input from '../Forms/Input';

const FilterPrice = ({ formikProps }) => {
  return (
    <Formik {...formikProps}>
      {({ submitForm }) => (
        <Form className={s.container}>
          <Input
            name="priceFrom"
            type="number"
            placeholder="Price from (USD)"
            onBlur={() => submitForm()}
          />

          <span className={s.line} />

          <Input
            name="priceTo"
            type="number"
            placeholder="Price to (USD)"
            onBlur={() => submitForm()}
          />
        </Form>
      )}
    </Formik>
  );
};

export default FilterPrice;
