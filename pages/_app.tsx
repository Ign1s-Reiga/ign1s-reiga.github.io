import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import React from 'react';
import { ThemeProvider } from '../components/ThemeProvider'

function App({ Component, pageProps }: AppProps) {
    return(
        <>
            <Head>
                <title>Ign1s Reiga - Portfolio</title>
                <meta name="description" content="Ign1s-Reiga's portfolio"/>
                <link rel={'icon'} href={'/icon.png'}/>
            </Head>
            <ThemeProvider>
                <Component {...pageProps}/>
            </ThemeProvider>
        </>
    )
}

export default App
