import React from 'react';
import useStyles from './styles';
import useTheme from '@material-ui/core/styles/useTheme'
import {useMediaQuery , Typography} from '@material-ui/core';
import bidIcon from '../../assets/icons/bid-ic.png'

const Bidding = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));

    return(
       <div>
           <div className={classes.bid_ic}>
               <img src={bidIcon}  />
           </div>
           <div>
               <Typography className={classes.your_Car}>
                   {"Your car will be sold by bidding".toUpperCase()}
               </Typography>
               <Typography className={classes.set_Start}>
                   {"You set the starting price it will be sold for the highest bidder "}
               </Typography>
           </div>
       </div>
    )
};

export default Bidding;