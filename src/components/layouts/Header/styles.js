import {makeStyles} from '@material-ui/core/styles';
import bg_2x from "../../../assets/backgrounds/header-bg@2x.png";

export default makeStyles((theme) => ({
    logo: {
        width: '300px',
        height: '75px',
        margin: '0 280px 30px 140px',
        objectFit: 'contain',
        marginTop: '30px',
        [theme.breakpoints.down('xs')]: {
            width: '154px',
            height: '75px',
            marginLeft: '20px',
            // marginTop:'50px',
            marginBottom: '-66px',
            marginRight: '390px',
            marginTop: '4px',
            objectFit: 'contain',
        },
    },
    bg: {
        width: '108px',
        height: '48px',
        padding: '16px 30px',
        marginRight: '140px',
        marginTop: '48px',
        marginLeft: '1192px',
        borderRadius: '5px',
        backgroundColor: '#ec1c24',
        bottom: '138px',
        '&:hover': {
            backgroundColor: '#ec1c24',
        },
        [theme.breakpoints.down('xs')]: {
            width: '108px',
            height: '48px',
            padding: '16px 30px',
            marginRight: '140px',
            marginTop: '48px',
            marginLeft: '1192px',
            borderRadius: '5px',
            backgroundColor: '#ec1c24',
            bottom: '138px',
        },
    },
    bgTxt: {
        width: '48px',
        height: '16px',
        fontFamily: 'Almarai',
        fontSize: '16px',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1',
        letterSpacing: 'normal',
        color: '#ffffff'
    },


}))