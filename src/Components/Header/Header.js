import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  MenuItem,
  Menu,
  useMediaQuery,
  ThemeProvider
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'left',
    elevation: 0,
    maxWidth: '100%',
    overflowX: 'hidden',
    color: '#333',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'teal',
  },
  title: { flexGrow: 1, color: 'teal' },
  headerOptions: { margin: '0 10px'},
  buttons: {
    '&:hover': {
      textDecoration: 'underline',
      color: 'teal',
    },
    '&:active': {
      textDecoration: 'underline',
      color: 'teal',
    },
    '&:after': {
      textDecoration: 'underline',
      color: 'teal',
    },
  },
}));

const Header = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (routerURL) => {
    history.push(routerURL);
    setAnchorEl(null);
   
  };

  const menuItems = [
    {
      menuTitle: 'Home',
      pageURL: '/',
    },
    {
      menuTitle: 'Overview',
      pageURL: '/overview',
    },
    {
      menuTitle: 'Map',
      pageURL: '/map',
    },
    {
      menuTitle: 'Gallery',
      pageURL: '/gallery',
    },
    {
      menuTitle: 'Rates',
      pageURL: '/rates',
    },
    {
      menuTitle: 'Availability',
      pageURL: '/availability',
    },
    {
      menuTitle: 'Reviews',
      pageURL: '/reviews',
    },
    {
      menuTitle: 'Contact',
      pageURL: '/contact',
    },
    {
      menuTitle: 'Book',
      pageURL: '/book',
    },
  ];

  return (
      <div className={classes.root}>
        <AppBar position='static' elevation={0}>
          <Toolbar style={{ background: 'white'}}>
            <Typography variant='h6' className={classes.title}>
              Birdhouse
            </Typography>
            <div>
              {isMobile ? (
                <>
                  <IconButton
                    edge='start'
                    className={classes.menuButton}
                    color='inherit'
                    aria-label='menu'
                    onClick={handleMenu}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id='menu-appbar'
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                  >
                    {menuItems.map((menuItem) => {
                      return (
                        <MenuItem
                          key={menuItem.menuTitle}
                          onClick={() => handleMenuClick(menuItem.pageURL)}
                        >
                          {menuItem.menuTitle}
                        </MenuItem>
                      );
                    })}
                  </Menu>{' '}
                </>
              ) : (
                <div className={classes.headerOptions}>
                  {menuItems.map((menuItem) => {
                    return (
                      <Button
                        className={classes.buttons}
                        data-testid={menuItem.menuTitle}
                        key={menuItem.menuTitle}
                        onClick={() => handleMenuClick(menuItem.pageURL)}
                        style={{ color: 'primary', textSizeAdjust: 'small' }}
                      >
                        {menuItem.menuTitle}
                      </Button>
                    );
                  })}
                </div>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </div>
  );
};

export default withRouter(Header);
