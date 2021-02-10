import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    services_txt: {
        display: 'block',
        position: 'absolute',
        top: '20%',
        right: '35%',
        [theme.breakpoints.only('xs')]: {
            top: '10%',
            right: '26%'
        },
    },
    get_best: {
        width: '180px',
        height: '24px',
        margin: '0 0 15px',
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: '500',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: '-0.5px',
        color: '#595f6f',
        [theme.breakpoints.only('xs')]: {
            width: '152px',
            height: '24px',
            margin: '0 119px 10px',
        },
    },
    our_experts: {
        width: '180px',
        height: '126px',
        margin: '15px 0 0',
        fontFamily: 'Roboto',
        fontSize: '14px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.29',
        letterSpacing: 'normal',
        color: '#595f6f',
        [theme.breakpoints.only('xs')]: {
            width: '390px',
            height: '54px',
            margin: '10px 0 0',
            textAlign:'center'
        },
    },
    team: {
        width: '180px',
        height: '24px',
        margin: '0 0 15px',
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: '500',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: '-0.5px',
        color: '#595f6f',
        [theme.breakpoints.only('xs')]: {
            width: '125px',
            height: '24px',
            margin: '0 133px 10px 132px',
            textAlign:'center'
        },

    },
    most_money: {
        width: '180px',
        height: '90px',
        margin: '15px 0 0',
        fontFamily: 'Roboto',
        fontSize: '14px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.29',
        letterSpacing: 'normal',
        color: '#595f6f',
        [theme.breakpoints.only('xs')]: {
            width: '390px',
            height: '54px',
            margin: '10px 0 0',
            textAlign:'center'
        },
    },
    card_div: {
        display: 'inline-block',
        position: 'absolute'
    },
    save_time: {
        width: '180px',
        height: '108px',
        margin: '15px 0 0',
        fontFamily: 'Roboto',
        fontSize: '14px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.29',
        letterSpacing: 'normal',
        color: '#595f6f',
        [theme.breakpoints.only('xs')]: {
            margin: '0',
            width: '390px',
            height: '54px',
            textAlign: 'center'
        }
    },
    easy_txt: {
        width: '180px',
        height: '24px',
        margin: '0 0 15px',
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: '500',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: '-0.5px',
        color: '#595f6f',
        [theme.breakpoints.only('xs')]: {
            margin: '0 105px 10px',
            textAlign: 'center'

        }
    },
    shape: {
        width: '50px',
        height: '48px',
        margin: '36px 30px 45px 0',
        objectFit: 'contain',
        color: '#ec1c24',
        [theme.breakpoints.only('xs')]: {
            width: '50px',
            height: '48px',
            margin: '0 170px 10px',
            objectFit: 'contain'
        }
    },
    document: {
        width: '40px',
        height: '50px',
        margin: '35px 40px 62px 0',
        objectFit: 'contain',
        color: '#ec1c24',
        [theme.breakpoints.only('xs')]: {
            width:'40px',
            height: '50px',
            margin: '0 175px 10px',
            objectFit: 'contain'
        }
    },
    clock: {
        width: '50px',
        height: '50px',
        margin: '35px 30px 80px 0',
        objectFit: 'contain',
        [theme.breakpoints.only('xs')]: {
            width: '50px',
            height: '50px',
            margin: '0 170px 10px',
            objectFit: 'contain'
        }
    },
    services_card_div: {
        display: 'flex',
        position: 'absolute',
        top: '47%',
        [theme.breakpoints.only('xs')]: {
            top: '24%',
            display: 'block',
            position: 'absolute',
            left: '23%'
        },
        [theme.breakpoints.only('sm')]: {
            left: '24%'
        }

    },
    services_card: {
        display: 'inline-block',
        width: '360px',
        height: '247px',
        margin: '0 40px 0 0',
        padding: '50px',
        borderRadius: '5px',
        border: 'solid 1px #dddfe7',
        backgroundColor: '#ffffff',
        [theme.breakpoints.only('xs')]: {
            width: '560px',
            height: '248px',
            margin: '0 0 30px',
            padding: '50px 85px',
            borderRadius: '5px',
border: 'solid 1px #dddfe7',
backgroundColor: '#ffffff'
        }
    },
    services_div: {
        width: '100%',
        height: '94vh',
        margin: '150px 0',
        padding: '150px 140px',
        backgroundColor: '#f6fbff',
        position: 'absolute',
        top: '311%',
        display: 'flex',
        [theme.breakpoints.only('xs')]: {
            width: ' 295%',
            height: '176vh',
            margin: '100px 0',
            padding: '100px 90px',
            backgroundColor: '#f6fbff',
            top: '520%',
            display: 'block',
        },

        [theme.breakpoints.only('sm')]: {
            width: '291%'
        },
    },
    why_services: {
        width: '337px',
        height: '46px',
        margin: '0 99px 10px',
        fontFamily: 'Roboto',
        fontSize: '35px',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: '-0.73px',
        textAlign: 'center',
        color: '#000000',


    },
    we_hour: {
        width: '535px',
        height: '56px',
        margin: '10px 0 0',
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.56',
        letterSpacing: '-0.45px',
        textAlign: 'center',
        color: '#595f6f'
    },
}));