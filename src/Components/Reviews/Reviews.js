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
          <Grid item xs={12} s={6} md={4} l={3}>
            <Card className={classes.cardRoot}>
              <CardContent>
                <Typography variant='h5' component='h2'>
                  Jay
                </Typography>
                <StarIcon style={{ color: '#01579b' }}></StarIcon>
                <StarIcon style={{ color: '#01579b' }}></StarIcon>
                <StarIcon style={{ color: '#01579b' }}></StarIcon>
                <StarIcon style={{ color: '#01579b' }}></StarIcon>
                <StarIcon style={{ color: '#01579b' }}></StarIcon>
                <Typography variant='body2' component='p'>
                  The bird house was a really great place for us to vacation! We
                  stayed about a week. Could not have asked for a better place.
                  The kitchen was stocked very well with spices and
                  pots/pans/spatulas/plates/eating utensils. Place was sparkling
                  clean when we arrived and responses were quick from the host.
                  Lots of entertainment on the TV (Xbox,Netflix,Disney+). The
                  balcony was great for eating outside and star gazing! For the
                  price point I don’t think there’s a better place out there;
                  highly recommend if you’re wanting a place outside the city a
                  bit and don’t mind driving some.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} s={6} md={4} l={3}>
            <Card className={classes.cardRoot}>
              <CardContent>
                <Typography variant='h5' component='h2'>
                  Michaela
                </Typography>
                <StarIcon style={{ color: '#01579b' }}></StarIcon>
                <StarIcon style={{ color: '#01579b' }}></StarIcon>
                <StarIcon style={{ color: '#01579b' }}></StarIcon>
                <StarIcon style={{ color: '#01579b' }}></StarIcon>
                <StarIcon style={{ color: '#01579b' }}></StarIcon>
                <Typography variant='body2' component='p'>
                  Micah’s Bird House space was outstanding. There are many
                  Airbnb’s to choose from in Denver, I am so glad I decided to
                  book with Micah. This host is not only friendly and
                  personable, but very communicative. The apartment itself was
                  set up like a big open studio. It was comfortable, stylish,
                  bright, and welcoming. I was in the area to explore but found
                  myself staying in more than I anticipated because I loved this
                  space so much. I felt extremely safe which is a huge part of
                  why I choose certain Airbnb’s as a solo gal. The a/c and heat
                  worked like a charm and the kitchen has everything you could
                  ever need to prepare meals. Thank you for the complimentary
                  coffee, tea, and hot chocolate; those touches are always so
                  appreciated. I stayed here during my last few nights in
                  Colorado so having access to the washer/dryer was such a huge
                  perk. I came home with all fresh, clean clothes! Thank you
                  again, Micah. I would stay here again in a heartbeat.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default Reviews;
