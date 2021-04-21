import React, { useState } from 'react';
import { Grid, makeStyles, ThemeProvider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Paper, Typography } from '@material-ui/core';
import { theme } from '../../themes/themes';
import imageOne from '../../assets/bird-house-1.webp';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker } from '@material-ui/pickers';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  gridList: {
    width: '600',
    height: '450',
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '1',
  },
  button: {
    color: 'white',
    backgroundColor: 'teal',
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis: '0',
    margin: '0',
    '&:hover': {
      backgroundColor: 'green',
    },
  },
  ui: {
    margin: '2px',
  },
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
      <Grid
        container
        className={classes.root}
        style={{
          outline: 'solid blue 4px',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
          <Grid
            container
            style={{
              marginBottom: '3px',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <Grid item xs={12}>
              <Typography
                variant='h4'
                position='relative'
                style={{ zIndex: 1 }}
              >
                Welcome to the Birdhouse
              </Typography>
            </Grid>
            <Grid>
              <GridList spacing={1} cols={3}>
                {/* <Grid
              container
              spacing={0}
              className={classes.bar}
              style={{ zIndex: 2 }}
            > */}
                <GridListTile cols={1}>
                  {/* <Grid item xs={false}> */}
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
                </GridListTile>
                {/* <Grid item> */}
                <GridListTile cols={1}>
                  <DatePicker
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
                  {/* </Grid> */}
                </GridListTile>
                {/* <Grid item> */}
                <GridListTile cols={1}>
                  <Button
                    endIcon={<ArrowForwardIosIcon />}
                    variant='contained'
                    onClick={(e) => handleBook(arrivalDate, departureDate)}
                    className={classes.button}
                  >
                    Book Now
                  </Button>
                  {/* </Grid> */}
                </GridListTile>
              </GridList>
            </Grid>
            {/* </Grid> */}
            {/* </Grid> */}
            {dateError && <h3>Please make sure both fields have a date</h3>}
          </Grid>
        </MuiPickersUtilsProvider>
        <Grid
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <GridList cellHeight={280} cols={2} spacing={4}>
            <GridListTile cols={1} >
              <img src={imageOne} className={classes.image} alt='sample 1' />
            </GridListTile>
            <GridListTile cols={1}>
              <Paper elevation={0} className={classes.paper}>
                Description
              </Paper>
            </GridListTile>
          </GridList>
          <GridList
            cellHeight={280}
            cols={2}
            spacing={4}
            // style={{ display: 'flex' }}
          >
            <GridListTile cols={1} rows={1}>
              <img src={imageOne} className={classes.image} alt='sample 2' />
            </GridListTile>
            <GridListTile cols={1} rows={1}>
              <Paper elevation={0} className={classes.paper}>
                Description
              </Paper>
            </GridListTile>
          </GridList>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Home;
