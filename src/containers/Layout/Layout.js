import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from '../app/app';
import theme from '../../theme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme } from '@material-ui/core/styles';
import typographyTheme from '../../theme/typography.theme';
import { useIntl } from 'react-intl';

export default function Layout() {
    const intl = useIntl();
    const [pageLang, setPageLang] = useState('en');
    useEffect(() => {
        if (intl.locale === 'en') {
            setPageLang('en');
        } else {
            setPageLang('ar');
        }
    }, [intl.locale]);
    return (
            <BrowserRouter>
                <CssBaseline />
                <App />
            </BrowserRouter>
    );
}
