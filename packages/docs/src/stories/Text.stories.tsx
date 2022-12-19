import type { Meta, StoryObj } from '@storybook/react';
import { Text, ITextProps } from '@ignite-ui/react';

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ea.',
  },
} as Meta<ITextProps>;

export const Primary: StoryObj<ITextProps> = {};

export const CustomTag: StoryObj<ITextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
};
