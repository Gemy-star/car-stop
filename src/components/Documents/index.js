import React from "react";
import useStyles from "./styles";
import useTheme from "@material-ui/core/styles/useTheme";
import {useMediaQuery , Typography} from "@material-ui/core";


const Documents = props => {
    const classes = useStyles();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
return(
    <div className={classes.documents}>
        <Typography className={classes.required}>
            {"Required Documentation"}
        </Typography>
        <div className={classes.div}>
            <Typography className={classes.emirates_id}>
                {"Emirates ID"}
            </Typography>
            <Typography className={ isSmallScreen ? classes.required_mob : classes.certificate} style={{ fontSize: '18px', fontWeight: '500', letterSpacing:' -0.5px' , margin:'-21px 126px 1px 264px'}}>
                {"Possession certificate"}
            </Typography>
           <span className={classes.subtitle}>
                <Typography className={classes.certificate}>
                {"(Dubai certificate or transfer to Dubai)"}
            </Typography>
           </span>
            <span className={classes.bank_pos}>
                    <Typography className={classes.bank_account} >
                {"Bank account details"}
            </Typography>
            </span>

        </div>
    </div>
)
}

export default Documents;