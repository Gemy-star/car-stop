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

    const upTo1280 = useMediaQuery('(min-width:1280px)');
    const upTo960 = useMediaQuery('(min-width:960px)');
    const upTo600 = useMediaQuery('(min-width:600px)');
    const multiplier = upTo1280 ? 0.5 : upTo960 ? 0.4 : upTo600 ? 0.3 : 0.2;

    const nestedTheme = createMuiTheme({
        ...theme,
        typography: {
            ...typographyTheme,
            fontFamily: pageLang === 'en' ? 'DINNextRoundedLTPro' : 'Almarai',
        },

        spacing: (factor) => `${parseFloat(multiplier * factor).toPrecision(2)}rem`,
    });
    return (
        <ThemeProvider theme={nestedTheme}>
            <BrowserRouter>
                <CssBaseline />
                <App />
            </BrowserRouter>
        </ThemeProvider>
    );
}
