import {makeStyles} from '@material-ui/core/styles';


export default makeStyles((theme) => ({
bid_ic:{
    width: '59px',
    height: '60px',
    margin: '0 231px 30px',
    objectFit: 'contain',
    [theme.breakpoints.only('xs')]: {
        width: '100%',
        height: '8vh',
        margin: '0 231px 30px',
        objectFit: 'contain',
    },
},
    bid_mob:{
        position: 'absolute',
        top: '62%',
        right: '17%',
    },
    your_Car:{
        width:' 495px',
        height: '39px',
        margin: '30px 13px 10px',
        fontFamily: 'Roboto',
fontSize: '30px',
fontWeight: 'bold',
fontStretch: 'normal',
fontStyle: 'normal',
lineHeight: 'normal',
letterSpacing: '-0.63px',
textAlign: 'center',
color: '#ffffff'
    },
    set_Start:{
        width: '521px',
        height: '26px',
        margin: '10px 0 0',
        fontFamily: 'Roboto',
fontSize: '20px',
fontWeight: '500',
fontStretch: 'normal',
fontStyle: 'normal',
lineHeight: 'normal',
letterSpacing:'-0.42px',
textAlign: 'center',
color: '#ffffff'    }

}), {index: 1})


