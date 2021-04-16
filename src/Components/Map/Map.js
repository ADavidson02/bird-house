import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { theme } from '../../themes/themes';

const useStyles = makeStyles((theme) => {

})


const Map = () => {
  return (
    <div>
      <Typography variant='h3'>Location</Typography>
      <div>
        <Typography variant='h5'>neighborhood description:</Typography>
        <p>
          The neighborhood is very quite and with miles of trail systems,
          including walking to the lake, accessible from the backyard it is a
          beautiful place to stay!
        </p>
        <Typography variant='h5'>Getting around</Typography>
        <p>
          Our home is not walkable to restaurants and bars, a car is
          recommended. Plenty of street parking is available.
        </p>
        <Typography variant='h4'>Property</Typography>
        <Typography variant='h5'>Property Type</Typography>
        <p>Guesthouse</p>
        <Typography variant='h5'>Guest Safety</Typography>
        <p>Security cameras/audio recording devices</p>
        <p>Carbon monoxide alarm</p>
        <p>Smoke alarm</p>
        <p>Must climb stairs</p>
        <p>Pets live on property</p>
      </div>
    </div>
  );
};

export default Map;
