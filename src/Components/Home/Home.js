import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import{ Paper, Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import imageOne from '../../assets/bird-house-1.webp'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { red } from '@material-ui/core/colors';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
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
  textField: {
    

  }
}));

const Home = (props) => {
  let { history } = props;
  const classes = useStyles()
  const [value, setValue] = useState('')
  const [selectedDate, setSelectedDate] = useState(new Date(''))
  const [arrivalDate, setArrivalDate] = useState(null)
  const [departureDate, setDepartureDate] = useState(null)
  
  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  const handleArrivalChange  = (date) => {
    setArrivalDate(date)
    console.log(arrivalDate)
  }
  const handleDepartureChange = (date) => {
    setDepartureDate(date)
  }

  const handleBook = (arrivalDate, departureDate) => {
  }

  return (
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
                'aria-label': 'change date',
              }}
            />
            <KeyboardDatePicker
              disableToolbar
              variant='outlined'
              format='MM/dd/yyyy'
              margin='normal'
              id='arrival-date'
              label='Departure'
              value={departureDate}
              onChange={handleDepartureChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <Button onClick={() => handleBook}>Book Now</Button>
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
  );
};

export default Home;
