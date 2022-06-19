import { createTheme, CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import React, { ReactNode, useState } from 'react';
import themeButton from '../styles/ThemeButton.module.css';

const darkMode = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#232323'
        }
    }
})

const lightMode = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#ffffff'
        }
    }
})

export const ThemeProvider = (props: { children: ReactNode }) => {
    const [theme, setTheme] = useState(false);

    return (
        <MuiThemeProvider theme={theme ? darkMode : lightMode}>
            <CssBaseline/>
            {props.children}
            <div className={themeButton.enableDarkMode}>🌙</div>
        </MuiThemeProvider>
    )
}
