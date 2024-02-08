import { Preview } from "@storybook/react";
import { createGlobalStyle } from "styled-components";
import { theme } from "../src/themes";
import * as NextImage from "next/legacy/image";
import { ThemeProvider } from "@emotion/react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// addDecorator((story) => (
//   <ThemeProvider theme={theme}>
//     <GlobalStyle />
//     {story()}
//   </ThemeProvider>
// ));
export const addDecorator = {
  decorators: [
    (story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {story()}
      </ThemeProvider>
    ),
  ],
};
export const GlobalStyle = createGlobalStyle`
  html,
  body,
  textarea {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    transition: .25s;
    color: #000000;
  }
`;

// Themeの適用

// next/imageの差し替え
