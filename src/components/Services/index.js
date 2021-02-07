import React  from 'react';
import useStyles from './styles';
import useTheme from '@material-ui/core/styles/useTheme'
import {useMediaQuery, Typography } from '@material-ui/core';
import Document from  '../../assets/icons/document.svg'
import Clock from  '../../assets/icons/clock.png'
import Star from  '../../assets/icons/shape.svg'



const Services = props =>  {
    const classes = useStyles();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
    return (
        <div className={classes.services_div}>
            <div className={classes.services_txt}>
                <Typography className={classes.why_services}>
                    {"Why use our services?"}
                </Typography>
                <Typography className={classes.we_hour}>
                    {"We operates  24 hour/7 day-a-week telephone, email & remote support services that is staffed to handle any issue or question "}
                </Typography>
            </div>
          <div className={classes.services_card_div}>
                      <div className={classes.services_card}>
                          <img src={Document} className={classes.document}/>
                        <div className={classes.card_div}>
                            <Typography className={classes.easy_txt}>
                                {"Easy Process"}
                            </Typography>
                            <Typography className={classes.save_time}>
                                {"We help you save time and effort. We master how to sell a car privately and have simplified the process of selling a vehicle to make it hassle-free."}
                            </Typography>

                        </div>
                      </div>
              <div className={classes.services_card} style={isSmallScreen? { height:' 246px', margin: '30px 0', padding: '50px 85px'}:{padding:'50px 50px 68px' , margin:'0 40px'}}>
                  <img src={Star} className={classes.shape}/>
                    <div className={classes.card_div}>
                           <Typography className={classes.get_best}>
                               {"Get The Best Return"}
                           </Typography>
                        <Typography className={classes.most_money}>
                            {"Get the most money for your car. Reach serious buyers. Avoid lowball offers. Use our valuation tools for a better price when selling your car."}
                        </Typography>
                    </div>
              </div>
              <div className={classes.services_card} style={isSmallScreen? { height:' 248px', margin: '30px 0 0', padding: '50px 85px'}:{padding:'50px 50px 32px' , margin:'0 0 0 40px'}}>
                  <img src={Clock} className={classes.clock}/>
                  <div className={classes.card_div}>
                      <Typography className={classes.team}>
                          {"Dedicated Team"}
                      </Typography>
                      <Typography className={classes.our_experts}>
                          {"Our seller experts are here to help you at every step of the way via email, phone, or chat all the week days! They help you find real buyers for your car and finalize your deal fast."}
                      </Typography>
                  </div>
              </div>
          </div>
        </div>
    )
}

export default Services;