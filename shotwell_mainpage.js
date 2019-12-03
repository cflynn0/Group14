import React from 'react';
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
  },
  pos: {
    marginBottom: 12,
  },
	image: {
    position: 'relative',
    height: 200,
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
}));

//GridList
const images = [
  {
    url: 'https://s3-eu-west-1.amazonaws.com/s.i-images.co/thumbs/IIM-19185-0007.jpg',
    title: 'Day 1',
	width: '20%',
  },
  {
    url: 'https://s3-eu-west-1.amazonaws.com/s.i-images.co/thumbs/IIM-19185-0005.jpg',
    title: 'Day 2',
    width: '20%',
  },
  {
    url: 'https://s3-eu-west-1.amazonaws.com/s.i-images.co/thumbs/IIM-19075-0006.jpg',
    title: 'Day 3',
    width: '20%',
  },
  {
    url: 'https://s3-eu-west-1.amazonaws.com/s.i-images.co/thumbs/IIM-18619-0011.jpg',
    title: 'Day 4',
    author: 'Image by Free-Photos on Pixabay',
    width: '20%',
  },
  {
    url: 'https://s3-eu-west-1.amazonaws.com/s.i-images.co/thumbs/IIM-16603-0017.jpg',
    title: 'Day 5',
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
  createData('12:00 AM','forecast.weather.main','forecast.main.temp','forecast.main.humidity','forecast.wind.speed'),
  createData('3:00 AM','forecast.weather.main','forecast.main.temp','forecast.main.humidity','forecast.wind.speed'),
  createData('6:00 AM','forecast.weather.main','forecast.main.temp','forecast.main.humidity','forecast.wind.speed'),
  createData('9:00 AM','forecast.weather.main','forecast.main.temp','forecast.main.humidity','forecast.wind.speed'),
  createData('12:00 PM','forecast.weather.main','forecast.main.temp','forecast.main.humidity','forecast.wind.speed'),
  createData('3:00 PM','forecast.weather.main','forecast.main.temp','forecast.main.humidity','forecast.wind.speed'),
  createData('6:00 PM','forecast.weather.main','forecast.main.temp','forecast.main.humidity','forecast.wind.speed'),
  createData('9:00 PM','forecast.weather.main','forecast.main.temp','forecast.main.humidity','forecast.wind.speed'),
];
var wApiCall = 'api.openweathermap.org/data/2.5/weather?q=Tallahassee,US&appid=e5063c5a4e75f3258bdf88a45ded4a0a';
var fApiCall = 'api.openweathermap.org/data/2.5/forecast?q=Tallahassee,US&appid=e5063c5a4e75f3258bdf88a45ded4a0a';


export default function ButtonAppBar() {
  const classes = useStyles();

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
					<StyledTableRow key={row.name} flexWrap="wrap">
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
          *Name of Day*'s Weather Summary
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
	  
	  *TO-DO*
	  <br />- MAIN 
	  <br />- Convert all html and css to vanilla js for easy readability for the rest of the group.
	  <br /><br /> - GRIDLIST
		<br /> - Items in list must become clickable buttons that display info through table and card. Default displayed info is current day.
		<br /> - Replace "Day 1", etc with labels that automatically change to the correct day. (calendar util?)
		<br /> - Find different placement photos for the 5 day forecast. Possibly add function that adds up the most often occuring weather state (rainy, sunny, etc) occuring that day and give it an unique logo?
		<br /> - IDEA: superimpose buttons over gridlist? Gridlist can still show unique images, buttons can change actual site. !!!Complex buttons build on top of a 'Button base', check into it possibly can hand make unique buttons
		<br /> - Change Gridlist to button group

		<br /><br /> - TABLE
		<br /> - API (AARAAAARRHGHGHAGHJEGWNRWVNWREVMWEVCJWEFW)
		<br /> - If API expertise reaches a level, could have individual highlighted table rows show their complete 3 hour report on left hand card.
		<br /> - Highest and Lowest Temps should be bolded. Possibly add up arrow and down arrow beside them as well
		
		<br /><br /> - SLIDESHOW
		<br /> - Create list of 20 random Florida weather facts. Select 4 at random and put on a revolving slideshow that changes every 10 seconds. Every page refresh should bring in another random 4 facts from the 20.
		<br />- Above or below forecast?
		<br /><br /> - CARD
		<br />- Possible to add pie charts to card? It could auto change with percentage chance of rain and cloud coverage. Speedometer icon for wind speeds as well?
		
	</div>
  );
}






















