// import { motion } from 'framer-motion';

import BannerHome from '@components/templates/BannerHome';
import React from 'react';

import { IntroduceHome } from './components';

const HomeContainer: React.FC = () => (
  <>
    <BannerHome />
    {/* <motion.div
      animate={{
        x: [3000, 2000, 500, 1000, 0],
      }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
        times: [0, 0.2, 0.5, 0.8, 1],
        delay: 0,
      }}
    >
      <BannerHome />
    </motion.div> */}

    <IntroduceHome />
  </>
);

export default HomeContainer;
