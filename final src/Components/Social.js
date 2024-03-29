import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
} from 'react-share';

import {
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
  } from 'react-share';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Gustbuddy
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
  export default function Social() {
    const classes = useStyles();
    const shareUrl = 'http://gustbuddy.com';
    const title = 'GustBuddy';

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>

          <Typography component="h1" variant="h5">
            Share Us!
          </Typography>
          <div>&nbsp;</div>

          <FacebookShareButton
            url={shareUrl}
            quote={title}>
            <FacebookIcon
              size={64}
              round />
          </FacebookShareButton>
          <div>&nbsp;</div>

          <TwitterShareButton
            url={shareUrl}
            title={title}>
            <TwitterIcon
              size={64}
              round />
          </TwitterShareButton>
          <div>&nbsp;</div>

          <LinkedinShareButton
            url={shareUrl}
            windowWidth={750}
            windowHeight={600}>
            <LinkedinIcon
              size={64}
              round />
          </LinkedinShareButton>

        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }