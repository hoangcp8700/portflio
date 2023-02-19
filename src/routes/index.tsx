import React, { useMemo } from 'react';
import { CONSTANT_ROUTE } from '@utils/constants';
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom';
import useAuth from '@hooks/useAuth';
import Loading from '@components/atoms/Loading';
import { LayoutDefault, LayoutAuthenticate, LayoutDashboard } from '@components/common/Layout/';
import { ErrorBoundary } from '@components/templates/Error';

import { Cart, Error, ForgotPassword, Home, Introduce, Login, Product, Register, Users } from './PageLazy';

const AppRouter = () => {
  const { redirectIfNotIsAdmin, redirectIfUser, redirectIfNotLogged } = useAuth();
  const router = useMemo(
    () =>
      createBrowserRouter([
        {
          loader: () => null,
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
                {
                  loader: redirectIfNotLogged,
                  path: CONSTANT_ROUTE.CART,
                  element: <Cart />,
                },
                {
                  path: CONSTANT_ROUTE.PRODUCTS,
                  element: <Product />,
                },
                {
                  path: CONSTANT_ROUTE.INTRODUCE,
                  element: <Introduce />,
                },
              ],
            },
            {
              loader: redirectIfNotLogged,
              element: <LayoutDashboard />,
              children: [
                {
                  path: CONSTANT_ROUTE.USERS,
                  loader: redirectIfNotIsAdmin,
                  element: <Users />,
                  errorElement: <ErrorBoundary />,
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
