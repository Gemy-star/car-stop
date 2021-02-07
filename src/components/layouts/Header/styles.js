import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    header_div:{
      width: '100%',
      height: '14vh',
      display:'flex',
        justifyContent:'space-between',
paddingRight: '12%',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            height: '22vh',
            paddingRight: '0',

        },
    },
    logo: {
        width: '300px',
        height: '75px',
        margin: '7px 142px -24px 122px',
        objectFit: 'contain',
        [theme.breakpoints.down('xs')]: {

        },
    },
    bg: {
        width: '108px',
        height: '48px',
        borderRadius: '5px',
        backgroundColor: '#ec1c24',
        marginTop: '4vh',
        '&:hover': {
            backgroundColor: '#ec1c24',
        },
        [theme.breakpoints.down('xs')]: {
            width: '108px',
            height: '48px',
            backgroundColor: '#ec1c24',
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
        color: '#ffffff',

    },


}))