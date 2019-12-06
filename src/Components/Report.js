import React, { useEffect,useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import ListAltIcon from '@material-ui/icons/ListAlt';
import Form from './Form';
import { myFirebase } from "../firebase/firebase";

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          GustBuddy
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const useStyles = makeStyles(theme => ({
  root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
    padding: '15px',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

function useEntries() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    myFirebase.firestore().collection('entries').onSnapshot((snapshot) => {
      const newEntries = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))

      setEntries(newEntries)
    })
  }, [])

  return entries
}

export default function Report() {
    const classes = useStyles();

    const entries = useEntries()

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
        <ListAltIcon className={classes.icon}/>
          <Typography variant="h6" color="inherit" noWrap>
            Reports
          </Typography>
        </Toolbar>
      </AppBar>
      <main>

        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Report your local weather!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Form/>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <div>
          <ul>
            { entries.map((entry) =>
                <li key={entry.id}>
                  <div>
                    <div>Name: {entry.firstName}</div>
                    <div>Zip Code: {entry.location}</div>
                    <div>Weather: {entry.description}</div>
                    <div>Date: {entry.date}</div>
                  </div>
                  <br/>
                </li>
            )}
          </ul>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}

        </Container>

      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
