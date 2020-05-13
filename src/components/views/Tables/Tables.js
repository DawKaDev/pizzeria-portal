import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Tables.module.scss';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const Tables = () => {
  const currentDate = new Date();
  console.log(currentDate);
  return (
    <div className={styles.component}>
      <h2 className={styles.title}>Booking <span>events</span></h2>
      <Grid container>
        <Grid item lg={12}>
          <Button className={styles.link} variant='contained' color='primary' component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName="active">New Booking</Button>
          <Button className={styles.link} variant='contained' color='primary' component={Link} to={`${process.env.PUBLIC_URL}/tables/events/new`} activeClassName="active">New Event</Button>
          <Button className={styles.link} color='primary' component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/111`} activeClassName="active">Bookings</Button>
          <Button className={styles.link} color='primary' component={Link} to={`${process.env.PUBLIC_URL}/tables/events/111`} activeClassName="active">Events</Button>
        </Grid>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid item container lg={3} justify="space-around">
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Date picker dialog"
              format="dd/MM/yyyy"
              value={currentDate}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="Time picker"
              ampm={false}
              value={currentDate}
              KeyboardButtonProps={{
                'aria-label': 'change time',
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </Grid>
    </div>
  );
};

export default Tables;