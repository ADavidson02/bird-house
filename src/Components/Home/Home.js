import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, makeStyles } from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import{ Paper, Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import BottomNavigation from '@material-ui/core/BottomNavigationAction';
import TextField from '@material-ui/core/TextField';
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  column: {
    columnCount: 2
  },
    textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const Home = (props) => {
  let { history } = props;
  const classes = useStyles()
  const [value, setValue] = useState('')
  const [arrivalDate, setArrivalDate] = useState(null)
  const [departureDate, setDepartureDate] = useState(null)

  const handleArrivalChange  = (date) => {
    setArrivalDate(date)
  }
  const handleDepartureChange = (date) => {
    setDepartureDate(date)
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Paper elevation={0} className={classes.paper}>
          Picture
        </Paper>
        <Container>
          <TextField
            id='date'
            label='Arrival'
            type='date'
            defaultValue='Arrival'
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify='space-around'>
              <KeyboardDatePicker
                disableToolbar
                variant='dialog'
                format='MM/dd/yyy'
                margin='normal'
                id='date-picker'
                label='Arrivial'
                value={arrivalDate}
                onChange={handleArrivalChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
              <KeyboardDatePicker
                disableToolbar
                variant='dialog'
                format='MM/dd/yyy'
                margin='normal'
                id='date-picker'
                label='Departure'
                value={departureDate}
                onChange={handleDepartureChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </Container>
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
  );
};

export default Home;
