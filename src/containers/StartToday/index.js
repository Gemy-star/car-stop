import React , {useContext} from 'react';
import useStyles from './styles';
import useTheme from '@material-ui/core/styles/useTheme'
import {useMediaQuery , Typography} from '@material-ui/core';
import SellVideo from "../../components/SellVideo";
import CarDetailsForm from "../../components/CarDetailsForm";
import {FormContext} from "../../context/FormContext";
import FormComplete from "../../components/FormComplete";



const StartToday = props =>   {
    const classes = useStyles();
    const theme = useTheme();
    const sent = useContext(FormContext)

    console.log("SENT",sent)
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
    return (
        <div className={classes.start_today}>
                <div className={classes.start_div}>
                    <Typography className={classes.start_today_txt}>
                        {"Start today!"}
                    </Typography>

                    <Typography className={classes.you_are}>
                        {"You are just one click away from selling your car."}
                    </Typography>
                </div>
            <div className={classes.sellvideo_div}>
                <SellVideo/>
                {sent[0]?.sent ===   null ? <CarDetailsForm/> :<FormComplete error={true}/>}
            </div>
        </div>
    );
}
export default StartToday;