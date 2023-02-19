import React from 'react';
import { motion } from 'framer-motion';

import { BannerHome } from './components';

const HomeContainer: React.FC = () => (
  <motion.div
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
  </motion.div>
);

export default HomeContainer;
