import { lazy } from 'react';

export const Login = lazy(() => import('@pages/authentication/login'));
export const Register = lazy(() => import('@pages/authentication/register'));
export const ForgotPassword = lazy(() => import('@pages/authentication/forgotPassword'));
export const ResetPassword = lazy(() => import('@pages/authentication/resetPassword'));
export const Cart = lazy(() => import('@pages/cart'));
export const Product = lazy(() => import('@pages/product'));
export const Home = lazy(() => import('@pages/'));
export const Error = lazy(() => import('@pages/error'));
export const Users = lazy(() => import('@pages/users'));
export const Introduce = lazy(() => import('@pages/introduce'));
