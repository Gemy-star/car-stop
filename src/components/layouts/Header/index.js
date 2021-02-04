import React from 'react';
import useStyles from './styles';
import useTheme from '@material-ui/core/styles/useTheme';
import {ReactComponent as LOGO} from '../../../assets/logos/logo.svg';

import {
    Button,
    useMediaQuery,
} from '@material-ui/core';


const Header =() => {
    const classes = useStyles();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
   return(
        <div className={classes.header_div}>
           <span>
            <LOGO className={classes.logo}/>
           </span>
            <span>
<Button variant="contained" className={classes.bg}>
    <typography className={classes.bgTxt}>
        العربية
    </typography>
</Button>

            </span>
        </div>
   )
};

export default Header;