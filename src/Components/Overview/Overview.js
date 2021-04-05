import React from 'react'
import { Grid, makeStyles, ThemeProvider, Typography } from '@material-ui/core';
import PeopleOutlinedIcon from '@material-ui/icons/PeopleOutlined';
import { theme } from '../../themes/themes';
import KingBedOutlinedIcon from '@material-ui/icons/KingBedOutlined';
import EmojiFoodBeverageOutlinedIcon from '@material-ui/icons/EmojiFoodBeverageOutlined';
import BathtubOutlinedIcon from '@material-ui/icons/BathtubOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FingerprintIcon from '@material-ui/icons/Fingerprint';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'start',
  }
}))

const Overview = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid container></Grid>
      <div>
        <Typography variant='h4'>Loft</Typography>
        <Grid item className={classes.grid}>
          <HomeOutlinedIcon />
          Entire House
          <PeopleOutlinedIcon />
          4 Guests
          <KingBedOutlinedIcon />
          2 beds
          <FingerprintIcon />
          Self check-in
          <EmojiFoodBeverageOutlinedIcon />
          Full kitchen
        </Grid>
        <p>
          The Bird House is a completely private studio with everything you
          need! With no shared spaces or walls, a large private deck with
          beautiful scenery, this is the perfect place to unwind after a day of
          exploring! Or cuddle up with the elegant electric fireplace, and watch
          your favorite streaming services on a 50" TV and just stay in and
          relax. The modern kitchen makes cooking simple & convenient and the
          stunning bathroom with 2 shower heads will leave you refreshed, never
          wanting to leave!
        </p>

      </div>
    </ThemeProvider>
  );
}

export default Overview;