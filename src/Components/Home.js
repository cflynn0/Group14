import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions";

import {
    AppBar, MenuList, MenuItem, Divider
  } from '@material-ui/core'
import { Link} from 'react-router-dom'

import ListItemIcon from '@material-ui/core/ListItemIcon'
import CloudIcon from '@material-ui/icons/Cloud'
import TimelineIcon from '@material-ui/icons/Timeline'
import BarChartIcon from '@material-ui/icons/BarChart'
import ShareIcon from '@material-ui/icons/Share';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import LockIcon from '@material-ui/icons/Lock'

class Home extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };
  render() {
    const { isLoggingOut, logoutError } = this.props;
    return (
      <div>
        <h1>This is your app's protected area.</h1>
        <AppBar></AppBar>
        <MenuList>
          <MenuItem component={Link} to="/forecast" >
            <ListItemIcon>
              <TimelineIcon fontSize="small" />
            </ListItemIcon>
            Forecast
          </MenuItem>
        
        <MenuItem component={Link} to="/weather" >
            <ListItemIcon>
              <CloudIcon fontSize="small" />
            </ListItemIcon>
            Weather
          </MenuItem>

          <MenuItem component={Link} to="/report" >
            <ListItemIcon>
              <ArrowUpwardIcon fontSize="small" />
            </ListItemIcon>
            User Reporting
          </MenuItem>

          <MenuItem component={Link} to="/statistics" >
            <ListItemIcon>
              <BarChartIcon fontSize="small" />
            </ListItemIcon>
            Statistics
          </MenuItem>

          <Divider />

          <MenuItem component={Link} to="/social" >
            <ListItemIcon>
              <ShareIcon fontSize="small" />
            </ListItemIcon>
            Social
          </MenuItem>
        
          <Divider />
        
          <MenuItem onClick={this.handleLogout}>
            <ListItemIcon>
                <LockIcon fontSize="small" />
            </ListItemIcon>  
            Logout
          </MenuItem>
            {isLoggingOut && <p>Logging Out....</p>}
            {logoutError && <p>Error logging out</p>}
        </MenuList>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError
  };
}
export default connect(mapStateToProps)(Home);