import type { Meta, StoryObj } from '@storybook/react';
import { Box, IBoxProps } from '@ignite-ui/react';

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: (
      <>
        <span>test</span>
      </>
    ),
  },
} as Meta<IBoxProps>;

export const Primary: StoryObj<IBoxProps> = {};

export const Big: StoryObj<IBoxProps> = {};
