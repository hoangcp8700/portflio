import React from 'react';

export interface FormGroupProps {
  children: React.ReactNode;
}

const FormGroup: React.FC<FormGroupProps> = ({ children }): JSX.Element => <div className='m-[-8px]'>{children}</div>;

export default FormGroup;
