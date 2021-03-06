import React, { useState } from 'react';
import { theme } from '../../themes/themes';
import { makeStyles, Typography, TextField, Button, Grid } from '@material-ui/core';
import emailjs from 'emailjs-com';

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
  formRoot: {
    display: 'flex',
    flexDirection: 'column',
    margin: '2em'
  },
  formField: {
    margin: '1em',
    webkitBoxShadow: '5px 3px 5px -1px #000000',
    boxShadow: '5px 3px 5px -1px #000000',
  }
}));

const Contact = () => {
  const classes = useStyles();
  const [name, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [formError, setFormError] = useState(false)

  const clearForm = () => {
    setContactName('');
    setEmail('');
    setMessage('');
    setError(false);
  };

  const checkFields = (e) => {
    if (!name || !email || !message) {
      setDisabled(false);
      if (!name) {
          setError({ ...error, name: true });
        } else if (!email) {
            setError({ ...error, email: true });
          } else if (!message) {
              setError({ ...error, message: true });
            }
            setFormError(true)
            return 
    } else {
      setDisabled(true)
      sendEmail(e)
    }
  }

  const sendEmail = (e) => {
    e.preventDefault()
      emailjs
        .sendForm(
          'service_gl45904',
          'contact_default',
          '#contact-form',
          'user_XWGfE4ZGzHZ9MITXAPJAM'
        )
        .then(
          (result) => {
            alert(
              'Your message has been sent successfully. We will contact you soon.'
            );
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        )
      clearForm()
    }

  return (
    <div>
      <Typography variant='h4' color='primary' className={classes.pageTitle}>
        Contact
      </Typography>
      <form id='contact-form' noValidate className={classes.formRoot}>
        <TextField
          className={classes.formField}
          error={error.name}
          required={error.name}
          type='text'
          variant='outlined'
          label='Name'
          name='user_name'
          value={name}
          onChange={(e) => setContactName(e.target.value)}
        ></TextField>
        <TextField
          className={classes.formField}
          error={error.email}
          required={error.email}
          variant='outlined'
          label='Email'
          type='email'
          name='user_email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></TextField>
        <TextField
          className={classes.formField}
          error={error.message}
          required={error.message}
          variant='outlined'
          label='Message'
          type='text'
          name='user_message'
          multiline
          rowsMax={12}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></TextField>
        <Button
          className={classes.formField}
          variant='contained'
          color='secondary'
          disabled={disabled}
          onClick={checkFields}
        >
          Send
        </Button>
        {formError && (
          <h3>Please make sure all inputs are filled before pressing send</h3>
        )}
      </form>
    </div>
  );
};

export default Contact;
