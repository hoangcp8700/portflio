import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export interface ErrorProps {
  statusCode?: number;
  title?: string;
  subTitle?: string;
  redirect?: LinkType;
}

const Error: React.FC<ErrorProps> = ({ title = 'Page Not Found', subTitle, statusCode = 404 }) => (
  <div>
    {title}
    {subTitle}
    {statusCode}
  </div>
);

export const ErrorBoundary = () => {
  const error = useRouteError();
  console.log('ErrorBoundary', error);

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <div>{'"This page doesn\'t exist!"'}</div>;
    }

    if (error.status === 401) {
      return <div>{'"You aren\'t authorized to see this"'}</div>;
    }

    if (error.status === 503) {
      return <div>Looks like our API is down</div>;
    }
  }

  return <div>{JSON.stringify(error)}</div>;
};

export default Error;
