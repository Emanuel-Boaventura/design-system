import type { Meta, StoryObj } from '@storybook/react';
import { Text, ITextProps } from '@ignite-ui/react';

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ea.',
    size: 'md',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<ITextProps>;

export const Primary: StoryObj<ITextProps> = {};

export const StrongTag: StoryObj<ITextProps> = {
  args: {
    children:
      'STRONG Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ea.',
    as: 'strong',
  },
};
