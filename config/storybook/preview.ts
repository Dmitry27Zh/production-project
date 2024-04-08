import { ThemeDecorator } from './../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import type { Preview } from "@storybook/react";
import { StyleDecorator } from './../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from './../../src/app/providers/ThemeProvider'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [StyleDecorator, ThemeDecorator(Theme.DARK)]
};

export default preview;
