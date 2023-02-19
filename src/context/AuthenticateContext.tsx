import { AuthProfileProps } from '@api/authentication/types';
import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

type AuthenticateContextType<U> = {
  isAuth: boolean;
  user?: U | null | undefined;
  updateAuth: (status: boolean) => void;
  updateUser: (user?: U) => void;
};

interface AuthenticateProviderProps {
  children: React.ReactNode;
}

// Hook to provide access to context object
export const AuthenticateContext = createContext<AuthenticateContextType<AuthProfileProps>>(
  {} as AuthenticateContextType<AuthProfileProps>,
);

export const useAuthenticate = () => useContext(AuthenticateContext);

const AuthenticateProvider: React.FC<AuthenticateProviderProps> = ({ children }) => {
  const [user, setUser] = useState<AuthProfileProps | undefined>();
  const [isAuth, setIsAuth] = useState(false);

  const updateAuth = useCallback((status: boolean) => {
    setIsAuth(status);
  }, []);

  const updateUser = useCallback((data?: AuthProfileProps): void => setUser(data), []);

  const value = useMemo(
    () => ({
      user,
      isAuth,
      updateUser,
      updateAuth,
    }),
    [isAuth, user, updateAuth, updateUser],
  );
  console.log('38', value);

  return <AuthenticateContext.Provider value={value}>{children}</AuthenticateContext.Provider>;
};

export default AuthenticateProvider;
