import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { CONSTANT_ROUTE } from '@utils/constants';
import RedirectToPage, { DIRECTION } from '@components/molecules/RedirectToPage';
import DarkModeProvider from '@context/DarkModeContext';
import Switch from '@components/atoms/Switch';

interface LayoutProps {}

const LayoutDefault: React.FC<LayoutProps> = () => {
  const location = useLocation();
  return (
    <DarkModeProvider>
      <AnimatePresence initial={false} mode='wait'>
        <main>
          <div>
            <motion.div
              key={location.pathname}
              transition={{ ease: 'easeInOut', duration: 1 }}
              initial={{ opacity: 0, x: 2000 }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{ opacity: 0, x: -1000 }}
            >
              <Outlet />
            </motion.div>

            <Switch />
            <RedirectToPage url={CONSTANT_ROUTE.HOME} direction={DIRECTION.LEFT} />
            <RedirectToPage url={CONSTANT_ROUTE.INTRODUCE} direction={DIRECTION.RIGHT} />
          </div>
        </main>
      </AnimatePresence>
    </DarkModeProvider>
  );
};

export default LayoutDefault;
