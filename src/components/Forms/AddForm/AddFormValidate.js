import * as Yup from 'yup';

export const AddFormValidate = Yup.object().shape({
  title: Yup.string()
    .min(10, 'Title must be longer than 10 characters')
    .required('Required'),
  location: Yup.string(),
  description: Yup.string()
    .min(10, 'Description must be longer than 10 characters')
    .required('Required'),
  price: Yup.number()
    .min(1, 'Price must be greater than zero')
    .required('Required'),
});
