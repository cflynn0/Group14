import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, 'Michael', '10 Oct, 2018', 'Mexico Beach', '5', 312.44),
  createData(1, 'Irma', '10 Sept, 2017', 'Cudjoe Key', '4', 866.99),
  createData(2, 'Wilma', '24 Oct, 2005', 'Cape Romano', '3', 100.81),
  createData(3, 'Dennis', '10 July, 2005', 'Santa Rosa Island', '3', 654.39),
  createData(4, 'Jeanne', '26 Sept, 2004', 'Hutchinson Island', '3', 212.79),
];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function HurricaneTable() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Florida Hurricanes</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Storm</TableCell>
            <TableCell>Landing Date</TableCell>
            <TableCell>Landfall Location</TableCell>
            <TableCell align='center'>Category</TableCell>
            <TableCell align="right">Damage Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell align="center">{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="javascript:;">
          See more weather updates
        </Link>
      </div>
    </React.Fragment>
  );
}