import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AUTH_VALIDATE } from '@utils/schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import Form from '.';

export default {
  title: 'Components/molecules/Form',
  component: Form,
  argTypes: {},
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = ({ onSubmit }) => {
  const methods = useForm({
    resolver: yupResolver(AUTH_VALIDATE),
    defaultValues: { first_name: '', last_name: '' },
  });

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <Form.InputControl name='first_name' />
      <Form.InputControl name='last_name' showErrorMessage />
      <Form.FormControl
        name='last_name'
        render={({ field }) => (
          <>
            <Form.FieldLabel name='first_name' label='Last Name' required />
            <input {...field} />
          </>
        )}
      />
      <Form.FieldSubmit variants='primary'>submit</Form.FieldSubmit>
    </Form>
  );
};

export const FormDefault = Template.bind({});
FormDefault.args = {
  onSubmit: async (values, defaultValues, formState, formHandlers) => {
    console.log('submit form', values, defaultValues, formState, formHandlers);
  },
};
