import React, { Component, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import {
  AppBar, Toolbar, IconButton, Typography, Hidden,
  Drawer, CssBaseline, MenuList, MenuItem
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Menu } from '@material-ui/icons'
import { compose } from 'recompose'
import SendIcon from '@material-ui/icons/Send'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Divider from '@material-ui/core/Divider'
import LockIcon from '@material-ui/icons/Lock'
import CloudIcon from '@material-ui/icons/Cloud'
import TimelineIcon from '@material-ui/icons/Timeline'
import BarChartIcon from '@material-ui/icons/BarChart'
import ShareIcon from '@material-ui/icons/Share';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const drawerWidth = 240

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
})

class Layout extends Component {
  state = {
    mobileOpen: false
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen })
  }

  render() {
    const { classes, location: { pathname }, children, gustbuddy } = this.props
    const { mobileOpen } = this.state

    const drawer = (
      <div>
        <Hidden smDown>
          <div className={classes.toolbar} />
        </Hidden>
        <MenuList>
          <MenuItem component={Link} to="/login" selected={'/login' === pathname}>
            <ListItemIcon>
              <LockIcon fontSize="small" />
            </ListItemIcon>
            Login
          </MenuItem>
          <MenuItem component={Link} to="/forecast" selected={'/forecast' === pathname}>
            <ListItemIcon>
              <TimelineIcon fontSize="small" />
            </ListItemIcon>
            Forecast
          </MenuItem>
          <MenuItem component={Link} to="/weather" selected={'/weather' === pathname}>
            <ListItemIcon>
              <CloudIcon fontSize="small" />
            </ListItemIcon>
            Weather
          </MenuItem>
          <MenuItem component={Link} to="/report" selected={'/report' === pathname}>
            <ListItemIcon>
              <ArrowUpwardIcon fontSize="small" />
            </ListItemIcon>
            User Reporting
          </MenuItem>
          <MenuItem component={Link} to="/statistics" selected={'/statistics' === pathname}>
            <ListItemIcon>
              <BarChartIcon fontSize="small" />
            </ListItemIcon>
            Statistics
          </MenuItem>
          <MenuItem component={Link} to="/main" selected={'/main' === pathname}>
            <ListItemIcon>
              <SendIcon fontSize="small" />
            </ListItemIcon>
            Main Page
          </MenuItem>
          <Divider />

          <MenuItem component={Link} to="/social" selected={'/social' === pathname}>
            <ListItemIcon>
              <ShareIcon fontSize="small" />
            </ListItemIcon>
            Social
          </MenuItem>
          
          <MenuList>
            {gustbuddy.map(({ id, name }) => {
              const to = `/gustbuddy/${id}`

              return <MenuItem
                to={to}
                key={id}
                className={classes.nested}
                component={Link}
                selected={to === pathname}
              >
                {name}
              </MenuItem>
            })}
          </MenuList>
        </MenuList>
      </div>
    )

    return <Fragment>
      <CssBaseline/>

      <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <Menu />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Gustbuddy
            </Typography>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>
    </Fragment>
  }
}

export default compose(
  withRouter,
  withStyles(styles)
)(Layout)
