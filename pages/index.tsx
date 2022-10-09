import type { NextPage } from 'next';
import { Avatar, ThemeProvider } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { darkTheme, lightTheme } from 'theme/theme';

const styles = {
  main: css`
    min-height: 90vh;
    padding: 4rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    h1 {
      margin-bottom: 0.5rem;
    }
    h2 {
      margin: 0;
    }
  `
};

const useDarkMode = (defaultValue: boolean): [isDark: boolean, setDark: (dark: boolean) => void] => {
  const KEY_DARK_MODE = 'reiga7953/portfolio/darkmode';
  const [isDarkInternal, setDarkInternal] = useState(defaultValue);

  useEffect(() => {
    const dark = localStorage.getItem(KEY_DARK_MODE) === 'true';
    if (dark !== defaultValue) {
      setDarkInternal(dark);
    }
  }, [setDarkInternal]);

  const setDark = useCallback(
    (isDark: boolean) => {
      localStorage.setItem(KEY_DARK_MODE, isDark ? 'true' : 'false');
      setDarkInternal(isDark);
    }, [setDarkInternal]
  );

  return [isDarkInternal, setDark];
};

const Home: NextPage = () => {
  const [isDarkMode, setDarkMode] = useDarkMode(false);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <div style={{ padding: '0 2rem' }}>
        <div css={styles.main}>
          <Avatar alt='Ign1s Reiga' src='/icon.png' sx={{ width: 280, height: 280, mb: '2rem' }}/>
          <h1>Hi, There👋</h1>
          <h2>I&apos;m Ign1s Reiga</h2>
          <p style={{ color: 'gray' }}>デザインが思いつかないからこれで放置</p>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Home;
