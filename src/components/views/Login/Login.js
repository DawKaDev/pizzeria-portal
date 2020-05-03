import React from 'react';
import styles from './Login.module.scss';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const Login = () => {
  return (
    <Container maxWidth='xs'>
      <h2 className={styles.title}>Log in <span>form</span></h2>
      <p className={styles.description}>Type correct data to log in</p>
      <form noValidate>
        <TextField id="login" fullWidth='true' margin='dense' label="Login" />
        <TextField id="login-password" fullWidth='true' margin='dense' type='password' label="Password" />
        <Box my={3}>
          <Grid container justify='space-between'>
            <Button item color='primary' size='small'>Forgot password ?</Button>
            <Grid item lg>
              <Grid container justify='flex-end'>
                <Box mr={1} m='auto' clone><Button variant='outlined' size='medium'>Register</Button></Box>
                <Button variant='contained' color='primary' size='large'>Login</Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Container>
  );
};

export default Login;