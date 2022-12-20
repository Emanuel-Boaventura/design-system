import type { Meta, StoryObj } from '@storybook/react';
import { IAvatarProps, Avatar } from '@ignite-ui/react';

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/emanuel-boaventura.png',
    alt: 'Emanuel Boaventura',
  },
} as Meta<IAvatarProps>;

export const Primary: StoryObj<IAvatarProps> = {};

export const WithFallback: StoryObj<IAvatarProps> = {
  args: {
    src: undefined,
  },
};
