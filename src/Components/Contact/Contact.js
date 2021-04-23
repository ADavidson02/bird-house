import React, { useState } from 'react';
import { theme } from '../../themes/themes';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}))

const Contact = () => {
  const [name, setname ] = useState('')
  const [email, setEmail ] = useState('')
  const [phone, setPhone ] = useState('')
  const [message, setMessage ] = useState('')


  const 
  return(
    <h2>Contact</h2>
  ) 
};

export default Contact;
