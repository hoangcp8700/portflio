import React from 'react';

interface AuthenticatePageProps {
  children: React.ReactNode;
}
const Authenticate: React.FC<AuthenticatePageProps> = ({ children }) => (
  <div>
    Wrapper Authenticate
    {children}
  </div>
);

export default Authenticate;
