import * as yup from 'yup';

export const AUTH_VALIDATE = yup.object().shape({
  first_name: yup.string().required('first name error !'),
  last_name: yup.string().required('last name error!'),
});
