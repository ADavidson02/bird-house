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

      </div>
    </div>
  );
};

export default Map;
