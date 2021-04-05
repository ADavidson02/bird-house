import React from 'react'
import { Grid, makeStyles, ThemeProvider, Typography } from '@material-ui/core';
import PeopleOutlinedIcon from '@material-ui/icons/PeopleOutlined';
import { theme } from '../../themes/themes';
import KingBedOutlinedIcon from '@material-ui/icons/KingBedOutlined';
import EmojiFoodBeverageOutlinedIcon from '@material-ui/icons/EmojiFoodBeverageOutlined';
import BathtubOutlinedIcon from '@material-ui/icons/BathtubOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FingerprintIcon from '@material-ui/icons/Fingerprint';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'start',
  }
}))

const Overview = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid container></Grid>
      <div>
        <Typography variant='h4'>Loft</Typography>
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
        <p>
          The Bird House is a completely private studio with everything you
          need! With no shared spaces or walls, a large private deck with
          beautiful scenery, this is the perfect place to unwind after a day of
          exploring! Or cuddle up with the elegant electric fireplace, and watch
          your favorite streaming services on a 50" TV and just stay in and
          relax. The modern kitchen makes cooking simple & convenient and the
          stunning bathroom with 2 shower heads will leave you refreshed, never
          wanting to leave!
        </p>
        <Typography variant='h6'>The space</Typography>
        <p>Welcome to the Bird House! We can not wait to have you stay!</p>
        <p>
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
        <Typography variant='h6'>Kitchen</Typography>
        <p>
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
        <Typography variant='h6'>Living Room</Typography>
        <p>
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
        
      </div>
    </ThemeProvider>
  );
}

export default Overview;