import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Image from '.';

export default {
  title: 'Components/atoms/Image',
  component: Image,
  argTypes: {
    ratio: {
      control: {
        type: 'select',
        options: ['aspect-w-16 aspect-h-9', 'aspect-w-1 aspect-h-1', 'aspect-w-4 aspect-h-3'],
      },
      defaultValue: 'aspect-w-16 aspect-h-9',
    },
    sizes: {
      control: {
        type: 'select',
        options: ['object-cover', 'object-contain', 'object-fill', 'object-none'],
      },
      defaultValue: 'object-cover',
    },
  },
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => (
  <div style={{ maxWidth: 500 }}>
    <Image {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  src: 'https://picsum.photos/200/300',
};
