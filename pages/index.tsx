import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Avatar } from '@mui/material';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Ign1s Reiga - Portfolio</title>
                <meta name="description" content="Ign1s Reiga's portfolio"/>
                <link rel={"icon"} href={"/icon.png"}/>
            </Head>
            <div className={styles.main}>
                <Avatar alt={"Ign1s Reiga"} src={"/icon.png"} sx={{ width: 280, height: 280, mb: '2rem' }}/>
                <h1>Hi, There👋</h1>
                <h2>I&apos;m Ign1s Reiga</h2>
                <p style={{ color: "gray" }}>デザインが思いつかないからこれで放置</p>
            </div>
        </div>
    )
}

export default Home
