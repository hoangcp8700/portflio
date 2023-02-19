import Button, { ButtonProps } from '@components/atoms/Button';
import React from 'react';
import { useFormContext } from 'react-hook-form';

export interface FieldSubmitProps extends ButtonProps {}

const FieldSubmit: React.FC<FieldSubmitProps> = ({ children, disabled, ...props }) => {
  const { formState } = useFormContext();
  const { isSubmitting, isDirty, isValid, isSubmitted } = formState;

  const isDisabled = disabled || isSubmitting || (!isDirty && !isValid && isSubmitted);
  const hasErrors = isDirty && !isValid && isSubmitted && !isSubmitting;

  return (
    <Button type='submit' disabled={isDisabled || hasErrors} {...props}>
      {children}
    </Button>
  );
};

export default FieldSubmit;
