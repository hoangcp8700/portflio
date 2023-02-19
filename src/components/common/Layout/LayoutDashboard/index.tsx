import Link from '@components/atoms/Link';
import { CONSTANT_ROUTE } from '@utils/constants';
import React from 'react';
import { Outlet } from 'react-router-dom';

interface LayoutProps {}

const LayoutDashboard: React.FC<LayoutProps> = () => (
  <>
    <div style={{ backgroundColor: 'blue' }}>
      <div style={{ padding: 10 }}>
        <Link href={CONSTANT_ROUTE.USERS}>USERS page</Link>
      </div>
      <div style={{ padding: 10 }}>
        <Link href={CONSTANT_ROUTE.LOGIN}>LOGIN page</Link>
      </div>
    </div>

    <h2>LayoutDashboard</h2>
    <hr />
    <Outlet />
  </>
);

export default LayoutDashboard;
