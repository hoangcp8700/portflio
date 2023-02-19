import { getLocalStorage, setLocalStorage } from '@api/common/storage';
import useWindowEvents from '@hooks/useWindowEvents';
import { CONSTANTS } from '@utils/constants';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

type DarkModeType = {
  isDarkMode: boolean;
  handleToggle: () => void;
};

interface DarkModeProps {
  children: React.ReactNode;
}

const initialize = {
  isDarkMode: false,
  handleToggle: () => null,
};

// Hook to provide access to context object
export const DarkModeContext = createContext<DarkModeType>(initialize);

export const useDarkMode = () => useContext(DarkModeContext);

const DarkModeProvider: React.FC<DarkModeProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    getLocalStorage(CONSTANTS.LOCAL_STORAGE.THEME) === CONSTANTS.THEME_MODE_OPTIONS.DARK,
  );

  useWindowEvents(
    'storage',
    () => {
      const theme = getLocalStorage(CONSTANTS.LOCAL_STORAGE.THEME);
      setIsDarkMode(theme === CONSTANTS.THEME_MODE_OPTIONS.DARK);
    },
    [],
  );

  useEffect(() => {
    if (isDarkMode) {
      setLocalStorage(CONSTANTS.LOCAL_STORAGE.THEME, CONSTANTS.THEME_MODE_OPTIONS.DARK);
      document.body.classList.add(CONSTANTS.THEME_MODE_OPTIONS.DARK);
    } else {
      document.body.classList.remove(CONSTANTS.THEME_MODE_OPTIONS.DARK);
    }
  }, [isDarkMode]);

  const handleToggle = useCallback(() => {
    setIsDarkMode(!isDarkMode);
  }, [isDarkMode]);

  const value = useMemo(() => ({ isDarkMode, handleToggle }), [handleToggle, isDarkMode]);

  return <DarkModeContext.Provider value={value}>{children}</DarkModeContext.Provider>;
};

export default DarkModeProvider;
