import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Grid, makeStyles, ThemeProvider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core';
import { theme } from '../../themes/themes';
// import Typography from '@material-ui/core/Typography';
import imageOne from '../../assets/bird-house-1.webp'
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
import DateRangeIcon from '@material-ui/icons/DateRange';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker } from '@material-ui/pickers';

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
  top: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '1'
  },
  bar: {
    marginTop: '1em',
    outline: '3px solid red',
    justifyContent: 'center',
    zIndex: '1'
  },
  button: {
    color: 'white',


  }

}));

const Home = (props) => {
  let { history } = props;
  const classes = useStyles();
  const [arrivalDate, setArrivalDate] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [dateError, setDateError] = useState(false)

  const handleArrivalChange = (arrivalDate) => {
    setDateError(false)
    setArrivalDate(arrivalDate);
  };
  const handleDepartureChange = (departureDate) => {
    setDateError(false)
    setDepartureDate(departureDate);
  };

  const handleBook = (aDate, dDate) => {
    if ( !arrivalDate || !departureDate){
      setDateError(true)
      return
    }
    console.log(aDate);
    console.log(dDate);
    history.push('/book');
  };

  return (
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container className={classes.top}>
          <img src={imageOne} />
        </Grid>
        <Grid container spacing={0} className={classes.bar}>
          <Grid item xs={2}>
              <DatePicker
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
            </Grid>
            <Grid item xs={2}>
              <DatePicker
                startIcon={<DateRangeIcon />}
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
            </Grid>
            <Grid item xs={2}>
              <Button variant='contained' onClick={(e) => handleBook(arrivalDate, departureDate)} className={classes.button}>
                Book Now
              </Button>
          </Grid>
              {dateError && <h3>Please make sure both fields have a date</h3>}

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
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default Home;
