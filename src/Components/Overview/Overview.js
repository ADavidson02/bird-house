import React, { useState } from 'react';
import {
  Grid,
  makeStyles,
  ThemeProvider,
  Typography,
  GridList,
  GridListTile,
} from '@material-ui/core';
import { theme } from '../../themes/themes';
import { Button } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import './Overview.scss';
import imageOne from '../../assets/bird-house-1.webp';
import { birdHouse } from '../../assets/locationInformation';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    display: 'flex',
    flexDirection: 'row',
    flexFlow: 'wrap',

    alignContent: 'flex-start',

    padding: '1em',
    fontSize: '13px',
  },
  gridIcon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '.25em',
  },
  // subHeading: {
  //   fontFamily: 'unquote',
  //   fontSize: '58px',
  //   display: 'flex',
  //   alignContent: 'flex-start',
  //   marginLeft: '1em',
  //   marginRight: '4em',
  //   fontWeight: 'bold',
  //   textAlign: 'left',
  // },
  rootText: {
    display: 'flex-box',
    alignContent: 'flex-start',
    marginLeft: '4em',
    marginRight: '2em',
    fontFamily: 'unquote',
    fontSize: '16',
    textAlign: 'left',
  },
  pageTitle: {
    fontFamily: 'unquote',
    fontSize: '28px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: '.5em',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  subTitle: {
    fontFamily: 'unquote',
    fontSize: '19px',
    display: 'flex',
    alignContent: 'flex-start',
    marginLeft: '2em',
    fontWeight: 'bold',
  },
  ulText: {
    display: 'flex',
    alignContent: 'flex-start',
    marginRight: '2em',
    fontFamily: 'unquote',
    fontSize: '14',
    textAlign: 'left',
  },
  ulHeader: {
    fontFamily: 'unquote',
    fontSize: '16px',
    display: 'flex',
    alignContent: 'flex-start',
    marginLeft: '1em',
    marginRight: '2em',
    textTransform: 'bold',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  amenitiesList: {
    display: 'grid',
    flexDirection: 'column',
    justify: 'center',
    margin: '1px',
    padding: '1em',
  },
  amenitieIteam: {
    margin: '1px',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '3px',
    marginRight: '3px',
  },
  amenitiesIcon: {
    margin: '1px',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
  },
  gridList: {
    width: '600',
    height: '450',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
}));

const Overview = () => {
  const classes = useStyles();
  const locationInfo = birdHouse.blurbs;
  const amenitiesInfo = birdHouse.amenities;
  const iconList = birdHouse.iconsList;
  const amenitiesIcons = birdHouse.amenitiesIcons;

  const topIcons = iconList.map((iconItem) => {
    return (
      <div className={classes.gridIcon}>
        {iconItem.icon}
        <p style={{ marginRight: '1em', marginLeft: '.3em'}}>
          {iconItem.title}
        </p>
      </div>
    );
  })

  const infoBlurbs = locationInfo.map((inforBlurb) => {
    return (
      <Grid item>
        <Typography variant='h6' className={classes.subTitle}>
          {inforBlurb.title}
        </Typography>
        {inforBlurb.headline && (
          <p className={classes.rootText}>{inforBlurb.headline}</p>
        )}
        <p className={classes.rootText}>{inforBlurb.information}</p>
      </Grid>
    );
  });

  const amenitiesLists = amenitiesInfo.map((amenitiesList) => {
    const itemsList = amenitiesList.items.map((item) => {
      return <ul className={classes.ulText}>{item}</ul>;
    })
      return (
        <Grid item xs={6} s={6} md={4} lg={2} xl={2}>
          <Typography className={classes.subTitle}>
            {amenitiesList.title}
          </Typography>
          {itemsList}
        </Grid>
      )
  });

  const amenitiesIconDisplay = amenitiesIcons.map((icon) => {
    return (
      <div className={classes.amenitiesList}>
        <Grid
          item
          xs={3}
          s={3}
          md={2}
          lg={1}
          xl={1}
          className={classes.amenitieIteam}
        >
          {icon.title}
        </Grid>
        <Grid
          item
          xs={3}
          s={3}
          md={2}
          lg={1}
          xl={1}
          className={classes.amenitiesIcon}
        >
          {icon.icon}
        </Grid>
      </div>
    );
  })

  return (
    <ThemeProvider theme={theme}>
      <div>
        <GridList cellHeight={200} spacing={1} className={classes.gridList}>
          <GridListTile
            cols={2}
            rows={2}
            style={{ zIndex: 0, borderRadius: '5px' }}
          >
            <img
              src={imageOne}
              style={{
                borderRadius: '1em',
                //   width: '40em',
                //   height: '40em',
                //   zIndex: 0,
              }}
              alt='inside space'
              position='relative'
            />
          </GridListTile>
        </GridList>
        <Typography variant='h4' className={classes.pageTitle} color='primary'>
          Overview
        </Typography>
        <Grid item className={classes.grid}>
          {topIcons}
        </Grid>
        <Grid container>
          {infoBlurbs}
        </Grid>
        <Divider />
        <Grid container style={{ margin: '1em' }}>
          <Grid item xs={12}>
            <Typography variant='h5' className={classes.sectionHeader}>
              Amenities
            </Typography>
          </Grid>
            {amenitiesIconDisplay}
        </Grid>
        <div>
          <Grid container>
            {amenitiesLists}
          </Grid>
        </div>
        <Divider />
        <p>
          <Typography variant='h4' className={classes.sectionHeader}>
            House Rules
          </Typography>
        </p>
        <Divider />
        <Typography variant='h4' className={classes.sectionHeader}>
          Policy and Notes
        </Typography>
        <Typography variant='h6' className={classes.subTitle}>
          Payment Schedule
        </Typography>
        <Typography variant='h6' className={classes.subTitle}>
          Cancellation Policy
        </Typography>
        <Typography variant='h6' className={classes.subTitle}>
          Damage deposit
        </Typography>
      </div>
    </ThemeProvider>
  );
};

export default Overview;
