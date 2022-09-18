import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';

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
          <meta name="description" content="Ign1s-Reiga's portfolio"/>
          <link rel={'icon'} href={'/icon.png'}/>
        </Head>
        <Component {...pageProps}/>
      </>
      : ''
  );
};

export default App;
