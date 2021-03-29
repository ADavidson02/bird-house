import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, makeStyles } from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import{ Paper, Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import BottomNavigation from '@material-ui/core/BottomNavigationAction';
import TextField from '@material-ui/core/TextField';


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

const Home = () => {
  const classes = useStyles()
  const [value, setValue] = useState('')
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Paper elevation={0} className={classes.paper}>
          Picture
        </Paper>
        <Container>
          <TextField
          id="date"
          label="Arrival"
          type='date'
          defaultValue="Arrivial"
          className={classes.textField}
                  InputLabelProps={{
          shrink: true,
        }} />
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
