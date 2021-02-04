import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    start_today: {
        width: '100%',
        height: '171vh',
        display: 'flex',
    },
    sellvideo_div: {
      display:'flex',
      position:'absolute',
      marginTop: '15%',
right: '57%',
        [theme.breakpoints.down('xs')]: {
            display: 'block',
            height: '12vh',
            marginTop: '46%',
            left: '64%',
        },
    },
    start_div: {
      width:'400px',
      height:'11vh',
        display: 'flex',
        position: 'absolute',
        marginTop: '7%',
right: '59%',
        [theme.breakpoints.down('xs')]: {
            width: '365px',
            height: '12vh',
            marginTop: '13%',
            right: '18%',
        },

    },
    you_are:{
        width: '365px',
        height: '28px',
        margin: '10px 388px 50px 398px',
        fontFamily: 'Roboto',
fontSize:'18px',
fontWeight: 'normal',
fontStretch: 'normal',
fontStyle: 'normal',
lineHeight: '1.56',
letterSpacing: '-0.45px',
textAlign: 'center',
color: '#595f6f',
whiteSpace:'nowrap',
        position: 'absolute',
        marginTop: '10%'
    },
    start_today_txt: {
        width: '175px',
        height: '46px',
        margin: '0 508px 10px 468px',
        fontFamily: 'Roboto',
        fontSize: '35px',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: '-0.73px',
        textAlign: 'center',
        color: '#000000',
        whiteSpace: 'nowrap',

    }

}));
