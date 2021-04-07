import React, { useState } from 'react';
import { Grid, makeStyles, ThemeProvider, Typography } from '@material-ui/core';
import PeopleOutlinedIcon from '@material-ui/icons/PeopleOutlined';
import { theme } from '../../themes/themes';
import KingBedOutlinedIcon from '@material-ui/icons/KingBedOutlined';
import { Button } from '@material-ui/core';
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
import Divider from '@material-ui/core/Divider';
import './Overview.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'flex-start',
    marginLeft: '2em',
    marginRight: '2em',
    padding: '1em',
    fontSize: '13px',
  },
  subHeading: {
    fontFamily: 'unquote',
    fontSize: '58px',
    display: 'flex',
    alignContent: 'flex-start',
    marginLeft: '1em',
    marginRight: '4em',
    fontWeight: 'bold',
    textAlign: 'left',
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
  subTitle: {
    fontFamily: 'unquote',
    fontSize: '19px',
    display: 'flex',
    alignContent: 'flex-start',
    marginLeft: '2em',
    marginRight: '2em',
    fontWeight: 'bold',
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

  ulText: {
    display: 'flex',
    alignContent: 'flex-start',
    marginRight: '2em',
    fontFamily: 'unquote',
    fontSize: '14',
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

const Overview = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Typography variant='h4' className={classes.sectionHeader}>
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
        <Grid container>
          <Grid item>
            <p className={classes.rootText}>
              The Bird House is a completely private studio with everything you
              need! With no shared spaces or walls, a large private deck with
              beautiful scenery, this is the perfect place to unwind after a day
              of exploring! Or cuddle up with the elegant electric fireplace,
              and watch your favorite streaming services on a 50" TV and just
              stay in and relax. The modern kitchen makes cooking simple &
              convenient and the stunning bathroom with 2 shower heads will
              leave you refreshed, never wanting to leave!
            </p>
          </Grid>
          <Grid item>
            <Typography variant='h6' className={classes.subTitle}>
              The space
            </Typography>
            <p className={classes.rootText}>
              Welcome to the Bird House! We can not wait to have you stay!
            </p>
            <p className={classes.rootText}>
              The Bird House is a studio style living arrangement, above a
              detached garage, that we designed with comfort and convenience in
              mind. You will find everything you need for a couple nights or
              several months in this completely private space. No shared walls,
              no shared living space, and tons of privacy on the back deck! As
              you arrive at our quiet, charming neighborhood you will find
              plenty of parking in front of our home. Checking in is as simple
              as entering a 4-digit code and walking in. Inside you will be
              greeted by beautiful new, modern finishes and you will immediately
              feel at home!
            </p>
          </Grid>
          <Grid item>
            <Typography variant='h6' className={classes.subTitle}>
              Kitchen
            </Typography>
            <p className={classes.rootText}>
              One of our guest favorite amenity is the kitchen. You will find a
              full-size refrigerator, 2 burner electric cooktop, a convection
              microwave (we do not have a traditional oven, but the microwave
              can heat just like one), sink and dishwasher. We also stock the
              kitchen with the majority of supplies you will need for cooking
              and dining. Such as, salt, pepper, oil, vinegar, pots, pans,
              mixing bowls, a Keurig with supplied K-cups, a regular coffee
              maker, plates, bowls, cups, silverware, knives, cooking utensils,
              toaster and a Britta purified water pitcher.
            </p>
          </Grid>
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
            evening? Turn on the electric fireplace, with or without the heat,
            and enjoy the ambiance.
          </p>
          <Typography variant='h6' className={classes.subTitle}>
            Sleeping
          </Typography>
          <p className={classes.rootText}>
            The main bed is a very comfy queen mattress on a custom murphy bed.
            The murphy bed is designed to fold up to make more space if needed.
            No expense was spared with the sleeping arrangements as a good night
            sleep is one of the most important factors for a great stay! There
            is also a desk that can be flipped out when the murphy bed is up!
            You will find another bed as a queen sleeper sofa with an upgraded
            memory foam mattress. I like to let our reviews to speak for
            themselves and the mattresses are always very important. (From
            Leslie, we were exhausted in the evening, and the beds were so comfy
            - even the sofa sleeper!)
          </p>
          <Typography variant='h6' className={classes.subTitle}>
            Bathroom
          </Typography>
          <p className={classes.rootText}>
            The bathroom is a small, but a stunning ¾ bath (no bathtub). The
            shower has both a traditional shower head and a rain shower head
            that can be controlled independently for ultimate comfort.
          </p>
          <Typography variant='h6' className={classes.subTitle}>
            Outdoor Space
          </Typography>
          <p className={classes.rootText}>
            Walk out the French doors onto a beautiful and peaceful deck. At
            over 20’ wide you will find a table for 4 to enjoy a peaceful meal,
            a sofa to relax while drinking your morning coffee and watch the sun
            rise over the lake! Out the front windows and over the North West
            side of the deck you can get a small view of the Rocky Mountains.
            You may also use the gate in our backyard to access miles of trails
            around the different neighborhoods and a walk around the lake, just
            know this is our space and our dogs may come out to say hello! The
            views of the Rocky Mountains from the lake are amazing! This is by
            far my favorite part of our place, enjoying the scenery and fresh
            air!
          </p>
          <Typography variant='h6' className={classes.subTitle}>
            Other things to know
          </Typography>
          <p className={classes.rootText}>
            You will also find an all in one washer and dryer in the walk-in
            closet making long term stays very convenient. No need to move from
            the washer to the dryer, this one machine does both! 420 Friendly –
            It’s Colorado, it’s legal, so have some fun. Just please be
            respectful and do not smoke inside and please keep the windows and
            doors closed while smoking. The deck is a perfect location to
            partake, please just be respectful of our neighbors and their kids.
            Be discrete please. Window coverings are designed for privacy when
            needed but still allow for natural light with adjustable shutters,
            top down bottom up blinds and sheer or blackout curtains. When they
            are all closed you can easily sleep during the day if needed. We do
            live in the main home that you can see in the last picture. If you
            read through the reviews, many people will mention how private the
            place is. With the deck being on the back you will hardly ever see
            us unless we are also enjoying the backyard. We do use the garage
            below you, however you can hardly hear it open with how well
            insulated the floor is. We do have 2 dogs. They are both friendly
            but our white dog, Varly, will bark at you if he is outside until he
            is comfortable with you, then he just wants to kiss you. They have
            no access to you unless you choose to enter our backyard. If you are
            missing your own dogs, or just want to say hello, please feel free
            to but always close gates behind you and do not let them out of the
            fenced area. Pack and play as well as a baby gate are available for
            your use in the Bird House for those traveling with children. Thanks
            for your interest in our place and please do not hesitate to reach
            out with any additional questions!
          </p>
        </Grid>
        <Divider />
        <Grid container style={{ margin: '1em' }}>
          <Grid item xs={12}>
          <Typography variant='h5' className={classes.sectionHeader}>
            Amenities
          </Typography>
          </Grid>
          <Grid
            item
            xs={3}
            s={3}
            md={2}
            lg={1}
            xl={1}
            style={{ margin: '1px' }}
          >
            Private Deck
            <WbSunnyOutlinedIcon />
          </Grid>
          <Grid
            item
            xs={3}
            s={3}
            md={2}
            lg={1}
            xl={1}
            style={{ margin: '1px' }}
          >
            Air conditioning
            <AcUnitOutlinedIcon />
          </Grid>
          <Grid
            item
            xs={3}
            s={3}
            md={2}
            lg={1}
            xl={1}
            style={{ margin: '1px' }}
          >
            50" HDTV
            <TvOutlinedIcon />
          </Grid>
          <Grid
            item
            xs={3}
            s={3}
            md={2}
            lg={1}
            xl={1}
            style={{ margin: '1px' }}
          >
            Free street parking
            <LocalParkingOutlinedIcon />
          </Grid>
          {/* <Grid item xs>
            Indoor fireplace
            <FireplaceOutlinedIcon />
          </Grid> */}
          <Grid
            item
            xs={3}
            s={3}
            md={2}
            lg={1}
            xl={1}
            style={{ margin: '2px' }}
          >
            Washer/Dryer
            <LocalLaundryServiceOutlinedIcon />
          </Grid>
          <Grid
            item
            xs={3}
            s={3}
            md={2}
            lg={1}
            xl={1}
            style={{ margin: '1px' }}
          >
            Wifi
            <WifiOutlinedIcon />
          </Grid>
          <Grid
            item
            xs={3}
            s={3}
            md={2}
            lg={1}
            xl={1}
            style={{ margin: '1px' }}
          >
            Kitchen
            <KitchenOutlinedIcon />
          </Grid>
        </Grid>
        <div>
          <Grid container>
            <Grid item xs={6} s={6} md={4} lg={3}>
              <Typography className={classes.subTitle}>Bathroom</Typography>
              <ul className={classes.ulText}>Conditioner</ul>
              <ul className={classes.ulText}>Cleaning products</ul>
              <ul className={classes.ulText}>Shampoo</ul>
              <ul className={classes.ulText}>Hair dryer</ul>
              <ul className={classes.ulText}>Hot water</ul>
              <ul className={classes.ulText}>Body soap</ul>
              <ul className={classes.ulText}>Towels</ul>
            </Grid>
            <Grid item xs={6} s={6} md={4} lg={3}>
              <Typography className={classes.subTitle}>
                Bedroom & Laundry
              </Typography>

              <ul className={classes.ulText}>
                Clothing storage: dresser and walk-in closet
              </ul>
              <ul className={classes.ulText}>Washer/Dryer</ul>
              <ul className={classes.ulText}>Hangers</ul>
              <ul className={classes.ulText}>Iron</ul>
              <ul className={classes.ulText}>Room-darkening shades</ul>
              <ul className={classes.ulText}>Bed linens</ul>
              <ul className={classes.ulText}>Extra pillows and blankets</ul>
            </Grid>
            <Grid item xs={6} s={6} md={4} lg={3}>
              <Typography className={classes.subTitle}>
                Entertainment
              </Typography>
              <ul className={classes.ulText}>50" HDTV with</ul>
              <ul>
                <li>Amazon Prime Video </li>
                <li>Netflix </li>
                <li>Disney+ </li>
              </ul>
              <ul className={classes.ulText}>Game console: Xbox 360</ul>
            </Grid>
            <Grid item xs={6} s={6} md={4} lg={3}>
              <Typography className={classes.subTitle}>Family</Typography>

              <ul className={classes.ulText}>Board games</ul>
              <ul className={classes.ulText}>Baby safety gates</ul>
              <ul className={classes.ulText}>Pack 'n Play/travel crib</ul>
              <ul className={classes.ulText}>Children's dinnerware</ul>
            </Grid>
            <Grid item xs={6} s={6} md={4} lg={3}>
              <Typography className={classes.subTitle}>
                Heating and cooling
              </Typography>

              <ul className={classes.ulText}>Air conditioning</ul>
              <ul className={classes.ulText}>Portable fan</ul>
              <ul className={classes.ulText}>Ceiling fan</ul>
              <ul className={classes.ulText}>Indoor fireplace</ul>
              <ul className={classes.ulText}>Heating</ul>
            </Grid>
          </Grid>
        </div>
        <Divider />
        <p>
        <Typography variant='h4' className={classes.sectionHeader}>
          House Rules
        </Typography>
        </p>
        <Divider />
        <Typography variant='h4' className={classes.sectionHeader}>
          Policy and Notes
        </Typography>
        <Typography variant='h6' className={classes.subTitle}>
          Payment Schedule
        </Typography>
        <Typography variant='h6' className={classes.subTitle}>
          Cancellation Policy
        </Typography>
        <Typography variant='h6' className={classes.subTitle}>
          Damage deposit
        </Typography>
      </div>
    </ThemeProvider>
  );
};

export default Overview;
