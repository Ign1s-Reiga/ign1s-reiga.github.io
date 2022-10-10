import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { css, Global } from '@emotion/react'

const globalStyle = css`
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    min-height: 100vh;
    background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 50%, #f3e7e9 100%);
  }
  
  * {
    box-sizing: border-box;
  }
`

const App = ({ Component, pageProps }: AppProps) => {
  const [showScreen, setShowScreen] = React.useState(false);
  useEffect(() => {
    setShowScreen(true);
  }, []);

  return (
    showScreen ?
      <>
        <Head>
          <title>Ign1s Reiga - Portfolio</title>
          <meta name='description' content="Ign1s-Reiga's portfolio"/>
          <link rel='icon' href='/icon.png'/>
        </Head>
        <Global styles={ globalStyle }/>
        <Component {...pageProps}/>
      </>
      : ''
  );
};

export default App;
