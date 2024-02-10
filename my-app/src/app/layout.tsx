"use client";
import { ThemeProvider } from "@emotion/react";
import { Inter } from "next/font/google";
import { Component } from "react";
import { createGlobalStyle } from "styled-components";
import { SWRConfig } from "swr";
import { theme } from "../themes/index";
import GlobalSpinner from "@/components/organisms/GlobalSpinner";
import { AuthContextProvider } from "@/contexts/AuthContext";
import { ApiContext } from "@/types";
import { fetcher } from "@/utils";

const inter = Inter({ subsets: ["latin"] });

const GlobalStyle = createGlobalStyle`
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
  cursor: pointer;
  text-decoration: none;
  transition: .25s;
  color: ${theme.colors.black};
}

ol, ul {
  list-style: none;
}
`;
const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || "/api/proxy",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <ThemeProvider theme={theme}>
        <SWRConfig
          value={{
            shouldRetryOnError: false,
            fetcher,
          }}
        >
          <GlobalStyle />
          <AuthContextProvider context={context}>
            <GlobalSpinner />
            <Component>
              <body className={inter.className}>{children}</body>
            </Component>
          </AuthContextProvider>
          {/* <body className={inter.className}>{children}</body> */}
        </SWRConfig>
      </ThemeProvider>
    </html>
  );
}
