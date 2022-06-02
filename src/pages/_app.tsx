import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Global, theme } from "../theme";
import { Layout } from "../components/Layout";

const App: React.VFC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Global />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
);

export default App;
