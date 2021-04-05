import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Grid, makeStyles, ThemeProvider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core';
import { theme } from '../../themes/themes';
// import Typography from '@material-ui/core/Typography';
// import imageOne from '../../assets/bird-house-1.webp'
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  gridList: {
    width: 500,
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  gridRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  textField: {},
}));

const Home = (props) => {
  let { history } = props;
  const classes = useStyles();
  const [arrivalDate, setArrivalDate] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);

  const handleArrivalChange = (arrivalDate) => {
    setArrivalDate(arrivalDate);
  };
  const handleDepartureChange = (departureDate) => {
    setDepartureDate(departureDate);
  };

  const handleBook = (aDate, dDate) => {
    console.log(aDate);
    console.log(dDate);
    history.push('/book');
  };

  return (
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Paper>
              <KeyboardDatePicker
                disableToolbar
                variant='outlined'
                format='MM/dd/yyyy'
                margin='normal'
                id='arrival-date'
                label='Arrival'
                value={arrivalDate}
                onChange={handleArrivalChange}
                KeyboardButtonProps={{
                  'aria-label': 'change arrival date',
                }}
              />
              <KeyboardDatePicker
                disableToolbar
                variant='outlined'
                format='MM/dd/yyyy'
                margin='normal'
                id='departure-date'
                label='Departure'
                value={departureDate}
                onChange={handleDepartureChange}
                KeyboardButtonProps={{
                  'aria-label': 'change depature date',
                }}
              />
              <Button onClick={(e) => handleBook(arrivalDate, departureDate)}>Book Now</Button>
            </Paper>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ outline: 'red 3px' }}
            className={classes.column}
          >
            <Paper elevation={0} className={classes.paper}>
              Picture
            </Paper>
            <Paper elevation={0} className={classes.paper}>
              Description
            </Paper>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ outline: 'red 3px' }}
            className={classes.column}
          >
            <Paper elevation={0} className={classes.paper}>
              Picture
            </Paper>
            <Paper elevation={0} className={classes.paper}>
              Description
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper>6</Paper>
          </Grid>
        </Grid>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default Home;
