import React from 'react';
import s from './AddProduct.module.scss';
import AddProductForm from '../../components/Forms/AddProductForm';

const AddProduct = () => {
  return (
    <>
      <div className={s.formBox}>
        <h2 className={s.title}>Add product</h2>

        <AddProductForm />
      </div>
    </>
  );
};

export default AddProduct;
