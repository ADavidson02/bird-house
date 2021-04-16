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
        <div>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d48810.50443357659!2d-104.93981834001048!3d40.12765730066404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1618595777154!5m2!1sen!2sus'
            style={{
              border: '0',
              width: '600px',
              height: '450px',
              marginBottom: '6em',
            }}
            allowfullscreen=''
            loading='lazy'
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
