import React, { Component } from 'react';
import './App.css';
//title bar
import { makeStyles,withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
//table
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
//Button Base
import ButtonBase from '@material-ui/core/ButtonBase';
//Flexbox
import Box from '@material-ui/core/Box';
//Card
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//Score Indicator
import ReactStoreIndicator from 'react-score-indicator';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
	overflowX: 'visible',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
	fontSize: 14,
  },
  table: {
	width: '100%',
	marginTop: theme.spacing(3),
  },
    card: {
    width: '50%',
	height: 690,
  },
  pos: {
    marginBottom: 12,
  },
	image: {
    position: 'relative',
    height: 300,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,

      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px s olid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  ReactStoreIndicator:  {
	stepColors:[
  '#3da940',
  '#3da940',
  '#3da940',
  '#53b83a',
  '#84c42b',
  '#f1bc00',
  '#ed8d00',
  '#d12000',
	],
	
  },
}));

function getDay(Adj){
const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var today = new Date();
return today = weekDay[today.getDay()+Adj];
};
//GridList
const images = [
  {
    url: 'https://s3-eu-west-1.amazonaws.com/s.i-images.co/thumbs/IIM-19185-0007.jpg',
    title: getDay(0),
	width: '20%',
  },
  {
    url: 'https://s3-eu-west-1.amazonaws.com/s.i-images.co/thumbs/IIM-19185-0005.jpg',
    title: getDay(1),
    width: '20%',
  },
  {
    url: 'https://s3-eu-west-1.amazonaws.com/s.i-images.co/thumbs/IIM-19075-0006.jpg',
    title: getDay(2),
    width: '20%',
  },
  {
    url: 'https://s3-eu-west-1.amazonaws.com/s.i-images.co/thumbs/IIM-18619-0011.jpg',
    title: getDay(3),
    author: 'Image by Free-Photos on Pixabay',
    width: '20%',
  },
  {
    url: 'https://s3-eu-west-1.amazonaws.com/s.i-images.co/thumbs/IIM-16603-0017.jpg',
    title: getDay(4),
    width: '20%',
  },
];
//Tables
const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function createData(time, weather, temperature, humidity, wind ) {
  return {time, weather, temperature, humidity, wind };
}

const rows = [
  createData('12:00 AM','data.list[0+(8*Adj)].weather.main','data.list[0+(8*Adj)].main.temp','data.list[0+(8*Adj)].main.humidity','data.list[0+(8*Adj)].wind.speed'),
  createData('3:00 AM','data.list[1 + (8 * Adj)].weather.main','data.list[1 + (8 * Adj)].main.temp','data.list[1 + (8 * Adj)].main.humidity','data.list[1+ (8 * Adj)].wind.speed'),
  createData('6:00 AM','data.list[2 + (8 * Adj)].weather.main','data.list[2 + (8 * Adj)].main.temp','data.list[2 + (8 * Adj)].main.humidity','data.list[2+ (8 * Adj)].wind.speed'),
  createData('9:00 AM','data.list[3 + (8 * Adj)].weather.main','data.list[3 + (8 * Adj)].main.temp','data.list[3 + (8 * Adj)].main.humidity','data.list[3+ (8 * Adj)].wind.speed'),
  createData('12:00 PM','data.list[4 + (8 * Adj)].weather.main','data.list[4 + (8 * Adj)].main.temp','data.list[4 + (8 * Adj)].main.humidity','data.list[4+ (8 * Adj)].wind.speed'),
  createData('3:00 PM','data.list[5 + (8 * Adj)].weather.main','data.list[5 + (8 * Adj)].main.temp','data.list[5 + (8 * Adj)].main.humidity','data.list[5+ (8 * Adj)].wind.speed'),
  createData('6:00 PM','data.list[6 + (8 * Adj)].weather.main','data.list[6 + (8 * Adj)].main.temp','data.list[6 + (8 * Adj)].main.humidity','data.list[6+ (8 * Adj)].wind.speed'),
  createData('9:00 PM','data.list[7 + (8 * Adj)].weather.main','data.list[7 + (8 * Adj)].main.temp','data.list[7 + (8 * Adj)].main.humidity','data.list[7+ (8 * Adj)].wind.speed'),
];

var fApiCall = 'api.openweathermap.org/data/2.5/forecast?q=Tallahassee,US&appid=e5063c5a4e75f3258bdf88a45ded4a0a&units=metric';


class SpeedChart extends Component {
  render () {
    return (
      <ReactStoreIndicator
        value={30}
        maxValue={100}
      />
    )
  }
}


class DisplayCreation extends React.Component {
	state = {
		loading: true,
		log0: null,
		log1: null,
		log2: null,
		log3: null,
		log4: null,
	};
	
	componentDidMount = async () => {
	const url ="http://api.openweathermap.org/data/2.5/forecast?q=Tallahassee,US&appid=e5063c5a4e75f3258bdf88a45ded4a0a&units=metric";
	const response = await fetch(url);
	const data = await response.json();
		this.setState({
			log0: data.list[0],
			log1: data.list[1],
			log2: data.list[2],
			log3: data.list[3],
			log4: data.list[4],
			loading:false,
		});
	console.log(this.state.log0);
	}
	


	render(){
		return(
			<div>
			{this.state.loading || !this.state.log0 ? (
			<div> loading...</div>
			) : (
			<div>
				<div> </div>
			</div>
			)}
			</div>
		);
	}
}


//HTML
export default function ButtonAppBar() {
  const classes = useStyles();
	class ApiConnect extends React.Component{
	getWeather = async (e) => {
			e.preventDefault();
			const api_call = await fetch('${fApiCall}');
			const data = await api_call.json();
			console.log(data);
	}
	};
  return (

    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Gust Buddy
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

	  
	  <Box display="flex" flexDirection="row" bgcolor="background.paper" align-items="stretch">

			<Paper className={classes.root}>
			  <Table className={classes.table} aria-label="customized table">
				<TableHead>
				  <TableRow>
					<StyledTableCell align="center">TIME OF DAY</StyledTableCell>
					<StyledTableCell align="center">Weather</StyledTableCell>
					<StyledTableCell align="center">Temperature&nbsp;(°F)</StyledTableCell>
					<StyledTableCell align="center">Humidity&nbsp;(%)</StyledTableCell>
					<StyledTableCell align="center">Wind&nbsp;(mph)</StyledTableCell>
				  </TableRow>
				</TableHead>
				<TableBody>
				  {rows.map(row => (
					<StyledTableRow key={row.name} flexwrap="wrap">
					  <StyledTableCell component="th" scope="row" align="center">
						{row.time}
					  </StyledTableCell>
					  <StyledTableCell align="center">{row.weather}</StyledTableCell>
					  <StyledTableCell align="center">{row.temperature}</StyledTableCell>
					  <StyledTableCell align="center">{row.humidity}</StyledTableCell>
					  <StyledTableCell align="center">{row.wind}</StyledTableCell>
					</StyledTableRow>
				  ))}
				</TableBody>
			  </Table>
			</Paper>
			<Card className={classes.card}  m={1}>
      <CardContent>
        <Typography variant="h4" align = "center">
			<script> document.write(getDay(2));</script>*Name of Day*'s Weather Summary
        </Typography>
        <Typography variant="h5">
          Example self populating sentence based on API data: You will have a clear morning, but make sure to get your errands done early as it will rain at 2pm. It clears up again at 6pm. To build after API is secured.
		  </Typography>
		  <br />
		  <Typography className={classes.pos}>
		  *Day*'s temperature ranges are a high of 'weather.main.temp_max' at *TIME* and a low of 'weather.main.temp_min' at *TIME*. Humidity is *HUMIDITY* and Wind is *MPH*.
		  
        </Typography>
	
        <Typography variant="body2" component="p">
          Sunrise: 'weather.sys.sunrise'
          <br />
          Sunset: 'weather.sys.sunset'
        </Typography>
		<SpeedChart position = "right" />
      </CardContent>
      <CardActions>
	  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <Button size="small" variant="outlined">Previous Day</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<Button size="small" variant="outlined" >Next Day</Button>
      </CardActions>
    </Card>
	</Box>
	
		{images.map(image => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
	  <Box><DisplayCreation /></Box>
	  
	</div>
  );
}
