/* eslint-disable @typescript-eslint/no-explicit-any */
import { withProperties } from '@utils/functions';
import React, { forwardRef, useEffect, useId, useState } from 'react';
import { FormProvider, useFormContext } from 'react-hook-form';
import Input from '@components/atoms/Input';
import clsx from 'clsx';
import { Beforeunload } from 'react-beforeunload';

import ErrorMessage from './components/ErrorMessage';
import FieldError from './components/FieldError';
import FieldLabel from './components/FieldLabel';
import FormControl from './components/FormControl';
import FieldSubmit from './components/FieldSubmit';
import FormGroup from './components/FormGroup';
import { FormProviderProps, InputControlProps } from './types';

const FormProviderRef: React.ForwardRefRenderFunction<HTMLFormElement, FormProviderProps> = (
  { children, methods, resetAfterSave = true, onSubmit, className },
  ref,
) => {
  const { reset: formReset, formState, handleSubmit: formHandleSubmit } = methods;
  const { isLoading, isSubmitted } = formState;

  const [formId] = useId();

  // RESET FORM
  useEffect(() => {
    if (resetAfterSave && formState.defaultValues && isSubmitted && !isLoading) {
      formReset(formState.defaultValues);
    }
  }, [resetAfterSave, formReset, isLoading, isSubmitted, formState.defaultValues]);

  const onSubmitForm = React.useCallback(
    async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
      event.preventDefault();

      if (typeof event.stopPropagation === 'function') {
        // prevent any outer forms from receiving the event too
        event.stopPropagation();
      }

      return formHandleSubmit(async (values) => {
        try {
          if (onSubmit) {
            await onSubmit(values, formState.defaultValues, formState, methods);
          }
        } catch (error) {
          console.error('Submit Form Error:', error);
        }
      })(event);
    },
    [formHandleSubmit, onSubmit, formState, methods],
  );

  return (
    <>
      {formState.isDirty && <Beforeunload onBeforeunload={(event) => event.preventDefault()} />}
      <FormProvider {...methods}>
        <form className={className} id={formId} ref={ref} onSubmit={onSubmitForm}>
          {children}
        </form>
      </FormProvider>
    </>
  );
};

const Form = forwardRef(FormProviderRef);

export const InputControl: React.FC<InputControlProps> = ({
  label,
  className,
  name,
  required,
  showErrorMessage,
  ...props
}): JSX.Element => {
  const {
    formState: { errors },
  } = useFormContext();

  const [showError, setShowError] = useState(false);

  return (
    <FormControl
      showError={showErrorMessage || showError}
      name={name}
      className={clsx('w-full', className)}
      render={({ field }) => (
        <>
          <FieldLabel name={name} label={label} required={required} />
          <Input {...field} {...props} id={name} error={errors[name]} onShowError={(value) => setShowError(value)} />
        </>
      )}
    />
  );
};

export default withProperties(Form, {
  FieldError,
  FieldLabel,
  ErrorMessage,
  FormControl,
  FieldSubmit,
  InputControl,
  FormGroup,
});
