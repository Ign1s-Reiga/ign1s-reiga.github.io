import Image from 'next/image';
import { Avatar, Link } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Describe from '../components/Describe';
import githubIcon from '../public/github-icon.png';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const styles = {
  main: css`
    justify-content: center;
    align-items: center;
    h1 {
      margin-bottom: 0.5rem;
    }
    h2 {
      margin: 0;
    }
  `,
  about: css`
    display: flex;
    padding: 3rem 0;
    user-select: none;
  `,
  contact: css`
    height: auto;
    display: flex;
    padding: 3rem 0;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    a {
      margin-right: 1.5rem;
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

const Index = () => {
  const [isDarkMode, setDarkMode] = useDarkMode(false);

  return (
    <div css={css`padding: 0 2rem; box-sizing: border-box;`}>
      <Container css={ styles.main }>
        <Avatar alt='Ign1s Reiga' src='/icon.png' sx={{ width: 280, height: 280, mb: '2rem' }}/>
        <h1>Hi, There👋</h1>
        <h2>I&apos;m Ign1s Reiga</h2>
        <p css={css`color: gray;`}>それっぽいデザインにしていく</p>
      </Container>
      <Container css={ styles.about }>
        <Describe
          side='right'
          title='自己紹介'
          desc='高3間近の生活習慣が常に崩壊してる人。'
        />
        <Describe
          side='left'
          title='開発'
          desc='Java,Kotlinを利用したMinecraftのPlugin・Mod開発や、TypeScript+Next.js+MaterialUIでのウェブサイト開発などを行っています。自宅サーバー上で、k8sを利用したマイクラサーバーを構築したりもしています。'
        />
        <Describe
          side='right'
          title='趣味'
          desc='ゲーム好き。Steamゲーをよくやっており、特にやるものはパラドゲーと原神とマイクラ。開発も趣味としてやってる。'
        />
      </Container>
      <Container css={ styles.contact }>
        <Link href='https://twitter.com/rem7953_kogyo/'><img src='./twitter-icon.png' width={48} height={48} alt='twitter-icon' /></Link>
        <Link href='https://github.com/Ign1s-Reiga'><img src='./github-icon.png' width={48} height={48} alt='github-icon' /></Link>
      </Container>
    </div>
  );
};

export default Index;
