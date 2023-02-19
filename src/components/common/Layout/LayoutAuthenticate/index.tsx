import Link from '@components/atoms/Link';
import { CONSTANT_ROUTE } from '@utils/constants';
import React from 'react';
import { Outlet } from 'react-router-dom';

interface LayoutProps {}

const LayoutAuthenticate: React.FC<LayoutProps> = () => (
  <>
    <div style={{ backgroundColor: 'yellow' }}>
      <div style={{ padding: 10 }}>
        <Link href={CONSTANT_ROUTE.REGISTER}>REGISTER page</Link>
      </div>
      <div style={{ padding: 10 }}>
        <Link href={CONSTANT_ROUTE.FORGOT_PASSWORD}>FORGOT PASSWORD page</Link>
      </div>
      <div style={{ padding: 10 }}>
        <Link href={CONSTANT_ROUTE.HOME}>HOME PASSWORD page</Link>
      </div>
    </div>

    <h2>LAYOUT Authenticate</h2>
    <hr />
    <Outlet />
  </>
);

export default LayoutAuthenticate;
