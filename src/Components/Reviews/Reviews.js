import React from 'react';
import {
  Grid,
  makeStyles,
  Typography,
  Card,
  CardContent,
} from '@material-ui/core';
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
    marginTop: '.5em',
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
    boxShadow: '0px 4px 10px 0px',
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
  const guestReviews = importedReviews.reviews;
  const reviewCards = guestReviews.map((guestReview) => {
    return (
        <Grid item  s={6} md={4} l={4}>
        <Card key={guestReview.id} className={classes.cardRoot}>
          <CardContent>
            <Typography variant='h6'>{guestReview.name}</Typography>
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
        </Grid>
    );
  });

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
          // className={classes.root}
          cols={3}
          spacing={1}
        >
            {reviewCards}
        </Grid>
      </main>
    </div>
  );
};

export default Reviews;
