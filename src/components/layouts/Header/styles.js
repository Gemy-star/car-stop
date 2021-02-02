import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    main: {
        display: 'flex',
        minHeight: '100vh',
        paddingBottom: '55px',
    },
    logo: {
        width: '300px',
        height: '75px',
        margin: '0 280px 30px 140px',
        objectFit: 'contain',
        marginTop: '30px'
    },
    bg: {
        width: '108px',
        height: '48px',
        padding: '16px 30px',
        marginRight:'140px',
        marginTop:'48px',
        marginLeft:'1192px',
        borderRadius: '5px',
        backgroundColor: '#ec1c24',
        bottom: '138px',
    },
    bgTxt: {
        width: '48px',
        height: '16px',
        fontFamily: 'Almarai',
        fontSize: '16px',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1',
        letterSpacing: 'normal',
        color: '#ffffff'
    },


}))