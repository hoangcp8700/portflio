import React, { useMemo } from 'react';
import { CONSTANT_ROUTE } from '@utils/constants';
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom';
import useAuth from '@hooks/useAuth';
import Loading from '@components/atoms/Loading';
import { LayoutDefault, LayoutAuthenticate } from '@components/common/Layout/';
import { ErrorBoundary } from '@components/templates/Error';

import { Error, ForgotPassword, Home, Login, Register } from './PageLazy';

const AppRouter = () => {
  const { redirectIfUser, redirectIfNotLogged } = useAuth();
  const router = useMemo(
    () =>
      createBrowserRouter([
        {
          loader: () => null,
          errorElement: <ErrorBoundary />,
          children: [
            {
              path: CONSTANT_ROUTE.ROOT,
              loader: () => redirect(CONSTANT_ROUTE.HOME),
            },
            {
              element: <LayoutDefault />,
              children: [
                {
                  path: CONSTANT_ROUTE.HOME,
                  element: <Home />,
                },
              ],
            },
            {
              element: <LayoutAuthenticate />,
              loader: redirectIfUser,
              // shouldRevalidate: ({ currentUrl }) => currentUrl.pathname === CONSTANT_ROUTE.LOGIN,
              children: [
                {
                  path: CONSTANT_ROUTE.LOGIN,
                  element: <Login />,
                },
                {
                  path: CONSTANT_ROUTE.REGISTER,
                  element: <Register />,
                },
                {
                  path: CONSTANT_ROUTE.FORGOT_PASSWORD,
                  element: <ForgotPassword />,
                },
              ],
            },
            {
              element: <Error />,
              path: '*',
            },
          ],
        },
      ]),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [redirectIfNotLogged],
  );
  return <RouterProvider router={router} fallbackElement={<Loading />} />;
};

export default AppRouter;
