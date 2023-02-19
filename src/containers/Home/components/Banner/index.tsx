import React from 'react';
import banner from '@assets/images/banner.jpg';
import Image from '@components/atoms/Image';

const BannerHome: React.FC = () => (
  <div className='bg-black'>
    <Image src={banner} alt='banner' classNameWrapper='h-screen' sizes='object-fill' ratio='0' />
  </div>
);
export default BannerHome;
