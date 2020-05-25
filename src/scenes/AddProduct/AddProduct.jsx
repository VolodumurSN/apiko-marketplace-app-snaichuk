import React from 'react';
import s from './AddProduct.module.scss';
import AddForm from '../../components/Forms/AddForm';

const AddProduct = () => {
  return (
    <>
      <div className={s.formBox}>
        <h2 className={s.title}>Add product</h2>

        <AddForm />
      </div>
    </>
  );
};

export default AddProduct;
