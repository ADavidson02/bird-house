
import React, { useState } from 'react';
import { theme } from '../../themes/themes';
import {
  Grid,
  makeStyles,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
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


  
  return (
    <div>
      <Typography variant='h4' color='primary' className={classes.pageTitle}>
        Contact
      </Typography>
      <form noValidate autoComplete='off'>
        <TextField
          error={error.name}
          required={error.name}
          variant='outlined'
          label='Name'
          onChange={(e) => setContactName(e.target.value)}
        ></TextField>
        <TextField
          error={error.email}
          required={error.email}
          variant='outlined'
          label='Email'
          onChange={(e) => setEmail(e.target.value)}
        ></TextField>
        <TextField
          error={error.phone}
          required={error.phone}
          variant='outlined'
          label='Phone'
          onChange={(e) => setPhone(e.target.value)}
        ></TextField>
        <TextField
          error={error.message}
          required={error.massage}
          variant='outlined'
          label='Message'
          onChange={(e) => setMessage(e.target.value)}
        ></TextField>
      </form>
    </div>
  ); 
};

export default Contact;
