import React from 'react';
import { Grid, makeStyles, Typography, GridList, GridListTile, Card, CardContent } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import { theme } from '../../themes/themes';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
  cardRoot: {
    // minWidth: 275,
    // display: 'flex',
    // height: '30em',
    margin: '1em',
    overflow: 'scroll',
    textAlign: 'left',
    // borderRadius: '1em',
    boxShadow: '6px 4px 9px 3px'
    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const Reviews = () => {
    const classes = useStyles();

  return (
    <div>
      <header>
        <Typography variant='h4' className={classes.sectionHeader}>
          Reviews
        </Typography>
      </header>
      
    </div>
  );
};

export default Reviews;
