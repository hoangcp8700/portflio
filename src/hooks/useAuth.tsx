/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
import { redirect } from 'react-router-dom';
import { useCallback } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useAuthenticate } from '@context/AuthenticateContext';
import { getAccessToken, removeAccessToken, setAccessToken } from '@api/common/storage';
import { CONSTANT_ROUTE } from '@utils/constants';
import { baseSlug } from '@utils/functions';
import { AuthRole, LoginFormProps } from '@api/authentication/types';
import { AuthenticateAPI } from '@api';

const useAuth = () => {
  const { user, isAuth, updateAuth, updateUser } = useAuthenticate();

  const { mutateAsync: onFetchProfileAPI, isLoading: profileLoading } = useMutation(AuthenticateAPI.PROFILE);
  const { mutateAsync: onLoginAPI, isLoading: loginLoading } = useMutation(AuthenticateAPI.LOGIN);

  const handleGetMe = async () => {
    try {
      const token = getAccessToken();
      if (token) {
        const response = await onFetchProfileAPI();
        updateUser(response.data);
        updateAuth(true);
      }
    } catch (error) {
      console.error('error', error);
    }
  };

  const handleLogin = useCallback(async (form: LoginFormProps) => {
    try {
      const response = await onLoginAPI(form);
      setAccessToken(response.data.accessToken);
      await handleGetMe();
    } catch (error) {
      console.log('error');
    }
  }, []);

  const handleLogout = useCallback(() => {
    updateUser(undefined);
    updateAuth(false);
    removeAccessToken();
    redirect(baseSlug(CONSTANT_ROUTE.LOGIN));
  }, [updateAuth, updateUser]);

  const redirectIfUser = useCallback(() => {
    if (isAuth) {
      return redirect(baseSlug(CONSTANT_ROUTE.ROOT));
    }
  }, [isAuth]);

  const redirectIfNotLogged = useCallback(() => {
    if (!isAuth) {
      return redirect(baseSlug(CONSTANT_ROUTE.LOGIN));
    }
  }, [isAuth]);

  const redirectIfNotIsAdmin = useCallback(() => {
    if (user?.role !== AuthRole.ADMIN) {
      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw new Response('Authorize', { status: 401 });
    }
  }, [user]);

  return {
    user,
    isAuth,
    profileLoading,
    loginLoading,
    handleGetMe,
    handleLogin,
    handleLogout,
    redirectIfUser,
    redirectIfNotLogged,
    redirectIfNotIsAdmin,
  };
};

export default useAuth;
