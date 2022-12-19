import type { Meta, StoryObj } from '@storybook/react';
import { Heading, IHeadingProps } from '@ignite-ui/react';

export default {
  title: 'Typography/Heading',
  component: Heading,

  args: {
    children: 'Custom title',
  },
} as Meta<IHeadingProps>;

export const Primary: StoryObj<IHeadingProps> = {};

export const MainHeading: StoryObj<IHeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o headijng será sempre um `h2`, mas podemos alterar isso com a propriedade `as`.',
      },
    },
  },
};
