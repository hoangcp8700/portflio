import React from 'react';
import IntroduceContainer from '@containers/Introduce';
import SEO from '@components/common/SEO';

const Introduce: React.FC = () => (
  <>
    <SEO
      title='Introduce Page'
      description='Introduce page Lorem'
      keyword='Introduce Introduce Introduce'
      imgSrc='https://source.unsplash.com/random'
      themeColor='#f9f'
    />
    <IntroduceContainer />
  </>
);

export default Introduce;
