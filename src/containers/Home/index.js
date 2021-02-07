import React from 'react';
import Header from '../../components/layouts/Header/index'
import useStyles from "../../containers/Home/styles";
import Background from "../../components/Background";
import useTheme from '@material-ui/core/styles/useTheme'
import {useMediaQuery , Typography , Grid} from '@material-ui/core';
import HowItWorks from "../../components/HowItWorks";
import Bidding from "../../components/Bidding";
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StartToday from "../StartToday";
import Services from "../../components/Services";
const Index = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));

    return (
      <Grid container className={classes.sell_Car_container}>
          <Header />
          <Background/>
          <div className={classes.start_div}>
              <Button
                  className={classes.start_btn}
                  endIcon={<ExpandMoreIcon style={{color:'#ffffff'}}/>}
              >
                  <Typography className={classes.start_today}>
                      Start Today
                  </Typography>
              </Button>
          </div>
          {isSmallScreen ?
            <div className={classes.mob}>
                <div className={classes.mask}>
                    <HowItWorks/>
                </div>
                <div className={classes.red_div}>
                    <Bidding/>
                </div>
            </div>
              :

              <div className={classes.wrap_div}>

                  <div className={classes.mask}>
                      <HowItWorks/>
                  </div>
                  <div className={classes.red_div}>
                      <Bidding/>
                  </div>
              </div>

          }
<StartToday/>
<Services/>
      </Grid>
    )
}

export default Index;