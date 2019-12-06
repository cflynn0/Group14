import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import Title from './Title';
//import  from 'react-plotly.js'; //npm i react-plotlyjs
/*function createData(Date, Damage) {
  return { Date, Damage };
}*/

//all real data from ncdc.noaa.gov
const data = [
  {
    "name": "Hurricane Allen (August 1980)",
    "disaster": "Tropical Cyclone",
    "begDate": 19800807,
    "totalCost": "1947.0",
    "endDate": 19800811,
    "deaths": 13
  },
  {
    "name": "Hurricane Alicia (August 1983)",
    "disaster": "Tropical Cyclone",
    "begDate": 19830817,
    "totalCost": "7860.0",
    "endDate": 19830820,
    "deaths": 21
  },
  {
    "name": "Hurricane Elena (September 1985)",
    "disaster": "Tropical Cyclone",
    "begDate": 19850830,
    "totalCost": "3152.7",
    "endDate": 19850903,
    "deaths": 4
  },
  {
    "name": "Hurricane Gloria (September 1985)",
    "disaster": "Tropical Cyclone",
    "begDate": 19850926,
    "totalCost": "2080.3",
    "endDate": 19850928,
    "deaths": 11
  },
  {
    "name": "Hurricane Juan (October 1985)",
    "disaster": "Tropical Cyclone",
    "begDate": 19851027,
    "totalCost": "3637.0",
    "endDate": 19851031,
    "deaths": 63
  },
  {
    "name": "Hurricane Hugo (September 1989)",
    "disaster": "Tropical Cyclone",
    "begDate": 19890921,
    "totalCost": "19079.7",
    "endDate": 19890922,
    "deaths": 86
  },
  {
    "name": "Hurricane Bob (August 1991)",
    "disaster": "Tropical Cyclone",
    "begDate": 19910818,
    "totalCost": "2870.5",
    "endDate": 19910820,
    "deaths": 18
  },
  {
    "name": "Hurricane Andrew (August 1992)",
    "disaster": "Tropical Cyclone",
    "begDate": 19920823,
    "totalCost": "50220.0",
    "endDate": 19920827,
    "deaths": 61
  },
  {
    "name": "Hurricane Iniki (September 1992)",
    "disaster": "Tropical Cyclone",
    "begDate": 19920911,
    "totalCost": "5766.0",
    "endDate": 19920912,
    "deaths": 7
  },
  {
    "name": "Tropical Storm Alberto (July 1994)",
    "disaster": "Tropical Cyclone",
    "begDate": 19940707,
    "totalCost": "1747.4",
    "endDate": 19940710,
    "deaths": 32
  },
  {
    "name": "Hurricane Erin (August 1995)",
    "disaster": "Tropical Cyclone",
    "begDate": 19950801,
    "totalCost": "1453.5",
    "endDate": 19950807,
    "deaths": 6
  },
  {
    "name": "Hurricane Marilyn (September 1995)",
    "disaster": "Tropical Cyclone",
    "begDate": 19950915,
    "totalCost": "3591.0",
    "endDate": 19950917,
    "deaths": 13
  },
  {
    "name": "Hurricane Opal (October 1995)",
    "disaster": "Tropical Cyclone",
    "begDate": 19951004,
    "totalCost": "8018.2",
    "endDate": 19951006,
    "deaths": 27
  },
  {
    "name": "Hurricane Fran (September 1996)",
    "disaster": "Tropical Cyclone",
    "begDate": 19960905,
    "totalCost": "8311.6",
    "endDate": 19960908,
    "deaths": 37
  },
  {
    "name": "Tropical Storm Frances (September 1998)",
    "disaster": "Tropical Cyclone",
    "begDate": 19980808,
    "totalCost": "1113.0",
    "endDate": 19980813,
    "deaths": 2
  },
  {
    "name": "Hurricane Bonnie (August 1998)",
    "disaster": "Tropical Cyclone",
    "begDate": 19980827,
    "totalCost": "1558.2",
    "endDate": 19980829,
    "deaths": 3
  },
  {
    "name": "Hurricane Georges (September 1998)",
    "disaster": "Tropical Cyclone",
    "begDate": 19980920,
    "totalCost": "9515.3",
    "endDate": 19980929,
    "deaths": 16
  },
  {
    "name": "Hurricane Floyd (September 1999)",
    "disaster": "Tropical Cyclone",
    "begDate": 19990914,
    "totalCost": "10125.9",
    "endDate": 19990916,
    "deaths": 77
  },
  {
    "name": "Tropical Storm Allison (June 2001)",
    "disaster": "Tropical Cyclone",
    "begDate": 20010605,
    "totalCost": "12527.4",
    "endDate": 20010617,
    "deaths": 43
  },
  {
    "name": "Hurricane Lili (October 2002)",
    "disaster": "Tropical Cyclone",
    "begDate": 20020801,
    "totalCost": "1601.6",
    "endDate": 20020805,
    "deaths": 2
  },
  {
    "name": "Hurricane Isabel (September 2003)",
    "disaster": "Tropical Cyclone",
    "begDate": 20030918,
    "totalCost": "7732.5",
    "endDate": 20030919,
    "deaths": 55
  },
  {
    "name": "Hurricane Charley (August 2004)",
    "disaster": "Tropical Cyclone",
    "begDate": 20040813,
    "totalCost": "22239.3",
    "endDate": 20040814,
    "deaths": 35
  },
  {
    "name": "Hurricane Frances (September 2004)",
    "disaster": "Tropical Cyclone",
    "begDate": 20040903,
    "totalCost": "13622.1",
    "endDate": 20040909,
    "deaths": 48
  },
  {
    "name": "Hurricane Ivan (September 2004)",
    "disaster": "Tropical Cyclone",
    "begDate": 20040912,
    "totalCost": "28495.7",
    "endDate": 20040921,
    "deaths": 57
  },
  {
    "name": "Hurricane Jeanne (September 2004)",
    "disaster": "Tropical Cyclone",
    "begDate": 20040915,
    "totalCost": "10420.1",
    "endDate": 20040929,
    "deaths": 28
  },
  {
    "name": "Hurricane Dennis (July 2005)",
    "disaster": "Tropical Cyclone",
    "begDate": 20050709,
    "totalCost": "3368.3",
    "endDate": 20050711,
    "deaths": 15
  },
  {
    "name": "Hurricane Katrina (August 2005)",
    "disaster": "Tropical Cyclone",
    "begDate": 20050825,
    "totalCost": "168762.2",
    "endDate": 20050830,
    "deaths": 1833
  },
  {
    "name": "Hurricane Rita (September 2005)",
    "disaster": "Tropical Cyclone",
    "begDate": 20050920,
    "totalCost": "24975.1",
    "endDate": 20050924,
    "deaths": 119
  },
  {
    "name": "Hurricane Wilma (October 2005)",
    "disaster": "Tropical Cyclone",
    "begDate": 20051024,
    "totalCost": "25650.0",
    "endDate": 20051024,
    "deaths": 35
  },
  {
    "name": "Hurricane Dolly (July 2008)",
    "disaster": "Tropical Cyclone",
    "begDate": 20080723,
    "totalCost": "1546.1",
    "endDate": 20080725,
    "deaths": 3
  },
  {
    "name": "Hurricane Gustav (September 2008)",
    "disaster": "Tropical Cyclone",
    "begDate": 20080831,
    "totalCost": "7316.3",
    "endDate": 20080903,
    "deaths": 53
  },
  {
    "name": "Hurricane Ike (September 2008)",
    "disaster": "Tropical Cyclone",
    "begDate": 20080912,
    "totalCost": "36598.4",
    "endDate": 20080914,
    "deaths": 112
  },
  {
    "name": "Hurricane Irene (August 2011)",
    "disaster": "Tropical Cyclone",
    "begDate": 20110826,
    "totalCost": "15653.1",
    "endDate": 20110828,
    "deaths": 45
  },
  {
    "name": "Tropical Storm Lee (September 2011)",
    "disaster": "Tropical Cyclone",
    "begDate": 20110901,
    "totalCost": "2914.5",
    "endDate": 20110905,
    "deaths": 21
  },
  {
    "name": "Hurricane Isaac (August 2012)",
    "disaster": "Tropical Cyclone",
    "begDate": 20120826,
    "totalCost": "3122.8",
    "endDate": 20120831,
    "deaths": 9
  },
  {
    "name": "Hurricane Sandy (October 2012)",
    "disaster": "Tropical Cyclone",
    "begDate": 20121030,
    "totalCost": "73494.6",
    "endDate": 20121031,
    "deaths": 159
  },
  {
    "name": "Hurricane Matthew (October 2016)",
    "disaster": "Tropical Cyclone",
    "begDate": 20161008,
    "totalCost": "10800.0",
    "endDate": 20161012,
    "deaths": 49
  },
  {
    "name": "Hurricane Harvey (August 2017)",
    "disaster": "Tropical Cyclone",
    "begDate": 20170825,
    "totalCost": "130000.0",
    "endDate": 20170831,
    "deaths": 89
  },
  {
    "name": "Hurricane Irma (September 2017)",
    "disaster": "Tropical Cyclone",
    "begDate": 20170906,
    "totalCost": "52000.0",
    "endDate": 20170912,
    "deaths": 97
  },
  {
    "name": "Hurricane Maria (September 2017)",
    "disaster": "Tropical Cyclone",
    "begDate": 20170919,
    "totalCost": "93600.0",
    "endDate": 20170921,
    "deaths": 2981
  },
  {
    "name": "Hurricane Florence (September 2018)",
    "disaster": "Tropical Cyclone",
    "begDate": 20180913,
    "totalCost": "24480.0",
    "endDate": 20180916,
    "deaths": 53
  },
  {
    "name": "Hurricane Michael (October 2018)",
    "disaster": "Tropical Cyclone",
    "begDate": 20181010,
    "totalCost": "25224.8",
    "endDate": 20181011,
    "deaths": 49
  },
  {
    "name": "Hurricane Dorian (September 2019)",
    "disaster": "Tropical Cyclone",
    "begDate": 20190828,
    "totalCost": "TBD",
    "endDate": 20190906,
    "deaths": 10
  },
  {
    "name": "Tropical Storm Imelda (September 2019)",
    "disaster": "Tropical Cyclone",
    "begDate": 20190917,
    "totalCost": "TBD",
    "endDate": 20190921,
    "deaths": 5
  }
];

export default function Chart() {
  return (
    <div>
    <h1>Florida Damages (in Millions) and Deaths since 1980</h1>
    <AreaChart width={1500} height={800} data={data}
    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  < defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis datakey="totalCost" type="number" domain={[0, 200000]}/>
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="deaths" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="totalCost" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
</div>
  );
}
//Output using CsvToHtmlTable

/*function Copyright() {
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
}*/

/*const useStyles = makeStyles(theme => ({
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
  export default function Statistics() {
    const classes = useStyles();
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Statistics
          </Typography>
          <div>&nbsp;</div>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }*/