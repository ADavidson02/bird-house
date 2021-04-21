import { makeStyles, Typography, Grid } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
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
  subTitle: {
    fontFamily: 'unquote',
    fontSize: '19px',
    display: 'flex',
    alignContent: 'flex-start',
    marginLeft: '2em',
    fontWeight: 'bold',
  },
}));

const Map = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant='h4' color='primary' className={classes.pageTitle}>
        Location
      </Typography>
      <div>
        <Typography variant='h6' className={classes.subTitle}>
          Neighborhood description:
        </Typography>
        <p className={classes.rootText}>
          The neighborhood is very quite and with miles of trail systems,
          including walking to the lake, accessible from the backyard it is a
          beautiful place to stay!
        </p>
        <Typography variant='h5' className={classes.subTitle}>
          Getting around
        </Typography>
        <p className={classes.rootText}>
          Our home is not walkable to restaurants and bars, a car is
          recommended. Plenty of street parking is available.
        </p>
        <Typography variant='h4' className={classes.sectionHeader}>
          Property
        </Typography>
        <Typography variant='h5' className={classes.subTitle}>
          Property Type
        </Typography>
        <p className={classes.rootText}>Guesthouse</p>
        <Typography variant='h5' className={classes.subTitle}>
          Guest Safety
        </Typography>
        <p className={classes.rootText}>
          Security cameras/audio recording devices
        </p>
        <p className={classes.rootText}>Carbon monoxide alarm</p>
        <p className={classes.rootText}>Smoke alarm</p>
        <p className={classes.rootText}>Must climb stairs</p>
        <p className={classes.rootText}>Pets live on property</p>
        <Grid container>
          <Grid item xs={12} s={12}>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d48810.50443357659!2d-104.93981834001048!3d40.12765730066404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1618595777154!5m2!1sen!2sus'
              style={{
                border: '0',
                width: '600px',
                height: '450px',
                margin: '2em',
              }}
              allowfullscreen=''
              loading='lazy'
            ></iframe>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Map;
