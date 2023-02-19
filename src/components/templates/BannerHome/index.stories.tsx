import { Story, Meta } from '@storybook/react';
import React from 'react';

import BannerHome from '.';

export default {
  title: 'Components/templates/BannerHome',
  component: BannerHome,
  argTypes: {},
} as Meta;

export const Normal: Story = () => <BannerHome />;
