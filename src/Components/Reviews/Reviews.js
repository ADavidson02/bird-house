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
      <main>
        <Grid container direction='row' className={classes.root} spacing={2}>
          <Grid item xs={12} s={6} md={4} l={3}>
            <Card className={classes.cardRoot}>
              <CardContent>
                <Typography variant='h5' component='h2'>
                  Arun
                </Typography>
                <StarIcon style={{ color: '#01579b' }}></StarIcon>
                <StarIcon style={{ color: '#01579b' }}></StarIcon>
                <StarIcon style={{ color: '#01579b' }}></StarIcon>
                <StarIcon style={{ color: '#01579b' }}></StarIcon>
                <StarIcon style={{ color: '#01579b' }}></StarIcon>
                <Typography variant='body2' component='p'>
                  This property is one of the best Airbnb’s I have stayed in.
                  Immaculate, spotless, perfection are some of the words which
                  come to mind to describe this property. It is located in a
                  great neighborhood and has an awesome deck. The property has
                  all the amenities you need and more. Last but not least, Micah
                  and his wife are such super friendly people and amazing hosts.
                  Thoroughly enjoyed my stay for 2 weeks and wish it was longer.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
      </main>
    </div>
  );
};

export default Reviews;
