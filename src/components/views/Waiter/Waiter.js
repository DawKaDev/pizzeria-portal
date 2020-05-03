import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Waiter.module.scss';
import Button from '@material-ui/core/Button';

const Waiter = () => {
  return (
    <div className={styles.component}>
      <h2>Waiter View</h2>
      <Button className={styles.link} color='primary' variant='contained' component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/new`} activeClassName="active">New Order</Button>
      <Button className={styles.link} color='primary' component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/111`} activeClassName="active">Order</Button>
    </div>
  );
};

export default Waiter;