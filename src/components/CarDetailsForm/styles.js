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
            top: '684%',
            // left: '123%',
        },
    },
car_make:{
    width: '82px',
    height: '21px',
    margin: '5px 385px 4px 0',
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
    enter_contact:{
        width: '231px',
        height: '26px',
        margin: '30px 270px 30px 0',
        fontFamily: 'Roboto',
fontSize: '20px',
fontWeight: '500',
fontStretch: 'normal',
fontStyle: 'normal',
lineHeight: 'normal',
letterSpacing: '-0.71px',
color:' #595f6f'
    },
send_query:{
    width: '127px',
    height: '16px',
    fontFamily: 'Roboto',
fontSize: '16px',
fontweight: '500',
fontStretch: 'normal',
fontStyle: 'normal',
lineHeight: '1',
letterSpacing: 'normal',
color:'#ffffff',
whiteSpace:'nowrap'
},
    white_arrow:{
        width: '61px',
        height:'16px',
        objectFit: 'contain'
    },
    bg_field:{
        width: '460px',
        height: '30px',
        margin: '0px 0 5px 1px',
        padding: '5px 191px 4px 30px',
        borderRadius: '5px',
backgroundColor: '#ec1c24'
    },
    err_txt:{
        width: '239px',
        height: '21px',
        fontFamily: 'Roboto',
fontSize: '16px',
fontWeight: 'normal',
fontStretch: 'normal',
fontStyle: 'normal',
lineHeight: 'normal',
letterSpacing: 'normal',
color: '#ffffff',
    },
bg_error:{
    width: '460px',
    height: '50px',
    margin: '15px 0 0',
    padding: '15px 33px 14px 30px',
    borderRadius: '5px',
border: 'solid 1px #ec1c24',
backgroundColor: 'rgba(236, 28, 36, 0.04)',
},
    bg_button:{
        width: '203px',
        height: '50px',
        margin: '50px 298px 0 0',
        padding: '18px 12px 18px 30px',
        borderRadius: '5px',
boxShadow: '20px 20px 60px 0 rgba(0, 0, 0, 0.4)',
backgroundColor: '#ec1c24',
        '&:hover': {
            backgroundColor: '#ec1c24',
        },
    },
    phone:{
        width: '174px',
        height: '21px',
        margin: '21px 280px 2px 0',
        fontFamily: 'Roboto',
fontSize: '16px',
fontWeight: 'normal',
fontStretch: 'normal',
fontStyle: 'normal',
lineHeight: 'normal',
letterSpacing: 'normal',
color: '#595f6f'
    },
    full_name:{
        width: '132px',
        height: '21px',
        margin: '0 308px 0px 0',
        fontFamily: 'Roboto',
fontSize: '16px',
fontWeight: 'normal',
fontStretch: 'normal',
fontStyle: 'normal',
lineHeight: 'normal',
letterSpacing: 'normal',
color: '#595f6f'
    },
    car_Model:{
        width: '88px',
        height: '21px',
        margin: '20px 370px 1px 0',
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