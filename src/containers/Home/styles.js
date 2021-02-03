import { makeStyles } from '@material-ui/core/styles';
import bg_2x from "../../assets/backgrounds/header-bg@2x.png";

export default makeStyles((theme) => ({
sell_Car_container: {
    width: '100%',
    height: '4455px',
    padding: '30px 0 100px',
    backgroundColor:' #ffffff',
    [theme.breakpoints.down('xs')]: {
        width: '100%',
        height: '6196px',
        padding: '50px 0 100px',
    },
},
    mask:{
        width: '50%',
        height: '703px',
        padding: '150px 79px 150px 140px',
        backgroundColor: '#323e47',
    }
}))