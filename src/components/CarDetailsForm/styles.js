import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
enter_car:{
    width: '211px',
    height: '26px',
    margin: '0 290px 30px 0',
    fontFamily: 'Roboto',
fontSize: '20px',
fontWeight: '500',
fontStretch: 'normal',
fontStyle: 'normal',
lineHeight: 'normal',
letterSpacing: '-0.71px',
color: '#595f6f',
    [theme.breakpoints.down('xs')]: {
        margin:' 0 249px 30px 0',

},
},
    form_Div:{
        display:' inline-block',
        position: 'absolute',
        width: '50%',
        left: '123%',
        [theme.breakpoints.down('xs')]: {
            display:'block',
            position: 'absolute',
            width: '100%',
            // left: '123%',
        },
    },
car_make:{
    width: '82px',
    height: '21px',
    margin: '0 378px 15px 0',
    fontFamily: 'Roboto',
fontSize:' 16px',
fontWeight: 'normal',
fontStretch: 'normal',
fontStyle: 'normal',
lineHeight: 'normal',
letterSpacing: 'normal',
color: '#595f6f'
},

    bg:{
        width: '460px',
        height: '50px',
        margin: '15px 0 0',
        padding: '15px 33px 14px 30px',
        borderRadius: '5px',
border: 'solid 1px #bfc4ce',
backgroundColor: '#ffffff'
    },
    car_Model:{
        width: '88px',
        height: '21px',
        margin: '0 372px 15px 0',
        fontFamily: 'Roboto',
fontSize: '16px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#595f6f'

},

    car_makers_txt:{
        width: '54px',
        height: '21px',
        margin: '0 335px 0 0',
        opacity: '0.81',
        fontFamily: 'Roboto',
fontSize: '16px',
fontWeight: 'normal',
fontStretch: 'normal',
fontStyle: 'normal',
lineHeight: 'normal',
letterSpacing: 'normal',
color:'#000000',
    }

}));