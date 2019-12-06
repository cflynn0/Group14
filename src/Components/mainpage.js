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
	flexGrow: 1,
	width: '100%',
	marginTop: theme.spacing(3),
  },
    card: {
    width: '10%',
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
  '#ed8d00',
  '#ed8d00',
  '#ed8d00',
  '#ed8d00',
  '#ed8d00',
  '#f1bc00',
  '#ed8d00',
  '#d12000',
	],
	
  },
}));

function getDay(Adj){
const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var today = new Date();
today = today.getDay()+Adj; today = (today > 6) ? today - 6 : today;
return today = weekDay[today];
};
//GridList
const images = [
  {
    url: 'https://s3-eu-west-1.amazonaws.com/s.i-images.co/thumbs/IIM-19185-0007.jpg',
    title: getDay(0),
	width: '20%',
	page: 0,
  },
  {
    url: 'https://s3-eu-west-1.amazonaws.com/s.i-images.co/thumbs/IIM-19185-0005.jpg',
    title: getDay(1),
    width: '20%',
	page: 1,
  },
  {
    url: 'https://s3-eu-west-1.amazonaws.com/s.i-images.co/thumbs/IIM-19075-0006.jpg',
    title: getDay(2),
    width: '20%',
	page: 2,
  },
  {
    url: 'https://s3-eu-west-1.amazonaws.com/s.i-images.co/thumbs/IIM-18619-0011.jpg',
    title: getDay(3),
    author: 'Image by Free-Photos on Pixabay',
    width: '20%',
	page: 3,
  },
  {
    url: 'https://s3-eu-west-1.amazonaws.com/s.i-images.co/thumbs/IIM-16603-0017.jpg',
    title: getDay(4),
    width: '20%',
	page: 4,
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


function getMinArrayVal(seq){
    var minVal = seq[0];
    for(var i = 0; i<seq.length-1; i++){
        if(minVal < seq[i+1]){
        continue;
        } else {
        minVal = seq[i+1];
        }
    }
    return minVal;
}

function getMaxArrayVal(seq){
    var maxVal = seq[0];
    for(var i = 0; i<seq.length-1; i++){
        if(maxVal > seq[i+1]){
        continue;
        } else {
        maxVal = seq[i+1];
        }
    }
    return maxVal;
}


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
		row0: [],
		row1: [],
		row2: [],
		row3: [],
		row4: [],
		row5: [],
		row6: [],
		row7: [],
		windAvg: null,
		humidityAvg: null,
		Temp: [],
		Page: 0,
		Name: [],
	};
	

	componentDidMount = async () => {

	const url ="http://api.openweathermap.org/data/2.5/forecast?q=Tallahassee,US&appid=e5063c5a4e75f3258bdf88a45ded4a0a&units=imperial";
	const response = await fetch(url);
	const data = await response.json();
		this.setState({
		row0: ['12:00 AM', data.list[0+8*this.state.Page].weather[0].main,data.list[0+8*this.state.Page].main.temp, data.list[0+8*this.state.Page].main.humidity, data.list[0+8*this.state.Page].wind.speed, 7],
			row1: ['3:00 AM', data.list[1+8*this.state.Page].weather[0].main,data.list[1+8*this.state.Page].main.temp, data.list[1+8*this.state.Page].main.humidity, data.list[1+8*this.state.Page].wind.speed],
		row2: ['6:00 AM', data.list[2+8*this.state.Page].weather[0].main,data.list[2+8*this.state.Page].main.temp, data.list[2+8*this.state.Page].main.humidity, data.list[2+8*this.state.Page].wind.speed],
			row3: ['9:00 AM', data.list[3+8*this.state.Page].weather[0].main,data.list[3+8*this.state.Page].main.temp, data.list[3+8*this.state.Page].main.humidity, data.list[3+8*this.state.Page].wind.speed],
		row4: ['12:00 PM', data.list[4+8*this.state.Page].weather[0].main,data.list[4+8*this.state.Page].main.temp, data.list[4+8*this.state.Page].main.humidity, data.list[4+8*this.state.Page].wind.speed],
			row5: ['3:00 PM', data.list[5+8*this.state.Page].weather[0].main,data.list[5+8*this.state.Page].main.temp, data.list[5+8*this.state.Page].main.humidity, data.list[5+8*this.state.Page].wind.speed],
		row6: ['6:00 PM', data.list[6+8*this.state.Page].weather[0].main,data.list[6+8*this.state.Page].main.temp, data.list[6+8*this.state.Page].main.humidity, data.list[6+8*this.state.Page].wind.speed],
			row7: ['9:00 PM', data.list[7+8*this.state.Page].weather[0].main,data.list[7+8*this.state.Page].main.temp, data.list[7+8*this.state.Page].main.humidity, data.list[7+8*this.state.Page].wind.speed],
		windAvg: ((data.list[0+8*this.state.Page].wind.speed+data.list[1+8*this.state.Page].wind.speed+data.list[2+8*this.state.Page].wind.speed+data.list[3+8*this.state.Page].wind.speed+data.list[4+8*this.state.Page].wind.speed+data.list[5+8*this.state.Page].wind.speed+data.list[6+8*this.state.Page].wind.speed+data.list[7+8*this.state.Page].wind.speed)/8).toFixed(2),
			humidityAvg: ((data.list[0+8*this.state.Page].main.humidity+data.list[1+8*this.state.Page].main.humidity+data.list[2+8*this.state.Page].main.humidity+data.list[3+8*this.state.Page].main.humidity+data.list[4+8*this.state.Page].main.humidity+data.list[5+8*this.state.Page].main.humidity+data.list[6+8*this.state.Page].main.humidity+data.list[7+8*this.state.Page].main.humidity)/8).toFixed(2),
		Temp: [data.list[0+8*this.state.Page].main.temp,data.list[1+8*this.state.Page].main.temp,data.list[2+8*this.state.Page].main.temp,data.list[3+8*this.state.Page].main.temp,data.list[4+8*this.state.Page].main.temp,data.list[5+8*this.state.Page].main.temp,data.list[6+8*this.state.Page].main.temp,data.list[7+8*this.state.Page].main.temp],
			Name: [data.city.name, data.city.sunrise, data.city.sunset],
			loading:false,
		});
	console.log(data.list[0]);
	document.getElementById("prevBut").addEventListener('click', this.pageTurn(-1), false);
    document.getElementById("nextBut").addEventListener('click', this.pageTurn(1), false);
	}
	
	goPage(pag){this.setState({Page: pag});};
	pageTurn(pag){
		if (this.state.Page === 4 && pag > 0 ||  this.state.Page === 0 && pag < 0) return; 
		this.setState({Page: this.state.Page + pag});};
	createTime(timestamp){
		var step1 = timestamp*1000;
		var step2 = new Date(step1);
		var step3=step2.toLocaleString();

		return step3;
	}
		
	render(){
		return(
			<div>
				  <Box display="flex" flexDirection="row" bgcolor="background.paper" align-items="stretch" flex-wrap="wrap">
			
        <Table height = "750" margintop= "theme.spacing(3)" aria-label="customized table" flexGrow="1">
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
					<StyledTableRow>
					  <StyledTableCell component="th" scope="row" align="center">
					  {this.state.row0[0]}
					  </StyledTableCell>
					  <StyledTableCell align="center">{this.state.row0[1]}</StyledTableCell>
					  <StyledTableCell align="center">{this.state.row0[2]}</StyledTableCell>
					  <StyledTableCell align="center">{this.state.row0[3]}</StyledTableCell>
					  <StyledTableCell align="center">{this.state.row0[4]}</StyledTableCell>
					</StyledTableRow>
					
					<StyledTableRow>
					  <StyledTableCell component="th" scope="row" align="center">
					  {this.state.row1[0]}
					  </StyledTableCell>
					  <StyledTableCell align="center">{this.state.row1[1]}</StyledTableCell>
					  <StyledTableCell align="center">{this.state.row1[2]}</StyledTableCell>
					  <StyledTableCell align="center">{this.state.row1[3]}</StyledTableCell>
					  <StyledTableCell align="center">{this.state.row1[4]}</StyledTableCell>
					</StyledTableRow>
					
					<StyledTableRow>
					  <StyledTableCell component="th" scope="row" align="center">
					  {this.state.row2[0]}
					  </StyledTableCell>
					  <StyledTableCell align="center">{this.state.row2[1]}</StyledTableCell>
					  <StyledTableCell align="center">{this.state.row2[2]}</StyledTableCell>
					  <StyledTableCell align="center">{this.state.row2[3]}</StyledTableCell>
					  <StyledTableCell align="center">{this.state.row2[4]}</StyledTableCell>
					</StyledTableRow>
					
					<StyledTableRow>
					  <StyledTableCell component="th" scope="row" align="center">
					  {this.state.row3[0]}
					  </StyledTableCell>
					  <StyledTableCell align="center">{this.state.row3[1]}</StyledTableCell>
					  <StyledTableCell align="center">{this.state.row3[2]}</StyledTableCell>
					  <StyledTableCell align="center">{this.state.row3[3]}</StyledTableCell>
					  <StyledTableCell align="center">{this.state.row3[4]}</StyledTableCell>
					</StyledTableRow>
					
					<StyledTableRow>
					  <StyledTableCell component="th" scope="row" align="center">
					  {this.state.row4[0]}
					  </StyledTableCell>
					  <StyledTableCell align="center">{this.state.row4[1]}</StyledTableCell>
					  <StyledTableCell align="center">{this.state.row4[2]}</StyledTableCell>
					  <StyledTableCell align="center">{this.state.row4[3]}</StyledTableCell>
					  <StyledTableCell align="center">{this.state.row4[4]}</StyledTableCell>
					</StyledTableRow>
					
					<StyledTableRow>
					  <StyledTableCell component="th" scope="row" align="center">
					  {this.state.row5[0]}
					  </StyledTableCell>
					  <StyledTableCell align="center">{this.state.row5[1]}</StyledTableCell>
					  <StyledTableCell align="center">{this.state.row5[2]}</StyledTableCell>
					  <StyledTableCell align="center">{this.state.row5[3]}</StyledTableCell>
					  <StyledTableCell align="center">{this.state.row5[4]}</StyledTableCell>
					</StyledTableRow>
					
					<StyledTableRow>
					  <StyledTableCell component="th" scope="row" align="center">
					  {this.state.row6[0]}
					  </StyledTableCell>
					  <StyledTableCell align="center">{this.state.row6[1]}</StyledTableCell>
					  <StyledTableCell align="center">{this.state.row6[2]}</StyledTableCell>
					  <StyledTableCell align="center">{this.state.row6[3]}</StyledTableCell>
					  <StyledTableCell align="center">{this.state.row6[4]}</StyledTableCell>
					</StyledTableRow>
					
					<StyledTableRow>
					  <StyledTableCell component="th" scope="row" align="center">
					  {this.state.row7[0]}
					  </StyledTableCell>
					  <StyledTableCell align="center">{this.state.row7[1]}</StyledTableCell>
					  <StyledTableCell align="center">{this.state.row7[2]}</StyledTableCell>
					  <StyledTableCell align="center">{this.state.row7[3]}</StyledTableCell>
					  <StyledTableCell align="center">{this.state.row7[4]}</StyledTableCell>
					</StyledTableRow>
					
				</TableBody>
			  </Table>

			  
			  <Card m={1}>
				<CardContent>
	 
        <Typography variant="h4" align = "center">
			 <span> {getDay(0)} </span> 's Weather Summary for {this.state.Name[0]}
        </Typography>
        <Typography variant="h5">
          <span> {getDay(0)} </span>'s temperature ranges are a high of {getMaxArrayVal(this.state.Temp)} and a low of {getMinArrayVal(this.state.Temp)}. The day's average humidity is {this.state.humidityAvg}% and winds will stay around {this.state.windAvg} mph.
		  </Typography>
		  <br />
		  <Typography margin-bottom= "12" align = "center">
	<span> {getDay(0)} </span>'s temperature ranges are a high of {getMaxArrayVal(this.state.Temp)} and a low of {getMinArrayVal(this.state.Temp)}. The day's average humidity is {this.state.humidityAvg}% and winds will stay around {this.state.windAvg} mph.
		  
        </Typography>
	
        <Typography variant="body2" component="p" align = "center">
		<b>SUNRISE: </b>  {this.createTime(this.state.Name[1])}   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>SUNSET: </b> {this.createTime(this.state.Name[2])}
        </Typography><br /><br /><br />
		
		<ReactStoreIndicator
        value={this.state.windAvg}
        maxValue={100}
      align="right"
	  position="relative"
	 />
	 <Typography margin-bottom= "12" align = "center">
	<b>Not your city?   </b><input type="text" placeholder="City..."></input>,<input type="text" placeholder="Country..."></input>
		  
        </Typography>
      </CardContent>
      <CardActions>
	  <br /><br /><br /><br /><br /><br /><br />
        <Button size="small" variant="outlined" id="prevBut" onclick="pageTurn(-1)">Previous Day</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<Button size="small" variant="outlined" id="nextBut" onclick="pageTurn(1)">Next Day</Button>
      </CardActions>
    </Card>
	</Box>
			</div>
		);
	}
}


//HTML
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

			  <DisplayCreation />


	
		{images.map(image => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
		  onclick: 'goPage({image.Page})',
          }}
        >//onclick="pageTurn({image.Page})",
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
	  
	</div>
  );
}
