import React from 'react';
import useStyles from './styles';
import useTheme from '@material-ui/core/styles/useTheme'
import {useMediaQuery , Typography} from '@material-ui/core';
import VideoPlayer from 'react-simple-video-player';
import Back from  '../../assets/backgrounds/red-luxury-sedan-road.jpg';
import EA from '../../assets/Emirates Auction - We Can Reach You Anywhere.mp4';
import PlayIcon from '../../assets/icons/play-icon.svg'
import  './sellVideo.css' ;
const SellVideo = props =>   {
    const classes = useStyles();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
    return (
      <div className={classes.video}>
          <VideoPlayer
              aspectRatio="4:3"
              url={EA}
              poster={Back}
              width={560}
              height={330}
              playIcon={<div className={classes.play_circle}><PlayIcon className={classes.play}/></div>}
          />
          <Typography className={classes.should_Sell}>
              {"Why you should sell your car with us?"}
          </Typography>
          <Typography className={classes.support_you}>
              {"We support you from start to finish"}
          </Typography>
          <Typography className={classes.we_have}>
              {"We have streamlined the process to sell your car online for quick payment to get your free cash offer."}
          </Typography>
          <Typography className={classes.ready_sell}>
              {"Ready to sell your car?"}
          </Typography>
      </div>
    );
};

export default SellVideo;