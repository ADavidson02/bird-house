import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

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
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'left',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'teal'
  },
  title: { flexGrow: 1, color: 'teal' },
  headerOptions: { margin: '0 10px' },
}));

const Header = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEle, setAnchorEle] = useState(null);
  const open = Boolean(anchorEle);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const handleMenu = (event) => {
    setAnchorEle(event.currentTarget);
  };

  const handleMenuClick = (routerURL) => {
    history.push(routerURL);
    setAnchorEle(null);
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
      <AppBar position='static'>
        <Toolbar style={{ background: 'white' }}>
          <Typography
            variant='h6'
            className={classes.title}
            style={{ color: 'teal', marginRight: '4em' }}
          >
            Birdhouse
          </Typography>
          <div>
            {isMobile ? (
              <>
                <IconButton
                  edge='start'
                  className={classes.menuButton}
                  color='teal'
                  aria-label='menu'
                  onClick={handleMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id='menu-appbar'
                  anchorEle={anchorEle}
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
                  onClose={() => setAnchorEle(null)}
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
                      data-testid={menuItem.menuTitle}
                      key={menuItem.menuTitle}
                      onClick={() => handleMenuClick(menuItem.pageURL)}
                      style={{color: 'teal', textSizeAdjust: 'small'}}
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
      {!navigator.onLine && (
        <div
          style={{
            textAlign: 'center',
            background:
              'linear-gradient(180deg, rgba(255,70,37,1) 0%, rgba(51,34,0,1) 100%)',
          }}
        >
          <Typography>Currently Offline</Typography>
        </div>
      )}
    </div>
  );
};

export default withRouter(Header);