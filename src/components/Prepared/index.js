import React from 'react';
import useStyles from './styles';
import useTheme from '@material-ui/core/styles/useTheme';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import {
    Typography,
    useMediaQuery,List , ListItem , ListItemIcon , ListItemText
} from '@material-ui/core';


const Prepared = props =>  {
    const classes = useStyles();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div className={classes.prepare_div}>
       <div className={classes.head_txt}>
           <Typography className={classes.get_prepared}>
               {"Get prepared before our call"}
           </Typography>
           <Typography className={classes.required}>
               {"Required Documents & Procedures"}
           </Typography>
       </div>

        {isSmallScreen ?
            <div className={classes.list_mob}>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <FiberManualRecordIcon className={classes.list_dot}/>
                        </ListItemIcon>
                        <ListItemText
                            className={classes.car_must}
                            primary="The car must be brought in good working condition"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <FiberManualRecordIcon className={classes.list_dot} style={{marginTop:'--5% !important'}}/>
                        </ListItemIcon>
                        <ListItemText
                            className={classes.in_case}
                            primary="In case the chassis is not OK, we'll do a registration
test (AED 170 is the cost)."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <FiberManualRecordIcon className={classes.list_dot} style={{marginTop:'--6% !important'}}/>
                        </ListItemIcon>
                        <ListItemText
                            className={classes.comm}
                            primary="The commission is 5% for GCC cars and 7% forimported cars (minimum commission 1000 AED)."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <FiberManualRecordIcon className={classes.list_dot} style={{marginTop:'--11% !important'}}/>
                        </ListItemIcon>
                        <ListItemText
                            className={classes.item_sold}
                            primary="If the item is sold, the check will be deposit in your bank account after 10 working days from the time of auction’s conclusion"/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <FiberManualRecordIcon className={classes.list_dot} style={{marginTop:'-6%'}}/>
                        </ListItemIcon>
                        <ListItemText
                            className={classes.car_Sold}
                            primary="If the car is sold for less than AED 5,000, the company
commission is only AED 500."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <FiberManualRecordIcon className={classes.list_dot} style={{marginTop:'--10% !important'}}/>
                        </ListItemIcon>
                        <ListItemText
                            className={classes.classic_Car}
                            primary="For the classic cars, trucks and heavy equipment, you must bring export test only and the commission is 7% (minimum commission 1000 AED)."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <FiberManualRecordIcon className={classes.list_dot} style={{marginTop:'--6% !important'}}/>
                        </ListItemIcon>
                        <ListItemText
                            className={classes.equipment}
                            primary="For the equipment (generator, scissor lift, electric forklift ..... etc) Tax invoice is required."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <FiberManualRecordIcon className={classes.list_dot} style={{marginTop:'0% !important'}}/>
                        </ListItemIcon>
                        <ListItemText
                            className={classes.well}
                            primary="We'll do a comprehensive test (AED 300 is the cost)."/>
                    </ListItem>
                </List>

            </div>
        :
            <div style={{display: 'inline-block'}}>
                <div className={classes.list_div}>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <FiberManualRecordIcon className={classes.list_dot}/>
                            </ListItemIcon>
                            <ListItemText
                                className={classes.car_must}
                                primary="The car must be brought in good working condition"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <FiberManualRecordIcon className={classes.list_dot} style={{marginTop:'--5% !important'}}/>
                            </ListItemIcon>
                            <ListItemText
                                className={classes.in_case}
                                primary="In case the chassis is not OK, we'll do a registration
test (AED 170 is the cost)."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <FiberManualRecordIcon className={classes.list_dot} style={{marginTop:'--6% !important'}}/>
                            </ListItemIcon>
                            <ListItemText
                                className={classes.comm}
                                primary="The commission is 5% for GCC cars and 7% forimported cars (minimum commission 1000 AED)."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <FiberManualRecordIcon className={classes.list_dot} style={{marginTop:'--11% !important'}}/>
                            </ListItemIcon>
                            <ListItemText
                                className={classes.item_sold}
                                primary="If the item is sold, the check will be deposit in your bank account after 10 working days from the time of auction’s conclusion"/>
                        </ListItem>

                    </List>
                </div>

                <div className={classes.another_list_div}>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <FiberManualRecordIcon className={classes.list_dot} style={{marginTop:'-6%'}}/>
                            </ListItemIcon>
                            <ListItemText
                                className={classes.car_Sold}
                                primary="If the car is sold for less than AED 5,000, the company
commission is only AED 500."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <FiberManualRecordIcon className={classes.list_dot} style={{marginTop:'--10% !important'}}/>
                            </ListItemIcon>
                            <ListItemText
                                className={classes.classic_Car}
                                primary="For the classic cars, trucks and heavy equipment, you must bring export test only and the commission is 7% (minimum commission 1000 AED)."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <FiberManualRecordIcon className={classes.list_dot} style={{marginTop:'--6% !important'}}/>
                            </ListItemIcon>
                            <ListItemText
                                className={classes.equipment}
                                primary="For the equipment (generator, scissor lift, electric forklift ..... etc) Tax invoice is required."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <FiberManualRecordIcon className={classes.list_dot} style={{marginTop:'0% !important'}}/>
                            </ListItemIcon>
                            <ListItemText
                                className={classes.well}
                                primary="We'll do a comprehensive test (AED 300 is the cost)."/>
                        </ListItem>

                    </List>
                </div>
            </div>
        }

    </div>
  );
};

export default Prepared;