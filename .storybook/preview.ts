import type { Preview } from '@storybook/react-vite'

import "../src/styles/variables.css";
import "../src/styles/reset.css";
import "../src/styles/typography.css";

import { withThemeByClassName } from "@storybook/addon-themes";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    withThemeByClassName({
      themes: {
        light: "light-theme",
        dark: "dark-theme",
      },
      defaultTheme: "light",
      parentSelector: "body",
    }),
  ],
};

export default preview;