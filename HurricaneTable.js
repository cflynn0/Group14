import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { CsvToHtmlTable } from 'react-csv-to-table';

const hurrData = `
Name,Date,Total Cost (In Millions),Deaths
Hurricane Allen,August 1980,1947.0,13
Hurricane Alicia,August 1983,7860.0,21
Hurricane Elena,September 1985,3152.7,4
Hurricane Gloria,September 1985,2080.3,11
Hurricane Juan,October 1985,3637.0,63
Hurricane Hugo,September 1989,19079.7,86
Hurricane Bob,August 1991,2870.5,18
Hurricane Andrew,August 1992,50220.0,61
Hurricane Iniki,September 1992,5766.0,7
Hurricane Erin,August 1995,1453.5,6
Hurricane Marilyn,September 1995,3591.0,13
Hurricane Opal,October 1995,8018.2,27
Hurricane Fran,September 1996,8311.6,37
Hurricane Bonnie,August 1998,1558.2,3
Hurricane Georges,September 1998,9515.3,16
Hurricane Floyd,September 1999,10125.9,77
Hurricane Lili,October 2002,1601.6,2
Hurricane Isabel,September 2003,7732.5,55
Hurricane Charley,August 2004,22239.3,35
Hurricane Frances,September 2004,13622.1,48
Hurricane Ivan,September 2004,28495.7,57
Hurricane Jeanne,September 2004,10420.1,28
Hurricane Dennis,July 2005,3368.3,15
Hurricane Katrina,August 2005,168762.2,1833
Hurricane Rita,September 2005,24975.1,119
Hurricane Wilma,October 2005,25650.0,35
Hurricane Dolly,July 2008,1546.1,3
Hurricane Gustav,September 2008,7316.3,53
Hurricane Ike,September 2008,36598.4,112
Hurricane Irene,August 2011,15653.1,45
Hurricane Isaac,August 2012,3122.8,9
Hurricane Sandy,October 2012,73494.6,159
Hurricane Matthew,October 2016,10800.0,49
Hurricane Harvey,August 2017,130000.0,89
Hurricane Irma,September 2017,52000.0,97
Hurricane Maria,September 2017,93600.0,2981
Hurricane Florence,September 2018,24480.0,53
Hurricane Michael,October 2018,25224.8,49
Hurricane Dorian,September 2019,TBD,10
`;



const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function HurricaneTable() {
  const classes = useStyles();
  return(
    <CsvToHtmlTable
      data={hurrData}
      csvDelimiter=","
      tableClassName="Florida Hurricane Table"
    />
  );
}

// Generate Order Data
/*function createData(id, date, name, shipTo, paymentMethod, amount) {
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
      <Table size=small>
        <TableHead>
          <TableRow>
            <TableCell>Storm</TableCell>
            <TableCell>Landing Date</TableCell>
            <TableCell>Landfall Location</TableCell>
            <TableCell align='center'>Category</TableCell>
            <TableCell align=right>Damage Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell align=center>{row.paymentMethod}</TableCell>
              <TableCell align=right>{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color=primary href=javascript:;>
          See more weather updates
        </Link>
      </div>
    </React.Fragment>
  );
}*/
