import useAuth from '@hooks/useAuth';
import { CONSTANT_ROUTE } from '@utils/constants';
import { baseSlug } from '@utils/functions';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginContainerProps {}

const LoginContainer: React.FC<LoginContainerProps> = () => {
  const { handleLogin, loginLoading, profileLoading } = useAuth();
  const navigate = useNavigate();

  const onLogin = async () => {
    await handleLogin({ userName: 'test', password: '123' });
    navigate(baseSlug(CONSTANT_ROUTE.HOME));
  };

  return (
    <div>
      LoginContainer Authenticate
      {loginLoading && <h1>login loading</h1>}
      {profileLoading && <h1>profile loading</h1>}
      <button type='button' onClick={onLogin}>
        login now!!
      </button>
    </div>
  );
};

export default LoginContainer;
