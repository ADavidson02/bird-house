import React from 'react';
import { Grid, makeStyles, Typography, GridList, GridListTile, Card, CardContent } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import { theme } from '../../themes/themes';
import { importedReviews } from '../../assets/importedReviews';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  pageTitle: {
    fontFamily: 'unquote',
    fontSize: '28px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: '.5em',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  cardRoot: {
    minWidth: 275,
    // display: 'flex',
    height: '27em',
    margin: '2em',
    overflow: 'scroll',
    textAlign: 'left',
    boxShadow: '6px 4px 9px 3px',
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
    const guestReviews = importedReviews.reviews

    const reviewCards = guestReviews.map((guestReview) => {
      return (
        <Card key={guestReview.id} className={classes.cardRoot}>
          <CardContent>
            <Typography variant='h5' component='h2'>
             {guestReview.name}
            </Typography>
            <StarIcon style={{ color: '#01579b' }}></StarIcon>
            <StarIcon style={{ color: '#01579b' }}></StarIcon>
            <StarIcon style={{ color: '#01579b' }}></StarIcon>
            <StarIcon style={{ color: '#01579b' }}></StarIcon>
            <StarIcon style={{ color: '#01579b' }}></StarIcon>
            <Typography variant='body2' component='p'>
              {guestReview.writtenReview}
            </Typography>
          </CardContent>
        </Card>
      );
    })

  return (
    <div>
      <header>
        <Typography variant='h4' color='primary' className={classes.pageTitle}>
          Reviews
        </Typography>
      </header>
      <main>
        <Grid
          container
          direction='row'
          className={classes.root}
          cols={2}
          spacing={2}
        >
          <Grid item xs={12} s={6} md={6} l={6}>
          {reviewCards}
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default Reviews;
