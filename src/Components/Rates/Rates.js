import React from 'react';
import { Grid, makeStyles, ThemeProvider, Typography } from '@material-ui/core';
import { theme } from '../../themes/themes';

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
  sectionHeader: {
    fontFamily: 'unquote',
    fontSize: '28px',
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '1em',
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
  rate: {
    display: 'flex-box',
    alignContent: 'flex-end',
    marginLeft: '4em',
    marginRight: '2em',
    fontFamily: 'unquote',
    fontSize: '16',
    textAlign: 'left',
  },
  ulHeader: {
    fontFamily: 'unquote',
    fontSize: '16px',
    display: 'flex',
    alignContent: 'flex-start',
    marginLeft: '1em',
    marginRight: '2em',
    textTransform: 'bold',
    textAlign: 'left',
    fontWeight: 'bold',
  },
}));
const Rates = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Typography variant='h4' className={classes.sectionHeader}>
          Rates
        </Typography>
        <Typography variant='h6' className={classes.rootText}>
          Default Daily Rate $ 129
        </Typography>
        <Typography variant='h5' className={classes.subTitle}>
          Policy and Notes
        </Typography>
    
      </div>
    </ThemeProvider>
  );
};

export default Rates;
