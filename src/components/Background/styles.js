import {makeStyles} from '@material-ui/core/styles';
import bg from '../../assets/backgrounds/header-bg.png';
import bg_2x from '../../assets/backgrounds/header-bg@2x.png';

export default makeStyles((theme) => ({
    header_bg:{
        backgroundImage : `url(${bg})`,
        width: '100%',
        height: '79vh',
        padding: '430px 525px 75px 526px',
        objectFit: 'contain',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        [theme.breakpoints.down('lg')]: {
            backgroundImage: `url(${bg_2x})`,
},
        [theme.breakpoints.down('xs')]: {
            backgroundImage: `url(${bg})`,
            width: '105%',
            height: '5%',
            objectFit: 'contain',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
        },

    },
    selling_car:{
        width:' 389px',
        height:' 46px',
        margin: '0 0 10px',
        fontFamily: 'Roboto',
fontSize:' 35px',
fontWeight: 'bold',
fontStretch: 'normal',
fontStyle: 'normal',
lineHeight: 'normal',
letterSpacing: '-0.73px',
textAlign: 'center',
color:' #ffffff',
        [theme.breakpoints.down('xs')]: {
            width:' 389px',
            height: '46px',
            margin:' 0 0 10px',
            fontFamily: 'Roboto',
fontSize: '17px',
fontWeight: 'bold',
fontStretch: 'normal',
fontStyle: 'normal',
lineHeight: 'normal',
letterSpacing:' -0.73px',
textAlign: 'center',
color: '#ffffff'
        },
    },
    easier_span:{
        marginRight:'595px',
        display: 'flex',
        right: '35px',
        position: 'absolute',
    },
    easier_span_mob:{
        position: 'absolute',
        display: 'flex',
        top: '77%',
        right:' -94%',
        marginTop: '-5%'

    },
    easier_ever:{
        width:' 250px',
        height: '33px',
        margin: '45px 70px 0 69px',
        fontFamily: 'Roboto',
fontSize: '25px',
fontWeight: 'bold',
fontStretch: 'normal',
fontStyle: 'normal',
lineHeight: 'normal',
letterSpacing: '-0.52px',
textAlign: 'center',
color: '#ffffff'
        ,
        [theme.breakpoints.down('xs')]: {
            fontSize: '14px',
            width:' 250px',
            height: '33px',
            margin: '26px 76px 0 72px',
            fontFamily: 'Roboto',
            fontWeight: 'bold',
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: 'normal',
            letterSpacing: '-0.52px',
            textAlign: 'center',
            color: '#ffffff'
        },
    },
    selling_car_mob:{
        position: 'absolute',
        top: '73%',
        right: '-94%',
        alignItems:'center'
    }

}))