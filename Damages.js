import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Damages() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Total Damage</Title>
      <Typography component="p" variant="h4">
        $905,689,326
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        since last hurricane
      </Typography>
      <div>
        <Link color="primary" href="javascript:;">
          View Breakdowns
        </Link>
      </div>
    </React.Fragment>
  );
}