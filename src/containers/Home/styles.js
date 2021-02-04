import {makeStyles} from '@material-ui/core/styles';
import red_bg from '../../assets/backgrounds/red-bg.png';
import red_bg_2x from '../../assets/backgrounds/red-bg@2x.png';

export default makeStyles((theme) => ({
    sell_Car_container: {
        width: '100%',
        height: '591vh',
        padding: '30px 0 100px',
        backgroundColor: ' #ffffff',
        [theme.breakpoints.down('xs')]: {
            width: ' 292%',
            height: '822vh',
            backgroundColor: ' #ffffff',

        },
    },
    start_div: {
        display: 'flex',
        position: 'absolute',
        right: '45%',
        top: '95%',
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            position: 'absolute',
            right: '-60%',
            top: '95%',
        },
    },
    start_today: {
        width: '83px',
        height: ' 16px',
        margin: '0 13px 0 0',
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontWeight: ' 500',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1',
        letterSpacing: 'normal',
        color: '#ffffff',
        whiteSpace: 'nowrap'
    },
    wrap_div: {
        display: "flex",
        [theme.breakpoints.down('xs')]: {
            display: "block",
            height: '132vh',
            width: '100%',
        },
    },
    start_btn: {
        width: '147px',
        height: '48px',
        borderRadius: '5px',
        boxShadow: '20px 20px 60px 0 rgba(0, 0, 0, 0.4)',
        backgroundColor: '#ec1c24'
    },
    mask: {
        display: "inline-block",
        width: '50%',
        height: '703px',
        padding: '150px 79px 150px 140px',
        backgroundColor: '#323e47',
        [theme.breakpoints.down('xs')]: {
            display: "block",
            width: '100%',
            height: '83vh',
            padding: '123px 119px 100px 120px',
        },

    },
    red_div: {
        display: "inline-block",
        backgroundImage: `url(${red_bg})`,
        width: '50%',
        height: '703px',
        padding: '269px 99px 269px 100px',
        objectFit: 'contain',
        [theme.breakpoints.down('lg')]: {
            backgroundImage: `url(${red_bg_2x})`,
        },
        [theme.breakpoints.down('xs')]: {
            display: "block",
            width: '100%',
            height: '49vh',
        },
    }
}))