import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox, ICheckboxProps, Box, Text } from '@ignite-ui/react';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as='label'
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
          <Text size='sm'>Accept terms of use</Text>
        </Box>
      );
    },
  ],
} as Meta<ICheckboxProps>;

export const Primary: StoryObj<ICheckboxProps> = {};

// export const Disabled: StoryObj<ICheckboxProps> = {
//   args: {
//     disabled: true,
//   },
// };

// export const WithPrefix: StoryObj<ICheckboxProps> = {
//   args: {
//     prefix: 'cal.com/',
//   },
// };
