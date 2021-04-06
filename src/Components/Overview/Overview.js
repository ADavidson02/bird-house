import React from 'react';
import { Grid, makeStyles, ThemeProvider, Typography } from '@material-ui/core';
import PeopleOutlinedIcon from '@material-ui/icons/PeopleOutlined';
import { theme } from '../../themes/themes';
import KingBedOutlinedIcon from '@material-ui/icons/KingBedOutlined';
import EmojiFoodBeverageOutlinedIcon from '@material-ui/icons/EmojiFoodBeverageOutlined';
// import BathtubOutlinedIcon from '@material-ui/icons/BathtubOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import LocalParkingOutlinedIcon from '@material-ui/icons/LocalParkingOutlined';
import TvOutlinedIcon from '@material-ui/icons/TvOutlined';
import FireplaceOutlinedIcon from '@material-ui/icons/FireplaceOutlined';
import LocalLaundryServiceOutlinedIcon from '@material-ui/icons/LocalLaundryServiceOutlined';
import WifiOutlinedIcon from '@material-ui/icons/WifiOutlined';
import KitchenOutlinedIcon from '@material-ui/icons/KitchenOutlined';
import './Overview.scss';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'flex-start',
    marginLeft: '4em',
    marginRight: '4em',
  },
  subHeading: {
    fontFamily: 'unquote',
    fontSize: '58px',
    display: 'flex',
    alignContent: 'flex-start',

    marginLeft: '1em',
    marginRight: '4em',
    textTransform: 'bold',
    textAlign: 'left',
  },
  rootText: {
    display: 'flex',
    alignContent: 'flex-start',
    marginLeft: '4em',
    marginRight: '4em',
    fontFamily: 'unquote',
    fontSize: '16',
    textAlign: 'left',
  },
  subTitle: {
    display: 'flex',
    alignContent: 'flex-start',
    marginLeft: '4em',
    marginRight: '4em',
  },
  sectionHeader: {
    fontFamily: 'unquote',
    fontSize: '47px',
    display: 'flex',
    alignContent: 'flex-start',
    marginLeft: '1em',
    marginRight: '4em',
    textTransform: 'bold',
    textAlign: 'left',
  },
}));

const Overview = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid container></Grid>
      <div>
        <Typography variant='headline1' className={classes.subHeading}>
          Loft
        </Typography>
        <Grid item className={classes.grid}>
          <HomeOutlinedIcon />
          Entire House
          <PeopleOutlinedIcon />
          4 Guests
          <KingBedOutlinedIcon />
          2 beds
          <FingerprintIcon />
          Self check-in
          <EmojiFoodBeverageOutlinedIcon />
          Full kitchen
        </Grid>
        <p className={classes.rootText}>
          The Bird House is a completely private studio with everything you
          need! With no shared spaces or walls, a large private deck with
          beautiful scenery, this is the perfect place to unwind after a day of
          exploring! Or cuddle up with the elegant electric fireplace, and watch
          your favorite streaming services on a 50" TV and just stay in and
          relax. The modern kitchen makes cooking simple & convenient and the
          stunning bathroom with 2 shower heads will leave you refreshed, never
          wanting to leave!
        </p>
        <Typography variant='h6' className={classes.subTitle}>
          The space
        </Typography>
        <p className={classes.rootText}>
          Welcome to the Bird House! We can not wait to have you stay!
        </p>
        <p className={classes.rootText}>
          The Bird House is a studio style living arrangement, above a detached
          garage, that we designed with comfort and convenience in mind. You
          will find everything you need for a couple nights or several months in
          this completely private space. No shared walls, no shared living
          space, and tons of privacy on the back deck! As you arrive at our
          quiet, charming neighborhood you will find plenty of parking in front
          of our home. Checking in is as simple as entering a 4-digit code and
          walking in. Inside you will be greeted by beautiful new, modern
          finishes and you will immediately feel at home!
        </p>
        <Typography variant='h6' className={classes.subTitle}>
          Kitchen
        </Typography>
        <p className={classes.rootText}>
          One of our guest favorite amenity is the kitchen. You will find a
          full-size refrigerator, 2 burner electric cooktop, a convection
          microwave (we do not have a traditional oven, but the microwave can
          heat just like one), sink and dishwasher. We also stock the kitchen
          with the majority of supplies you will need for cooking and dining.
          Such as, salt, pepper, oil, vinegar, pots, pans, mixing bowls, a
          Keurig with supplied K-cups, a regular coffee maker, plates, bowls,
          cups, silverware, knives, cooking utensils, toaster and a Britta
          purified water pitcher.
        </p>
        <Typography variant='h6' className={classes.subTitle}>
          Living Room
        </Typography>
        <p className={classes.rootText}>
          Weather you plan to be out exploring for most of your stay, or you
          just want a place to relax and escape the world you will enjoy the
          entertainment provided in the Bird House. You will find a comfy sofa
          and chair to relax and watch the 50” TV. We provide your favorite
          streaming service such as Netflix, Disney+, and Prime Video. You are
          also welcomed to sign into your personal accounts on the smart TV.
          Tired of binging TV? Turn on the XBOX 360 and choose a game from a
          large variety of games or put a movie in the Blu-Ray from our
          selection. Want to warm up a bit more or set the mood for a romantic
          evening? Turn on the electric fireplace, with or without the heat, and
          enjoy the ambiance.
        </p>
        <Typography variant='h6' className={classes.subTitle}>
          Sleeping
        </Typography>
        <p className={classes.rootText}>
          The main bed is a very comfy queen mattress on a custom murphy bed.
          The murphy bed is designed to fold up to make more space if needed. No
          expense was spared with the sleeping arrangements as a good night
          sleep is one of the most important factors for a great stay! There is
          also a desk that can be flipped out when the murphy bed is up! You
          will find another bed as a queen sleeper sofa with an upgraded memory
          foam mattress. I like to let our reviews to speak for themselves and
          the mattresses are always very important. (From Leslie, we were
          exhausted in the evening, and the beds were so comfy - even the sofa
          sleeper!)
        </p>
        <Typography variant='h6' className={classes.subTitle}>
          Bathroom
        </Typography>
        <p className={classes.rootText}>
          The bathroom is a small, but a stunning ¾ bath (no bathtub). The
          shower has both a traditional shower head and a rain shower head that
          can be controlled independently for ultimate comfort.
        </p>
        <Typography variant='h6' className={classes.subTitle}>
          Outdoor Space
        </Typography>
        <p className={classes.rootText}>
          Walk out the French doors onto a beautiful and peaceful deck. At over
          20’ wide you will find a table for 4 to enjoy a peaceful meal, a sofa
          to relax while drinking your morning coffee and watch the sun rise
          over the lake! Out the front windows and over the North West side of
          the deck you can get a small view of the Rocky Mountains. You may also
          use the gate in our backyard to access miles of trails around the
          different neighborhoods and a walk around the lake, just know this is
          our space and our dogs may come out to say hello! The views of the
          Rocky Mountains from the lake are amazing! This is by far my favorite
          part of our place, enjoying the scenery and fresh air!
        </p>
        <Typography variant='h6' className={classes.subTitle}>
          Other things to know
        </Typography>
        <p className={classes.rootText}>
          You will also find an all in one washer and dryer in the walk-in
          closet making long term stays very convenient. No need to move from
          the washer to the dryer, this one machine does both! 420 Friendly –
          It’s Colorado, it’s legal, so have some fun. Just please be respectful
          and do not smoke inside and please keep the windows and doors closed
          while smoking. The deck is a perfect location to partake, please just
          be respectful of our neighbors and their kids. Be discrete please.
          Window coverings are designed for privacy when needed but still allow
          for natural light with adjustable shutters, top down bottom up blinds
          and sheer or blackout curtains. When they are all closed you can
          easily sleep during the day if needed. We do live in the main home
          that you can see in the last picture. If you read through the reviews,
          many people will mention how private the place is. With the deck being
          on the back you will hardly ever see us unless we are also enjoying
          the backyard. We do use the garage below you, however you can hardly
          hear it open with how well insulated the floor is. We do have 2 dogs.
          They are both friendly but our white dog, Varly, will bark at you if
          he is outside until he is comfortable with you, then he just wants to
          kiss you. They have no access to you unless you choose to enter our
          backyard. If you are missing your own dogs, or just want to say hello,
          please feel free to but always close gates behind you and do not let
          them out of the fenced area. Pack and play as well as a baby gate are
          available for your use in the Bird House for those traveling with
          children. Thanks for your interest in our place and please do not
          hesitate to reach out with any additional questions!
        </p>
        <Typography variant='h5' className={classes.sectionHeader}>
          Amenities
        </Typography>
        <Grid container col={2}>
          <Grid item>
            <WbSunnyOutlinedIcon />
            Private Deck
          </Grid>
          <Grid item>
            <AcUnitOutlinedIcon />
            Air conditioning
          </Grid>
          <Grid item>
            <TvOutlinedIcon />
            50" HDTV with Amazon Prime Video, Netflix
          </Grid>
          <Grid item>
            <LocalParkingOutlinedIcon />
            Free street parking
          </Grid>
          <Grid item>
            <FireplaceOutlinedIcon />
            Indoor fireplace
          </Grid>
          <Grid item>
            <LocalLaundryServiceOutlinedIcon />
            Washer/Dryer
          </Grid>
          <Grid item>
            <WifiOutlinedIcon />
            Wifi
          </Grid>
          <Grid item>
            <KitchenOutlinedIcon />
            Kitchen
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default Overview;
