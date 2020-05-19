import * as Yup from 'yup';

export const RegisterFormValidate = Yup.object().shape({
  email: Yup.string()
    .email('E-mail is not valid!')
    .required('Required'),
  fullName: Yup.string()
    .min(5, 'Name is too short')
    .required('Required'),
  password: Yup.string()
    .min(5, 'Password is too short')
    .required('Required'),
  passwordAgain: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password did not match')
    .required('Required'),
});
