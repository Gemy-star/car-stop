import {makeStyles} from '@material-ui/core/styles';
import bg_2x from "../../assets/backgrounds/header-bg@2x.png";

export default makeStyles((theme) => ({
prepare_div:{
    display:'flex',
    position:'absolute',
    width:'100%',
    height:'120vh',
    top:'429%',
},
get_prepared: {
    width:'421px',
    height: '62px',
    margin: '0 207px 10px',
    fontFamily: 'Roboto',
fontSize: '35px',
fontWeight: 'bold',
fontStretch: 'normal',
fontStyle: 'normal',
lineHeight: '1.77',
letterSpacing: '-0.73px',
textAlign: 'center',
color: '#000000',
    [theme.breakpoints.down('xs')]: {
        width: '421px',
        height: '62px',
        margin: '1px 180px 10px',
},
},
    required:{
        width: '835px',
        height: '24px',
        margin: '10px 0 0',
        fontFamily: 'Roboto',
fontSize: '18px',
fontWeight: 'normal',
fontStretch: 'normal',
fontStyle: 'normal',
lineHeight: 'normal',
letterSpacing: '-0.45px',
textAlign: 'center',
color: '#595f6f',
        [theme.breakpoints.down('xs')]: {
            width: '269px',
            height: '24px',
            margin: '10px 77px 0 234px',
        },
    },
    head_txt:{
        display: 'block',
        position: 'absolute',
        top: '2%',
        right: '22%',
        [theme.breakpoints.down('xs')]: {
            top: '240%',
            left: '38%',
            right:'0'
        },

    },
    car_must:{
        width: '377px',
        height: '26px',
        margin: '0 0 0 20px',
        fontFamily: 'Roboto',
fontSize: '18px',
fontWeight: '300',
        fontStretch: 'normal',
fontStyle: 'normal',
lineHeight:' 1.44',
letterSpacing: '-0.5px',
color: '#595f6f',
        [theme.breakpoints.down('xs')]: {
            width: '377px',
            height: '26px',
            margin: '0 0 0 20px'
        },
    },
    list_mob:{
        position: 'absolute',
        top: '261%',
        left: '67%'
    },
    list_dot:{
        color:' #ec1c24',
        width:'14px',
        height: '14px',
        marginLeft: '86%',
        borderRadius: '67px',
boxShadow: '20px 20px 60px 0 rgba(0, 0, 0, 0.4)',
        textAlign:'center',
    },
list_div:{
    position: 'absolute',
    top: '20%',
    left: '10%'
},
    well:{
        width: '382px',
        height: '26px',
        margin: '0 0 0 20px',
        fontFamily: 'Roboto',
fontSize: '18px',
fontWeight: '300',
fontStretch: 'normal',
fontStyle: 'normal',
lineHeight: '1.44',
letterSpacing: '-0.5px',
color: '#595f6f'
    }
    ,
    equipment:{
        width: '430px',
        height: '52px',
        margin: '0 0 0 20px',
        fontFamily: 'Roboto',
fontSize: '18px',
fontWeight: '300',
fontStretch: 'normal',
fontStyle: 'normal',
lineHeight: '1.44',
letterSpacing: '-0.5px',
color: '#595f6f'
    },
    classic_Car:{
        width: '430px',
        height: '78px',
        margin: '0 0 0 20px',
        fontFamily: 'Roboto',
fontSize:'18px',
fontWeight: '300',
fontStretch: 'normal',
fontStyle: 'normal',
lineHeight: '1.44',
letterSpacing: '-0.5px',
color: '#595f6f'
    },
    car_Sold:{
        width: '399px',
        height: '52px',
        margin: '0 0 0 20px',
        fontFamily: 'Roboto',
fontSize: '18px',
fontWeight: '300',
fontStretch: 'normal',
fontStyle: 'normal',
lineHeight: '1.44',
letterSpacing: '-0.5px',
color: '#595f6f'
    },
    another_list_div:{
        position: 'absolute',
        left: '50%',
        top: '19%'
    },
    item_sold:{
        width: '430px',
        height: '78px',
        margin: '0 0 0 20px',
        fontFamily: 'Roboto',
fontSize: '18px',
fontWeight: '300',
fontStretch: 'normal',
fontStyle: 'normal',
lineHeight: '1.44',
letterSpacing: '-0.5px',
color: '#595f6f'
    },
    comm:{
        width: '372px',
        height: '52px',
        margin: '0 0 0 20px',
        fontFamily: 'Roboto',
fontSize: '18px',
fontWeight: '300',
fontStretch: 'normal',
fontStyle: 'normal',
lineHeight: '1.44',
letterSpacing: '-0.5px',
color: '#595f6f'

},
    in_case:{
        width: '377px',
        height: '52px',
        margin: '0 0 0 20px',
        fontFamily: 'Roboto',
fontSize: '18px',
fontWeight: '300',
fontStretch: 'normal',
fontStyle: 'normal',
lineHeight: '1.44',
letterSpacing: '-0.5px',
color: '#595f6f' ,
    },


}));