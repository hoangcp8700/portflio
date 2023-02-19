import React from 'react';
import { Outlet } from 'react-router-dom';
import DarkModeProvider from '@context/DarkModeContext';
import Switch from '@components/atoms/Switch';

interface LayoutProps {}

const LayoutDefault: React.FC<LayoutProps> = () => (
  <DarkModeProvider>
    <main>
      <Outlet />
      <Switch />
    </main>
  </DarkModeProvider>
);

export default LayoutDefault;
