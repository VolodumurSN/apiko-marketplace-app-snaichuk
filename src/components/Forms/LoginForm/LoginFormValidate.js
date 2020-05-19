import * as Yup from 'yup';

export const LoginFormValidate = Yup.object().shape({
  email: Yup.string()
    .email('E-mail is not valid!')
    .required('Required'),
  password: Yup.string().required('Password is required!'),
});
