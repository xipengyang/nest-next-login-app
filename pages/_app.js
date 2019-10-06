import App, { Container } from 'next/app';
import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');
body{
    font-family: 'Roboto Mono', monospace;   
}
div#__next, html, body {
    margin: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
 }
  *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}
