import React, {} from 'react';
import './App.css';
import {Table, Navbar, Nav, NavDropdown, ButtonToolbar, ButtonGroup, Button} from 'react-bootstrap';

class mainPage extends React.Component { 
	render(){
	
  return (
    <div className="App">
    <Nav className="Site-Links" activeKey="#/home" fill = "true">
	<Navbar.Brand href="#home"><strong>Gust Buddy :P</strong></Navbar.Brand>
      <Nav.Item>
        <Nav.Link eventKey="1" href="https://www.gmail.com">
          Home
        </Nav.Link>
      </Nav.Item>
	  <Nav.Item>
        <Nav.Link eventKey="2" href="#">
          Sign-in/Sign-up
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" href="#">
          Doppler Radar
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="4" href="#">
          Hurricane Reporting
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="Resources" id="nav-dropdown">
        <NavDropdown.Item eventKey="5.1">User Reporting</NavDropdown.Item>
        <NavDropdown.Item eventKey="5.2">Chat</NavDropdown.Item>
        <NavDropdown.Item eventKey="5.3">Astrology Report</NavDropdown.Item>
        <NavDropdown.Item eventKey="5.4">Global Forcasting</NavDropdown.Item>
		<NavDropdown.Item eventKey="5.5">Statistics</NavDropdown.Item>
		<NavDropdown.Item eventKey="5.6">User Settings</NavDropdown.Item>
      </NavDropdown>
    </Nav>
	
      <header className="App-header">
        
        <p id = "pushed" align = "left">
         Logo
        </p>
       
      </header>
		
				<Table id = "todaysWeather" size = "sm" striped hover>
		  <thead>
			<tr>
			  <th>Time</th>
			  <th>Weather</th>
			</tr>
		  </thead>
		  <tbody>
			<tr>
			  <td>12 AM</td>
			  <td>Pull()</td>
			</tr>
			<tr>
			  <td>2 AM</td>
			  <td>Pull()</td>
			</tr>
			<tr>
			  <td>4 AM</td>
			  <td>Pull()</td>
			</tr>
			<tr>
			  <td>6 AM</td>
			  <td>Pull()</td>
			</tr>
			<tr>
			  <td>8 AM</td>
			  <td>Pull()</td>
			</tr>
			<tr>
			  <td>10 AM</td>
			  <td>Pull()</td>
			</tr>
			<tr>
			  <td>12 PM</td>
			  <td>Pull()</td>
			</tr>
			<tr>
			  <td>2 PM</td>
			  <td>Pull()</td>
			</tr>
			<tr>
			  <td>4 PM</td>
			  <td>Pull()</td>
			</tr>
			<tr>
			  <td>6 PM</td>
			  <td>Pull()</td>
			</tr>
			<tr>
			  <td>8 PM</td>
			  <td>Pull()</td>
			</tr>
			<tr>
			  <td>10 PM</td>
			  <td>Pull()</td>
			</tr>
			<tr>
			  <td>12 AM</td>
			  <td>Pull()</td>
			</tr>
		  </tbody>
		  
		</Table>
		
		
	 <ButtonToolbar className = "d-flex flex-column" aria-label="Toolbar with button groups">
	<ButtonGroup className="Btns" size = "lg" aria-label="First group">
    <Button >Sunday</Button>
    <Button>Monday</Button>
    <Button>Tuesday</Button>
    <Button>Wednesday</Button>
	<Button>Thursday</Button>
	<Button>Friday</Button>
	<Button>Saturday</Button>
  </ButtonGroup>
  </ButtonToolbar>
    </div>
  );
}
}

export default App;
/*
	<Navbar.Header>
	</Navbar.Header>
	<Navbar.Brand>
	</Navbar.Brand>
		<NavItem eventKey={1} href="#">Home</NavItem>
	<NavItem eventKey={2} href="#">Sign-In / Sign Up</NavItem>
	<NavDropdown eventKey={3} title = "Options" id ="main-dropdown">
		<MenuItem eventKey={3.1}>Doppler</MenuItem>
	</NavDropdown>
*/