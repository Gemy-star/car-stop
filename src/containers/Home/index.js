import React from 'react';
import Header from '../../components/layouts/Header/index'
import useStyles from "../../containers/Home/styles";
import Background from "../../components/Background";
import useTheme from '@material-ui/core/styles/useTheme'
import {useMediaQuery} from '@material-ui/core';
import HowItWorks from "../../components/HowItWorks";
const Index = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));

    return (
      <div className={classes.sell_Car_container}>
          <Header />
          <Background/>
          <div>
              <div className={classes.mask}>
                   <HowItWorks/>
              </div>
          </div>

      </div>
    )
}

export default Index;