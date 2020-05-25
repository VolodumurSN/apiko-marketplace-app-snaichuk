import React from 'react';
import { Formik, Form } from 'formik';
import Button from '../../../Buttons/Button';
import s from './SearchForm.module.scss';
import Input from '../../Input';

const SearchForm = ({ isLoading, formikProps }) => {
  return (
    <Formik {...formikProps}>
      {() => (
        <Form className={s.container}>
          <label className={s.searchBar}>
            <img
              src="/images/icons/search.svg"
              alt="location"
              className={s.icon}
            />

            <Input
              name="search"
              type="text"
              placeholder="Search products by name"
            />
          </label>

          <label className={s.locationBar}>
            <img
              src="/images/icons/location.svg"
              alt="location"
              className={s.icon}
            />

            <Input
              name="location"
              type="text"
              placeholder="Location"
            />
          </label>

          <Button
            label="Search"
            isLoading={isLoading}
            color="#3E3961"
          />
        </Form>
      )}
    </Formik>
  );
};

export default SearchForm;
