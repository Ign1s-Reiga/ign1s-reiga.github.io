import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Avatar, IconButton, Menu} from '@mui/material';
import React, { useState, useEffect } from 'react';

const openMenu = () => {

}

const Home: NextPage = () => {
    const [state, setState] = useState(true);

    return (
        <div style={{ padding: '0 2rem' }}>
            <div className={styles.main}>
                <IconButton>

                </IconButton>
                <Menu open={state}></Menu>
                <Avatar alt={'Ign1s Reiga'} src={'/icon.png'} sx={{ width: 280, height: 280, mb: '2rem' }}/>
                <h1>Hi, Thereð</h1>
                <h2>I&apos;m Ign1s Reiga</h2>
                <p style={{ color: 'gray' }}>ãã¶ã¤ã³ãæãã¤ããªãããããã§æ¾ç½®</p>
            </div>
        </div>
    )
}

export default Home
