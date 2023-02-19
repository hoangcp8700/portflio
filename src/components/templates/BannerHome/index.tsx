import React from 'react';
import Typography from '@components/atoms/Typography';

import CubeAnimation from './components/cubeAnimation';

export interface BannerHomeProps {}

const BannerHome: React.FC<BannerHomeProps> = () => (
  <div className='h-screen'>
    <div>
      <Typography className='text-6xl text-center text-white'>Portfolio</Typography>
    </div>
    <CubeAnimation />
  </div>
);

BannerHome.defaultProps = {};

export default BannerHome;
