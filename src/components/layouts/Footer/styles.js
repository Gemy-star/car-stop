import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({

footer_div:{
    display: 'block',
    position: 'absolute',
    top: '548%',
    width: '100%',
    height:'25vh',
        [theme.breakpoints.only('xs')]: {
        left: '120%',
        top: '848%',
        height:'83vh',
    },
    [theme.breakpoints.only('sm')]: {
        top:' 605%'

    },
},
logo_footer:{
    width: '290px',
    height: '72px',
    margin:'-2px 342px -14px 0',
    padding: '0 0 1px',
    [theme.breakpoints.only('xs')]: {
        width: '290px',
        height: '72px',
        margin: '12px 115px 21px 74px',
        padding: '0 0 1px'
    },
},
 logo_txt:{
     width: '520px',
     height: '36px',
     margin: '22px 112px 2px 0',
     fontFamily: 'Roboto',
fontSize: '14px',
fontWeight: 'normal',
fontStretch: 'normal',
fontStyle: 'normal',
lineHeight: '1.29',
letterSpacing: 'normal',
color: '#595f6f',
     [theme.breakpoints.only('xs')]: {
         width: '520px',
         height: '36px',
         margin: '10px 0',
         textAlign: 'center'
     },
 },
    social_icons:{
        position: 'absolute',
        right: '29%',
        top: '89%'
    },
    logo_pos:{
        top: '35%',
        position: 'absolute',
        display: 'inline-block',
        left: '12%',
        [theme.breakpoints.only('xs')]: {
            top: '20%',
            left: '-41%',
        },
        [theme.breakpoints.only('sm')]: {
            top: '35%',
            left: '27%',
        },
    },
    social_media:{
        position: 'absolute',
        display: 'block',
        right: '10%',
        top: '29%',
        [theme.breakpoints.only('xs')]: {
            top: '50%',
            right: '-6%',
        },
        [theme.breakpoints.only('sm')]: {
            right: '-167%'
        },
    },
    twitter:{
        width: '40px',
        height: '40px',
        objectFit: 'contain',
        display: 'inline-block',
    },
    google:{
        width: '40px',
        height: '40px',
        margin: '0 0 0 10px',
        objectFit: 'contain'
    },
    instagram:{
        width: '40px',
        height: '40px',
        objectFit: 'contain'
    },
    youtube:{
        width: '40px',
        height: '40px',
        margin: '0 10px',
        objectFit: 'contain'
    },
    facebook:{
        width: '40px',
        height: '40px',
        margin: '0 10px 0 0',
        objectFit: 'contain',
        display:'inline-block',
    },
follow:{
    width: '377px',
    height: '42px',
    margin: '30px 0 20px 115px',
    fontFamily: 'Roboto',
fontSize: '16px',
fontWeight: '500',
fontStretch: 'normal',
fontStyle: 'normal',
lineHeight: 'normal',
letterSpacing:'-0.44px',
color: '#000000',
    [theme.breakpoints.only('xs')]: {
        width: '377px',
        height: '42px',
        margin: '30px 71px 30px 72px',
        textAlign: 'center'
    },
},



}), {index: 1})
