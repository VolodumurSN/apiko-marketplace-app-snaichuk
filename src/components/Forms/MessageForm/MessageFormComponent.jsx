import React from 'react';
import { Form, Formik } from 'formik';
import Input from '../Input';
import Button from '../../Buttons/Button';
// import s from './MessageForm.module.scss';

const MessageForm = ({ formikProps, isLoading }) => {
  return (
    <Formik {...formikProps}>
      {() => (
        <Form>
          <Input
            label="MESSAGE"
            name="message"
            type="textarea"
            placeholder="For example: Iron man suit"
          />

          <Button
            label="SUBMIT"
            width={377}
            isLoading={isLoading}
            color="#349A89"
          />
        </Form>
      )}
    </Formik>
  );
};

export default MessageForm;
