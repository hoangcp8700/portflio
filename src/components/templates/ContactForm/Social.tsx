import React, { useMemo } from 'react';
import Facebook from '@assets/icons/ic_facebook.svg?r';
import Github from '@assets/icons/ic_github.svg?r';
import Linkedin from '@assets/icons/ic_linkedin.svg?r';

interface SocialProps {}

const Social: React.FC<SocialProps> = () => {
  const state = useMemo(
    () => [
      {
        name: 'facebook',
        component: Facebook,
        href: '/',
      },
      {
        name: 'linkedin',
        component: Linkedin,
        href: '/',
      },
      {
        name: 'github',
        component: Github,
        href: '/',
      },
    ],
    [],
  );
  return (
    <div className='flex items-center mx-[-4px]'>
      {state.map((i) => {
        const Component = i.component;
        return (
          <a href={i.href} key={i.name} className='mx-1'>
            <Component className='sm:w-11 sm:h-11 w-10 h-10' />
          </a>
        );
      })}
    </div>
  );
};
export default Social;
