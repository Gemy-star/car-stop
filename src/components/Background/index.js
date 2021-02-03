import React , {useState } from 'react';
import useStyles from "../Background/styles";
import useTheme from '@material-ui/core/styles/useTheme';
import Typography from '@material-ui/core/Typography';
import {
    useMediaQuery,
} from '@material-ui/core';

const Background = () =>  {
    const classes = useStyles();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return(
      <div className={classes.header_bg}>
        <span>
              <Typography className={classes.selling_car}>
              {"Selling Your Car Now".toUpperCase()}
          </Typography>
        </span>
        <span className={isSmallScreen ? classes.easier_span_mob : classes.easier_span }>
              <Typography className={classes.easier_ever}>
              {"Is Easier than ever.".toUpperCase()}
          </Typography>
        </span>
      </div>
    );


}


export default Background;