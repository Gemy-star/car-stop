import React from 'react';
import Header from '../../components/layouts/Header/index'
import useStyles from "../../components/layouts/Header/styles";
import Background from "../../components/Background";
import useTheme from '@material-ui/core/styles/useTheme'
import {useMediaQuery} from '@material-ui/core';
const Index = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));

    return (
      <div className={classes.sell_Car_container}>
          <Header />
          <Background/>

      </div>
    )
}

export default Index;