import AuthenticateProvider from '@context/AuthenticateContext';
import React from 'react';
import { Outlet } from 'react-router-dom';

interface LayoutProps {}

const LayoutBase: React.FC<LayoutProps> = () => (
  <AuthenticateProvider>
    <Outlet />
  </AuthenticateProvider>
);

export default LayoutBase;
