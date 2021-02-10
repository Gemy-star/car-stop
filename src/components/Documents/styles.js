import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    documents:{
        width: '100%',
        height: '30vh',
        margin: '150px 0 100px',
        padding: '50px 372px 50px 373px',
        backgroundColor: '#f6fbff',
        position: 'absolute',
        display: 'block',
        top: '494%',
        [theme.breakpoints.only('xs')]: {
            display: 'flex',
            top: '810%',
            width: '305%',
            height: '288px',
            margin: '88px 0',
        },
    },
    bank_pos:{
        right: '21%',
        position: 'absolute',
        top: '41%',
        [theme.breakpoints.only('xs')]: {
          right:'14%'
        },
    },
    div:{
      display:"inline-block",
      justifyContent:"space-between",
    },
    bank_account:{
        display:"inline-block",
        width: '159px',
        height: '26px',
        margin: '0 0 16px 120px',
        fontFamily: 'Roboto',
fontSize: '18px',
fontWeight: '500',
fontStretch: 'normal',
fontStyle: 'normal',
lineHeight: '1.44',
letterSpacing: '-0.5px',
color: '#595f6f',
        [theme.breakpoints.only('xs')]: {
            width: '159px',
            height: '26px',
            margin:'0 0 16px 40px'
        },
    },
    subtitle : {
        right: '37%',
        top: '65%',
        position: 'absolute',
        [theme.breakpoints.only('xs')]: {
            top:'52%'
        },
    },
    certificate :{
        width: '200px',
        height:'42px',
        margin: '0 120px 0 129px',
        fontFamily: 'Roboto',
fontSize: '13px',
fontWeight: '300',
fontStretch: 'normal',
fontStyle: 'normal',
lineHeight: 'normal',
letterSpacing:'-0.36px',
textAlign: 'center',
color: '#595f6f',
        [theme.breakpoints.only('xs')]: {
            width: '200px',
            height: '42px',
            margin: '0 40px',
        },
    },
    required_mob:{
        right: '30%',
        fontSize: '18px',
fontWeight: '500',
margin: '-21px 126px 1px 264px',
position: 'absolute',
top:' 52%',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing:'-0.36px',
        textAlign: 'center',
    },
    required :{
    width: '249px',
    height: '26px',
    margin: '0 250px 23px 259px',
    fontFamily: 'Roboto',
fontSize: '20px',
fontWeight: 'bold',
fontStretch: 'normal',
fontStyle: 'normal',
lineHeight: 'normal',
letterSpacing: '-0.71px',
color: '#000000',
        [theme.breakpoints.only('xs')]: {
            width: '208px',
            height: '26px',
            margin: '12px 203px 23px 69px',
            whiteSpace: 'nowrap'
        },
},
emirates_id:{
    width: '87px',
    height: '26px',
    margin: '0 129px 16px 0',
    fontFamily: 'Roboto',
fontSize: '18px',
fontWeight: '500',
fontStretch: 'normal',
fontStyle: 'normal',
lineHeight: '1.44',
letterSpacing: '-0.5px',
color: '#595f6f',
    [theme.breakpoints.only('xs')]: {
        width: '87px',
        height: '26px',
        margin: '0 40px 16px 0',
        left: '14%',
        position: 'absolute',
        top: '43%'
    },
}
}))