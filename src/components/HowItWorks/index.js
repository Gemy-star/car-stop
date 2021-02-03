import React , {useState} from 'react';
import useTheme from '@material-ui/core/styles/useTheme'
import {useMediaQuery} from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import useStyles from './styles';
import Typography from "@material-ui/core/Typography";
const HowItWorks = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div>
            <Typography className={classes.how_works}>
                {"How it works?"}
            </Typography>
            <Typography className={classes.sell_subtitle}>
                {"Sell Your Car in Three Simple Steps"}
            </Typography>
            <div style={{marginTop:'58px'}}>
                <List dense={true}>

                        <ListItem className={classes.li_margin}>
                            <ListItemIcon>
                                <span className={classes.bg_circle}>
                                   <Typography className={classes.bg_circle_text}>
                {"1"}
            </Typography>
                                </span>
                                <Typography ></Typography>
                            </ListItemIcon>
                            <ListItemText
                                primary={<Typography className={classes.submit_car}>{"Submit Your Car"}</Typography>}
                                secondary={<Typography className={classes.submit_subtitle}>{"Enter your car details for inspection on Emirates Auction."}</Typography>}
                            />
                        </ListItem>

                    <ListItem className={classes.li_margin}>
                        <ListItemIcon>
                                <span className={classes.bg_circle}>
                                   <Typography className={classes.bg_circle_text}>
                {"2"}
            </Typography>
                                </span>
                            <Typography ></Typography>
                        </ListItemIcon>
                        <ListItemText
                            primary={<Typography className={classes.submit_car}>{"Receive Valuation and Offer"}</Typography>}
                            secondary={<Typography className={classes.submit_subtitle}>{"We will check your car and provide you with approved purchase price."}</Typography>}
                        />
                    </ListItem>

                    <ListItem className={classes.li_margin}>
                        <ListItemIcon>
                                <span className={classes.bg_circle}>
                                   <Typography className={classes.bg_circle_text}>
                {"3"}
            </Typography>

                                </span>
                            <Typography ></Typography>
                        </ListItemIcon>
                        <ListItemText
                            primary={<Typography className={classes.submit_car}>{"Get Your Payment"}</Typography>}
                            secondary={<div>
                                <Typography className={classes.submit_subtitle}>
                                    {"After a price is agreed for your car,"}

                                </Typography>
                                <Typography className={classes.submit_subtitle}>
                                    {"we will exchange cash on a day that suits you."}

                                </Typography>
                            </div>
                            }
                        />
                    </ListItem>



                </List>
            </div>
        </div>
    )
}
export default HowItWorks;