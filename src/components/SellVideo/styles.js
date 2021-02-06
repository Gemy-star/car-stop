import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
should_Sell: {
    width:'449px',
    height: '37px',
    margin: '0 56px 10px 0',
    fontFamily: 'Roboto',
fontSize:' 28px',
fontWeight: 'bold',
fontStretch: 'normal',
fontStyle: 'normal',
lineHeight: 'normal',
letterSpacing: '-0.58px',
color: '#000000',
    marginTop: '6%',
    [theme.breakpoints.down('xs')]: {
        margin: ' 0 28px 10px',

    },

},
support_you:{
    width:'272px',
    height:'24px',
    margin: '10px 233px 30px 0',
    fontFamily: 'Roboto',
fontSize: '18px',
fontWeight: '500',
fontStretch: 'normal',
fontStyle: 'normal',
lineHeight: 'normal',
letterSpacing: '-0.37px',
color: '#595f6f',
    [theme.breakpoints.down('xs')]: {
    margin: '10px 117px 30px 116px',

},

},
    startdiv:{
    textAlign:'center',
        width:'100%',
        height:'105vh',
        [theme.breakpoints.down('xs')]: {
            width:'200%',
            height:'87vh',
        },

    },
    video:{
        width: '55%',
        display: 'inline-block',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            display:'block',
        },
    },
    play:{
        width: '15px',
        height: '16px',
        objectFit: 'contain'
    },
    play_circle:{
        width: '50px',
        height: '50px',
        padding: '17px 17px 17px 18px',
        borderRadius: '67px',
boxShadow: '20px 20px 60px 0 rgba(0, 0, 0, 0.4)',
backgroundColor: '#ec1c24',
    },
    we_have:{
        width: '505px',
        height: '42px',
        margin: '0 0 20px',
        fontFamily: 'Roboto',
fontSize: '16px',
fontWeight: 'normal',
fontStretch: 'normal',
fontStyle: 'normal',
lineHeight: 'normal',
letterSpacing: '-0.33px',
color: '#595f6f',
        [theme.breakpoints.down('xs')]: {
            margin: '0 0 20px',
            textAlign:'center',
        },

    },
    ready_sell:{
        width: '154px',
        height: '21px',
        margin: '20px 351px 0 0',
        fontFamily: 'Roboto',
fontSize: '16px',
fontWeight: '500',
fontStretch: 'normal',
fontStyle: 'normal',
lineHeight: 'normal',
letterSpacing: '-0.33px',
color:'#595f6f'
        ,
        [theme.breakpoints.down('xs')]: {
            margin: '20px 176px 0 175px',
        },
    },
}));