import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { routes } from '../../../routes/BaseRoutes';
import { productsOperations } from '../../../modules/products';
//form
import { AddProductFormValidate } from './AddProductFormValidate';
import AddProductForm from './AddProductFormComponent';

const AddProductFormContainer = (props) => {
  const { push } = useHistory();
  const [isUploadSuccess, setIsUploadSuccess] = useState(false);

  const onError = (actions) => {
    return actions.setFieldError(
      'price',
      'Something went wrong. Please try again',
    );
  };

  const uploadProduct = async (body, actions) => {
    const { title, description, photos, location, price } = body;

    try {
      await props.addProduct({
        title,
        description,
        photos,
        location,
        price,
      });

      setIsUploadSuccess(true);

      setTimeout(() => {
        push(routes.HOME);
      }, 900);
    } catch (err) {
      onError(actions);
    }
  };

  const formikProps = {
    initialValues: {
      title: '',
      location: '',
      description: '',
      photos: [],
      price: '',
    },
    validationSchema: AddProductFormValidate,
    onSubmit: uploadProduct,
  };

  return (
    <AddProductForm {...{ formikProps, isUploadSuccess, ...props }} />
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.products.addProduct.isLoading,
  };
};

const mapDispatchToProps = {
  addProduct: productsOperations.addProduct,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddProductFormContainer);
