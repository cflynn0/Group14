import React from 'react';
import { Link } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import PeopleIcon from '@material-ui/icons/People';
import MessageIcon from '@material-ui/icons/Message';
import CloudIcon from '@material-ui/icons/Cloud';
import FlareIcon from '@material-ui/icons/Flare';
import ShareIcon from '@material-ui/icons/Share';
import ListAltIcon from '@material-ui/icons/ListAlt';
import TimelineIcon from '@material-ui/icons/Timeline';
// import AssignmentIcon from '@material-ui/icons/Assignment';
// import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
// import BarChartIcon from '@material-ui/icons/BarChart';
// import LayersIcon from '@material-ui/icons/Layers';
// import DashboardIcon from '@material-ui/icons/Dashboard';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


export const mainListItems = (
  
  <div>
    <ListItem button>
      <ListItemIcon>
        <CloudIcon />
      </ListItemIcon>
      <ListItemText primary="Forecast" /> 
	</ListItem>
	
    <ListItem button>
      <ListItemIcon>
        <TimelineIcon />
      </ListItemIcon>
      <ListItemText primary="History" />
    </ListItem>
	
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Weather Tracker" />
    </ListItem>
	
    <ListItem button>
      <ListItemIcon>
        <ListAltIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
	
    <ListItem button>
      <ListItemIcon>
        <FlareIcon />
      </ListItemIcon>
      <ListItemText primary="Astrology" />
    </ListItem>
	
	<ListItem button>
      <ListItemIcon>
        <MessageIcon />
      </ListItemIcon>
      <ListItemText primary="Weather Assistant" />
    </ListItem>
	
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Social Media Share</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <ShareIcon />
      </ListItemIcon>
      <ListItemText primary="Facebook" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShareIcon />
      </ListItemIcon>
      <ListItemText primary="Twitter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShareIcon />
      </ListItemIcon>
      <ListItemText primary="Instagram" />
    </ListItem>
  </div>
);