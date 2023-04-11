import { Button, TextField, Typography } from '@mui/material';
import { Fragment } from 'react';
import { Span } from './Register.styled';

const Register = (props) => {
  const { handlInputChange, email, password, name } = props;


  return (
    <Fragment>
      <TextField
        type="text"
        name="name"
        required
        size="small"
        margin="normal"
        fullWidth={true}
        label="Name"
        placeholder="enter your name"
        variant="outlined"
        value={name}
        onChange={handlInputChange}
      />
      <TextField
        type="text"
        name="email"
        required
        size="small"
        margin="normal"
        fullWidth={true}
        label="Email"
        placeholder="enter your email"
        variant="outlined"
        value={email}
        onChange={handlInputChange}
      />
      <TextField
        type="password"
        name="password"
        required
        size="small"
        margin="normal"
        fullWidth={true}
        label="Password"
        placeholder="enter your password"
        variant="outlined"
        value={password}
        onChange={handlInputChange}
      />
      <Button
        sx={{
          marginTop: 1,
          fontFamily: 'Roboto Slab',
          width: '50%',
          marginBottom: 2,
        }}
        type="submit"
        variant="contained"
      >
        Register
      </Button>
      <Typography variant="body1" sx={{ fontFamily: 'Roboto Slab, ' }}>
      you have an account<Span>login</Span>
      </Typography>
    </Fragment>
  );
};

export default Register;
