import * as yup from 'yup';

export const CONTACT_VALIDATE = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  content: yup.string(),
});
