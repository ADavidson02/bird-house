import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Grid, makeStyles, ThemeProvider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Paper, Typography } from '@material-ui/core';
import { theme } from '../../themes/themes';
// import Typography from '@material-ui/core/Typography';
import imageOne from '../../assets/bird-house-1.webp';
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
    borderRadius: '1',
    zIndex: 0,
  },
  bar: {
    marginTop: '1em',
    marginLeft: '1em',
    outline: '3px solid red',
    // maxWidth: '100%',
    display: 'flex',
    justify: 'center',
    // alignContent: 'center',
    zIndex: '1',
    // direction: 'row'
  },
  image: {
    width: '30em',
    height: '20em',
    borderRadius: '.3125em',
    display: 'block',
    position: 'relative',
  },
  button: {
    color: 'white',
    backgroundColor: 'teal',
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis: '0',
  },
  ui: {
    margin: '2px',
  }
}));

const Home = (props) => {
  let { history } = props;
  const classes = useStyles();
  const [arrivalDate, setArrivalDate] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [dateError, setDateError] = useState(false);

  const handleArrivalChange = (arrivalDate) => {
    setDateError(false);
    setArrivalDate(arrivalDate);
  };
  const handleDepartureChange = (departureDate) => {
    setDateError(false);
    setDepartureDate(departureDate);
  };

  const handleBook = (aDate, dDate) => {
    if (!arrivalDate || !departureDate) {
      setDateError(true);
      return;
    }
    console.log(aDate);
    console.log(dDate);
    history.push('/book');
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container className={classes.top}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <img src={imageOne} style={{ borderRadius: '.5125em', width: '40em', height: '40em' }} />
          <Grid container>
            <Grid item xs={12}>
              <Typography variant='h4' style={{ zIndex: 1 }}>
                Welcome to the Birdhouse
              </Typography>
            </Grid>
            <Grid container spacing={0} className={classes.bar}>
              <Grid item lg={3} md={3} xs={false}>
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
              <Grid item lg={3} md={3} xs={false} spacing={0}>
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
              <Grid item lg={3} md={3} xs={6}>
                <Button
                  variant='contained'
                  onClick={(e) => handleBook(arrivalDate, departureDate)}
                  className={classes.button}
                >
                  Book Now
                </Button>
              </Grid>
            </Grid>
            {dateError && <h3>Please make sure both fields have a date</h3>}
          </Grid>
        </MuiPickersUtilsProvider>
      </Grid>
    </ThemeProvider>
  );
};

export default Home;
