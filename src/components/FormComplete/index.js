import React  from 'react';
import useStyles from './styles';
import useTheme from '@material-ui/core/styles/useTheme'
import {useMediaQuery, Typography, Button} from '@material-ui/core';
import Done from '../../assets/icons/done.png'
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
const FormComplete = props =>  {
    const classes = useStyles();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
return (
    <div className={props.error?classes.error_div:classes.rectangle}>
        {props.error ?
            <CancelOutlinedIcon className={classes.error}/>
            : <img src={Done} className={classes.done}/>}
        {props.error?  <Typography className={classes.went_wrong}>
            {"Something went wrong!"}
        </Typography>:   <Typography className={classes.your_inquiry}>
            {"Your inquiry has been sent successfully"}
        </Typography>}
        <Typography className={props.error? classes.been_able : classes.msg_sent }>
            {props.error ?
                "We haven’t been able to send your message, Please check your internet connection and try again"
                :
                "Your message has been sent successfully. Thank you for your enquiry. It has been forwarded to the relevant department and will be dealt within 24 hours"}
        </Typography>
        <Button
            className={props.error? classes.try_btn  : classes.send_another_btn}
            endIcon={<ArrowForwardIosIcon className={ props.error? classes.again_arrow  : classes.whiteArrow } style={{color:'#ffffff'}}/>}
        >
            <Typography className={props.error? classes.try_txt : classes.send_another_txt}>
                {props.error? "Try Again"  : "Send another Inquiry"}
            </Typography>
        </Button>
    </div>
)
}


export default FormComplete;