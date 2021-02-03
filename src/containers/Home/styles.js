import { makeStyles } from '@material-ui/core/styles';
import bg_2x from "../../assets/backgrounds/header-bg@2x.png";

export default makeStyles((theme) => ({
sell_Car_container: {
    width: '1440px',
    height: '4455px',
    padding: '30px 0 100px',
    backgroundColor:' #ffffff',
    [theme.breakpoints.down('xs')]: {
        width: '740px',
        height: '6196px',
        padding: '50px 0 100px',
    },
},
}))