import React from 'react';
import { Formik, Form } from 'formik';
// import s from './AddForm.module.scss';
import Input from '../Input';
import Button from '../../Buttons/Button';
import PhotosBar from '../PhotosBar';

const AddForm = ({ formikProps, isLoading, isUploadSuccess }) => {
  return (
    <Formik {...formikProps}>
      {({ values }) => (
        <Form>
          <Input
            label="TITLE"
            name="title"
            type="text"
            placeholder="For example: Iron man suit"
          />

          <Input
            label="LOCATION"
            name="location"
            type="text"
            placeholder="For example: Los Angeles, CA"
          />

          <Input
            label="DESCRIPTION"
            name="description"
            type="textarea"
            placeholder="For example: Iron man suit"
          />

          <PhotosBar {...{ values }} multiple />

          <Input
            label="PRICE"
            name="price"
            type="number"
            placeholder="For example: 999"
          />

          <Button
            label="SUBMIT"
            isSuccess={isUploadSuccess}
            isLoading={isLoading}
            color="#349A89"
          />
        </Form>
      )}
    </Formik>
  );
};

export default AddForm;
