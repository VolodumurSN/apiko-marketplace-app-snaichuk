import * as Yup from 'yup';

const phoneRegExp = /^\+?3?8?(0\d{9})$/;

export const ProfileFormValidate = Yup.object().shape({
  fullName: Yup.string()
    .min(5, 'Name is too short')
    .required('Required'),
  phone: Yup.string().matches(
    phoneRegExp,
    'Phone number is not valid',
  ),
});
