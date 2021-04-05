import React from 'react'
import { Grid, makeStyles, ThemeProvider, Typography } from '@material-ui/core';
import PeopleOutlinedIcon from '@material-ui/icons/PeopleOutlined';
import { theme } from '../../themes/themes';
import KingBedOutlinedIcon from '@material-ui/icons/KingBedOutlined';
import EmojiFoodBeverageOutlinedIcon from '@material-ui/icons/EmojiFoodBeverageOutlined';
import BathtubOutlinedIcon from '@material-ui/icons/BathtubOutlined';

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
      <Grid container>

      </Grid>
      <div>
        <Typography variant='h4'>
          Loft
        </Typography>
        <Grid item className={classes.grid}>
        <PeopleOutlinedIcon />
         4 Guests
          <KingBedOutlinedIcon />
         2 beds
        <BathtubOutlinedIcon />
        1 bathroom
        <EmojiFoodBeverageOutlinedIcon />
        Full kitchen
        </Grid>
      </div>
    </ThemeProvider>
    
  )
}

export default Overview;