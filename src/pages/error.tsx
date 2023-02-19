import Error, { ErrorProps } from '@components/templates/Error';
import React from 'react';

const ErrorPage: React.FC<ErrorProps> = (props) => (
  <div className='p-error'>
    <Error {...props} />
  </div>
);

export default ErrorPage;
