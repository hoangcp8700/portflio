import { lazy } from 'react';

export const Login = lazy(() => import('@pages/authentication/login'));
export const Register = lazy(() => import('@pages/authentication/register'));
export const ForgotPassword = lazy(() => import('@pages/authentication/forgotPassword'));
export const ResetPassword = lazy(() => import('@pages/authentication/resetPassword'));
export const Home = lazy(() => import('@pages/'));
export const Error = lazy(() => import('@pages/error'));
