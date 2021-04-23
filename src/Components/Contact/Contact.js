
import React, { useState } from 'react';
import { theme } from '../../themes/themes';
import {
  Grid,
  makeStyles,
  Typography,
  Card,
  CardContent,
  TextField,
} from '@material-ui/core';

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
}))

const Contact = () => {
  const classes = useStyles();
  const [name, setContactName ] = useState('')
  const [email, setEmail ] = useState('')
  const [phone, setPhone ] = useState('')
  const [message, setMessage ] = useState('')
  const [error, setError] = useState('')


  
  return(
    <div>
      <Typography variant='h4' color='primary' className={classes.pageTitle}>
        Contact 
      </Typography>
    </div>
  ) 
};

export default Contact;
