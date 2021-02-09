import React from 'react';
import useStyles from './styles';
import useTheme from '@material-ui/core/styles/useTheme';
import {useMediaQuery , Typography} from "@material-ui/core";
import Logo from '../../../assets/logos/logo.svg'
import Facebook from '../../../assets/logos/facebook-light.svg';
import Instagram from '../../../assets/logos/instagram-light.svg';
import Google from '../../../assets/logos/goole-light.svg';
import Twitter from '../../../assets/logos/twitter-light.svg';
import Youtube from '../../../assets/logos/youtube-light.svg';

const Footer = props =>  {
    const classes = useStyles();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
  return (
      <div className={classes.footer_div}>
            <div className={classes.logo_pos}>
                <img className={classes.logo_footer} src={Logo}  />
                <Typography className={classes.logo_txt}>
                    {"Buy new and used cars in UAE, shipping and delivery service are available, Sell your car at the highest price online with no worries visiting cars show rooms."}
                </Typography>
            </div>
          <div className={classes.social_media}>
               <Typography className={classes.follow}>
                   {"Follow the first and the largest online auction in UAE and Middle East "}
               </Typography>
          <div className={classes.social_icons}>
              <img src={Facebook} className={classes.facebook} />
              <img src={Twitter} className={classes.twitter} />
              <img src={Youtube} className={classes.youtube} />
              <img src={Instagram} className={classes.instagram} />
              <img src={Google} className={classes.google} />
          </div>

          </div>
      </div>
  );
};


export default Footer;