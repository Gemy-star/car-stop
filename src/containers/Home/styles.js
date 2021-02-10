import {makeStyles} from '@material-ui/core/styles';
import red_bg from '../../assets/backgrounds/red-bg.png';
import red_bg_2x from '../../assets/backgrounds/red-bg@2x.png';

export default makeStyles((theme) => ({
    sell_Car_container: {
        width: '100%',
        height: '591vh',
        padding: '30px 0 100px',
        backgroundColor: ' #ffffff',
        [theme.breakpoints.only('xs')]: {
            width: ' 313%',
            height: '850vh',
            backgroundColor: ' #ffffff',
        },
        [theme.breakpoints.only('sm')]: {
            width: ' 292%',
            height: '822vh',
            backgroundColor: ' #ffffff',

        },
    },
    mob:{
        display: 'block',
        position: 'absolute',
        top: '167%'
    },

    start_div: {
        display: 'flex',
        position: 'absolute',
        right: '48%',
        top: '95%',
        overflow: 'revert',
        zIndex: '10',
        [theme.breakpoints.only('xs')]: {
            display: 'flex',
            position: 'absolute',
            right: '-79%',
            top: '165%',
            zIndex: '10',
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
        position:' absolute',
        top:' 97%',
        [theme.breakpoints.only('xs')]: {
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
        width: '100%',
        height: '703px',
        padding: '141px 107px 116px 145px',
        backgroundColor: '#323e47',
        [theme.breakpoints.only('xs')]: {
            display: "block",
            width: '124%',
            height: '83vh',
            padding: '64px 271px 99px 182px',
        },

    },
    red_div: {
        display: "inline-block",
        backgroundImage: `url(${red_bg})`,
        width: '100%',
        height: '703px',
        padding: '262px 107px 282px 183px',
        objectFit: 'contain',
        [theme.breakpoints.only('lg')]: {
            backgroundImage: `url(${red_bg_2x})`,
        },
        [theme.breakpoints.only('xs')]: {
            display: "block",
            width: '124%',
            height: '49vh',
        },
    }
}))