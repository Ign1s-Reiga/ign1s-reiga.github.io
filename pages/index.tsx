import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { Avatar, IconButton, Menu} from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { ThemeProvider, useTheme } from '@emotion/react';
import { darkTheme, lightTheme } from 'theme/theme';

export const useDarkMode = (defaultValue: boolean): [isDark: boolean, setDark: (dark: boolean) => void] => {
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
        <div className={styles.main}>
          <Avatar alt={'Ign1s Reiga'} src={'/icon.png'} sx={{ width: 280, height: 280, mb: '2rem' }}/>
          <h1>Hi, There👋</h1>
          <h2>I&apos;m Ign1s Reiga</h2>
          <p style={{ color: 'gray' }}>デザインが思いつかないからこれで放置</p>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Home;
