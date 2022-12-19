import type { Meta, StoryObj } from '@storybook/react';
import { Box, IBoxProps, Text } from '@ignite-ui/react';

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: (
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis,
        quos.
      </Text>
    ),
  },
} as Meta<IBoxProps>;

export const Primary: StoryObj<IBoxProps> = {};
