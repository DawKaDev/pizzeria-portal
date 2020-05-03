import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Tables.module.scss';
import Button from '@material-ui/core/Button';

const Tables = () => {
  return (
    <div className={styles.component}>
      <h2>Tables View</h2>
      <Button className={styles.link} variant='contained' color='primary' component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName="active">New Booking</Button>
      <Button className={styles.link} variant='contained' color='primary' component={Link} to={`${process.env.PUBLIC_URL}/tables/events/new`} activeClassName="active">New Event</Button>
      <Button className={styles.link} color='primary' component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/111`} activeClassName="active">Bookings</Button>
      <Button className={styles.link} color='primary' component={Link} to={`${process.env.PUBLIC_URL}/tables/events/111`} activeClassName="active">Events</Button>
    </div>
  );
};

export default Tables;